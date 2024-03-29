import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react';

export default function SubjectTable() {
  return (
    <Table
      aria-label="Example empty table"
      classNames={{
        wrapper: 'bg-gray-50/50 rounded-lg',
      }}
    >
      <TableHeader>
        <TableColumn>Unit</TableColumn>
        <TableColumn>Question</TableColumn>
        <TableColumn>Answer</TableColumn>
      </TableHeader>
      <TableBody emptyContent={'No rows to display.'}>{[]}</TableBody>
    </Table>
  );
}
