import React, { useState, useEffect } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import axios from 'axios';
import { columns } from '@/datas/tab';
import { backUrl } from '@/datas/variable';

const SubjectTable: React.FC<{ subject: string }> = ({ subject }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `${backUrl}/api/v1/manageQuestion/getQuestions/${subject}`
        );
        setQuestions(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.error('An error occurred while fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [subject]);

  return (
    <div className=" h-[400px] overflow-y-auto rounde-xl ">
      <Table
        isHeaderSticky
        aria-label="Dynamic content"
        classNames={{
          wrapper: ' h-full border-primary bg-gray-300  p-0',
        }}
        className="h-full  "
      >
        <TableHeader columns={columns} className="w-full">
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
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
