import React from 'react';
import { Toaster } from 'react-hot-toast';
import { columns } from '@/datas/tab';
import { Question } from '@/lib/types';
import { useQuestions, usePageCount } from '@/services/admin/questions/count-action';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
  Pagination,
} from '@nextui-org/react';

const SubjectTable: React.FC<{ subject: string }> = ({ subject }) => {
  const { totalPages, size } = usePageCount(subject);
  const { questionsData, questionCount, isFetching, handlePageChange, page } = useQuestions(subject, size);

  return (
    <>
      <Toaster />
      <div className="relative h-[530px] overflow-y-auto rounded-xl">
        <p className=" absolute right-5 top-[8.75px] z-50 hidden flex-col items-center md:flex md:flex-row">
          <span className="hidden md:block">Total:</span>
          <span className=" active-text font-semibold">/{questionCount}</span>
        </p>

        <p className=" absolute left-8 top-[8.75px] z-50  md:hidden">
          <span className=" active-text font-semibold">/{questionCount}</span>
        </p>

        <Table
          isHeaderSticky
          isStriped
          isCompact
          aria-label="Dynamic content"
          classNames={{
            wrapper: 'h-[450px] border-primary bg-gray-400 p-0',
            th: 'text-left',
            td: 'md:text-justify md:max-w-[500px] text-wrap ',
          }}
          bottomContentPlacement="outside"
          bottomContent={
            <div className="flex w-full items-center justify-center">
              <Pagination
                isCompact
                showControls
                color="primary"
                page={page}
                initialPage={1}
                total={totalPages}
                onChange={handlePageChange}
              />
              <span className="mx-2 text-sm font-bold "> {size} question / page </span>
            </div>
          }
        >
          <TableHeader>
            {columns.map((column) => (
              <TableColumn key={column.key} className="text-base font-semibold text-slate-800" align="center">
                {column.label}
              </TableColumn>
            ))}
          </TableHeader>
          <TableBody
            items={questionsData as Question[]}
            emptyContent={
              <Spinner
                label={`Loading ${subject} Questions `}
                size="lg"
                classNames={{
                  label: 'text-sm font-semibold text-slate-800',
                }}
              />
            }
          >
            {isFetching
              ? []
              : (question: Question) => (
                  <TableRow key={question.questionId}>
                    {(columnKey) => (
                      <TableCell className="sentence-case text-sm font-medium ">
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
