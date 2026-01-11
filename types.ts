
export enum Tier {
  Tier1 = 1, // Pass: Single-fact recall
  Tier2 = 2, // Merit: Multi-fact or Law
  Tier3 = 3, // Distinction: Linking Factors
  Tier4 = 4  // Expert: Subtle anomalies
}

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface Question {
  id: string;
  tier: Tier;
  category: string;
  region: string;
  scenarioText?: string;
  questionText: string;
  explanationText: string;
  mentalMapText: string;
  options: Option[];
}

export interface LogicBlock {
  id: string;
  text: string;
  type: 'factor' | 'connector' | 'outcome' | 'bridge';
}

export interface WrittenQuestionPart {
  id: string;
  prompt: string;
  marks: number;
  modelAnswer: string;
  rubric: string[]; // Key points that must be mentioned
  logicBlocks?: LogicBlock[]; // For Puzzle Mode scaffolding
}

export interface WrittenQuestion {
  id: string;
  title: string;
  category: string;
  parts: WrittenQuestionPart[];
}

export interface UserAnswerRecord {
  questionId: string;
  lastAnsweredAt: number;
  easeFactor: number;
  interval: number;
  repetitions: number;
  isCorrect: boolean;
  seenCount: number;
}

export interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  coveragePercentage: number;
  regionHeatmap: Record<string, { total: number; correct: number }>;
  streak: number;
}
