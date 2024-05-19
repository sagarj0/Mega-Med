import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';
import { columns } from '@/datas/tab';
import { backUrl, localBackUrl } from '@/datas/variable';
import { QuestionsData, Question } from '@/lib/types';

const fetcher = (url: string): Promise<QuestionsData> =>
  axios.get(url).then((res) => res.data.data);

const SubjectTable: React.FC<{ subject: string }> = ({ subject }) => {
  const { data, error } = useSWR<QuestionsData>(
    `${backUrl}/api/v1/manageQuestion/getQuestions/${subject}`,
    fetcher,
    { refreshInterval: 30000 }
  );

  if (error) {
    toast.error('Error occurred while fetching questions', { duration: 3000 });
  }

  const questionsData =
    data?.questions.map((question) => {
      question.correctAnswer =
        question.correctAnswer === 'a'
          ? question.optionA
          : question.correctAnswer === 'b'
          ? question.optionB
          : question.correctAnswer === 'c'
          ? question.optionC
          : question.optionD;
      return question;
    }) || [];

  const questionCount = data?.questionCount || 0;

  return (
    <>
      <Toaster />
      <div className="relative h-[450px] overflow-y-auto rounded-xl">
        <p className=" hidden z-50 absolute top-[8.75px] md:flex md:flex-row flex-col items-center right-5">
          <span className="hidden md:block">Total:</span>
          <span className=" font-semibold active-text">/{questionCount}</span>
        </p>

        <p className=" md:hidden z-50 absolute top-[8.75px]  left-8">
          <span className=" font-semibold active-text">/{questionCount}</span>
        </p>

        <Table
          isHeaderSticky
          aria-label="Dynamic content"
          classNames={{
            wrapper: 'h-full border-primary bg-gray-300 p-0',
            th: 'text-left',
            td: 'md:text-justify md:max-w-[500px] text-wrap ',
          }}
          className="h-full"
          isStriped
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn
                key={column.key}
                className="font-semibold text-base text-slate-800"
                align="center"
              >
                {column.label}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody items={questionsData as Question[]}>
            {(question: Question) => (
              <TableRow key={question.questionId}>
                {(columnKey) => (
                  <TableCell className="font-medium text-sm">
                    {getKeyValue(question, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default SubjectTable;
