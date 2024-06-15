// pages/subject-wise.tsx
'use client';

import React, { useState } from 'react';
import { Button, Card, Image, Radio, RadioGroup, Select, SelectItem } from '@nextui-org/react';
import axios from 'axios';
import { Question } from '@/lib/types';
import { backUrl } from '@/datas/variable';
import { subjects } from '@/datas/tab';

const SubjectWise: React.FC = () => {
  const [subject, setSubject] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [results, setResults] = useState<{ [key: number]: boolean }>({});

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`${backUrl}/api/v1/test/subwise/${subject}`);
      const data = response.data.data;
      setQuestions(data.questions);
      setSubmitted(false);
      setScore(0);
      setResults({});
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswerChange = (questionNo: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionNo]: answer }));
  };

  const handleSubmit = () => {
    let newScore = 0;
    const newResults: { [key: number]: boolean } = {};

    questions.forEach((question) => {
      const isCorrect = answers[question.questionNo] === question.correctAnswer;
      newResults[question.questionNo] = isCorrect;
      if (isCorrect) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setResults(newResults);
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Select
        items={subjects}
        label={'Subjects'}
        onChange={(e) => setSubject(e.target.value)}
        style={{ width: '300px', margin: '10px 0' }}
      >
        {(subject) => <SelectItem key={subject.key}>{subject.label}</SelectItem>}
      </Select>

      <Button onClick={fetchQuestions} style={{ marginBottom: '20px' }}>
        Fetch mcqs
      </Button>

      {questions.map((question) => {
        const isCorrect = results[question.questionNo];
        const borderColor = submitted ? (isCorrect ? 'green' : 'red') : 'transparent';

        return (
          <Card key={question.questionId} style={{ marginBottom: '20px', border: `2px solid ${borderColor}` }}>
            <div style={{ padding: '20px' }}>
              <h4>{question.question}</h4>
              {question.qImage && <Image width={300} height={150} src={question.qImage} alt="Question" />}
              <RadioGroup onChange={(e) => handleAnswerChange(question.questionNo, e.target.value)}>
                <Radio value="a">
                  {question.optionA}{' '}
                  {question.aImage && <Image width={300} height={150} src={question.aImage} alt="Option A" />}
                </Radio>
                <Radio value="b">
                  {question.optionB}{' '}
                  {question.bImage && <Image width={300} height={150} src={question.bImage} alt="Option B" />}
                </Radio>
                <Radio value="c">
                  {question.optionC}{' '}
                  {question.cImage && <Image width={300} height={150} src={question.cImage} alt="Option C" />}
                </Radio>
                <Radio value="d">
                  {question.optionD}{' '}
                  {question.dImage && <Image width={300} height={150} src={question.dImage} alt="Option D" />}
                </Radio>
              </RadioGroup>
              {submitted && (
                <div>
                  <p style={{ color: isCorrect ? 'green' : 'red' }}>
                    {isCorrect ? (
                      'Correct!'
                    ) : (
                      <span>
                        Incorrect.
                        <br />
                        <span style={{ color: 'green' }}>Correct answer: {question.correctAnswer}</span>
                      </span>
                    )}
                  </p>
                  {question.explanation && (
                    <span style={{ fontWeight: '600' }}>{`Explanation: ${question.explanation}`}</span>
                  )}
                </div>
              )}
            </div>
          </Card>
        );
      })}

      {questions.length > 0 && (
        <Button onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>
      )}

      {submitted && (
        <Card style={{ marginTop: '20px', padding: '20px' }}>
          <h4>
            Total Marks: {score} / {questions.length}
          </h4>
        </Card>
      )}
    </div>
  );
};

export { SubjectWise };
