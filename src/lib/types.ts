export type Question = {
  questionId: string;
  unit: string;
  chapter: string;
  questionNo: number;
  question: string;
  qImage: string | null;
  aImage: string | null;
  bImage: string | null;
  cImage: string | null;
  dImage: string | null;
  eImage: string | null;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: string;
  explanation: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
};

export type QuestionsData = {
  questions: Question[];
  totalQuestions: number;
  totalPages: number;
  currentPage: number;
};

export type QuestionPage = {
  totalPage: number;
};

export type QuestionCount = {
  totalQuestions: number;
};

export type AdminCount = {
  totalAdmins: number;
};

export interface MentorCount {
  totalMentors: number;
}

export interface UserCount {
  totalUsers: number;
}
