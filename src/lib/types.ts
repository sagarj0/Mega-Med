export interface Question {
  questionId: string;
  unit: string;
  chapter: string;
  questionNo: number;
  question: string;
  image: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}

export interface QuestionsData {
  questions: Question[];
  questionCount: number;
}
