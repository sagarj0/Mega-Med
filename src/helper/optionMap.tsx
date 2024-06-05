import { Question } from '../lib/types';

export const processedQuestions = (questions: Array<Question>) => {
  if (!questions) {
    return [];
  }
  return questions.map((question) => {
    question.correctAnswer =
      question.correctAnswer === 'a'
        ? question.optionA
        : question.correctAnswer === 'b'
          ? question.optionB
          : question.correctAnswer === 'c'
            ? question.optionC
            : question.optionD;
    return question;
  });
};
