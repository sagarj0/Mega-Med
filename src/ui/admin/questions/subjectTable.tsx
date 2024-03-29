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

const SubjectTable: React.FC<{ subject: string }> = ({ subject }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/v1/manageQuestion/getQuestions/${subject}`
        );
        setQuestions(res.data.data);
      } catch (error) {
        console.error('An error occurred while fetching questions:', error);
      }
    };

    fetchQuestions(); // Fetch data when `subject` changes
  }, [subject]); // Re-run effect when `subject` changes

  return (
    <div className="bg-gray-50/30">
      <Table
        aria-label="Dynamic content"
        classNames={{
          wrapper: 'bg-gray-50/50',
        }}
      >
        <TableHeader columns={columns}>
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
