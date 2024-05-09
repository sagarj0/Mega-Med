import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
} from '@nextui-org/react';
import axios from 'axios';
import { columns } from '@/datas/tab';
import { backUrl } from '@/datas/variable';

const SubjectTable: React.FC<{ subject: string }> = ({ subject }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `${backUrl}/api/v1/manageQuestion/getQuestions/${subject}`
        );
        setQuestions((prevQuestions) => {
          return res.data.data.map((question: any) => {
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
        });
      } catch (error) {
        console.error('An error occurred while fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [subject]);

  return (
    <div className=" h-[450px] overflow-y-auto rounde-xl ">
      <Table
        isHeaderSticky
        aria-label="Dynamic content"
        classNames={{
          wrapper: ' h-full border-primary bg-gray-300  p-0',
        }}
        className="h-full  "
        isStriped
        // isCompact
        // isVirtualized
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} align="center">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={questions as { questionId: string }[]}>
          {(question) => (
            <TableRow key={question.questionId}>
              {(columnKey) => (
                <TableCell>{getKeyValue(question, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default SubjectTable;
