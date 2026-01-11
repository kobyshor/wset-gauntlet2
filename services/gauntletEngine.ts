
import { Question, UserAnswerRecord, Tier } from '../types';
import { QUESTIONS } from '../data/questions';

/**
 * Utility to shuffle an array in-place using Fisher-Yates or a simple sort
 */
function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Mastery Logic:
 * A question is "Mastered" if:
 * 1. repetitions >= 3
 * 2. easeFactor >= 2.5
 * 3. Last attempt was correct
 * Mastered questions are excluded from regular runs to prioritize unseen or weak areas.
 */
function isMastered(record: UserAnswerRecord | undefined): boolean {
  if (!record) return false;
  return record.repetitions >= 3 && record.easeFactor >= 2.5 && record.isCorrect;
}

/**
 * GMAT-style Selection with Full Randomness:
 * 1. Start at a "current ability" Tier.
 * 2. Session is 20 questions.
 * 3. 40% Due/Weak, 50% New, 10% Challenge.
 * Shuffles pools before slicing to ensure variety across devices/sessions.
 */
export function getMasteryRun(userProgress: Record<string, UserAnswerRecord>): Question[] {
  const now = Date.now();
  
  // Filter out mastered questions to focus on growth
  const availablePool = QUESTIONS.filter(q => !isMastered(userProgress[q.id]));
  
  const seenIds = Object.keys(userProgress).filter(id => !!userProgress[id]);
  
  // 1. Identify "Due for Review" (Spaced Repetition)
  // We shuffle these so even if many are due, you get a different subset each time
  const dueForReview = shuffle(availablePool
    .filter(q => {
      const record = userProgress[q.id];
      if (!record) return false;
      const nextReview = record.lastAnsweredAt + record.interval * 24 * 60 * 60 * 1000;
      return now >= nextReview;
    }));

  // 2. Identify Unseen
  // Shuffled to ensure "Linear Progression" feels varied and not like a fixed book order
  const unseen = shuffle(availablePool.filter(q => !seenIds.includes(q.id)));

  // 3. Challenge Pool (Highest Tiers)
  // Shuffled for variety in high-tier logic
  const challenge = shuffle(availablePool.filter(q => q.tier >= Tier.Tier3));

  let session: Question[] = [];

  // Target 20 questions
  
  // 8 Review (40%) - Take from the shuffled 'due' pool
  session = session.concat(dueForReview.slice(0, 8));
  
  // Fill with Unseen to reach 18 (90% cumulative)
  const neededUnseen = Math.max(0, 18 - session.length);
  session = session.concat(unseen.slice(0, neededUnseen));

  // Add 2 Challenges (10%)
  // Filter to avoid duplicates if a challenge question was already picked as Unseen or Due
  const remainingChallenges = challenge.filter(q => !session.find(sq => sq.id === q.id));
  session = session.concat(remainingChallenges.slice(0, 2));

  // Final fill if we still don't have 20 (e.g. at very end of bank)
  if (session.length < 20) {
    const fallback = shuffle(availablePool.filter(q => !session.find(sq => sq.id === q.id)));
    session = session.concat(fallback.slice(0, 20 - session.length));
  }

  // Final shuffle of the selected 20 to mix Review, Unseen, and Challenge questions
  return shuffle(session);
}
