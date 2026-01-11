
/**
 * SuperMemo 2 (SM-2) Algorithm implementation
 * quality: 0-5 (we will map correct/incorrect)
 */
export function calculateSM2(
  quality: number,
  prevInterval: number,
  prevRepetitions: number,
  prevEaseFactor: number
) {
  let interval: number;
  let repetitions: number;
  let easeFactor: number;

  if (quality >= 3) {
    if (prevRepetitions === 0) {
      interval = 1;
    } else if (prevRepetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(prevInterval * prevEaseFactor);
    }
    repetitions = prevRepetitions + 1;
  } else {
    interval = 1;
    repetitions = 0;
  }

  easeFactor = prevEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  if (easeFactor < 1.3) easeFactor = 1.3;

  return { interval, repetitions, easeFactor };
}

// Helper to map boolean result to SM-2 quality score
export const mapResultToQuality = (isCorrect: boolean) => (isCorrect ? 5 : 1);
