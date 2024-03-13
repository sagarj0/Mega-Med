'use client';
import react from 'react';
import { subjects } from '@/utils/subjects';

import {
  Input,
  Textarea,
  Select,
  SelectItem,
} from '@nextui-org/react';

export default function AddQuestionForm() {
  return (
    <div className="flex flex-col h-full w-full bg-gray-50/50  rounded-md px-6 py-8 lg:flex-row">
      <div className=" w-3/5">
        <form className="flex flex-col gap-2">
          <Input
            type="text"
            label="Q."
            labelPlacement="outside-left"
            placeholder="Write Question ..."
            size="md"
            classNames={{
              mainWrapper: 'w-4/5',
              label: 'text-gray-400',
            }}
            className="mb-3"
          />

          <Input
            type="text"
            label="A."
            labelPlacement="outside-left"
            placeholder="option a."
            size="md"
            classNames={{
              label: 'text-gray-400',
            }}
          />
          <Input
            type="text"
            label="B."
            labelPlacement="outside-left"
            placeholder="option b."
            size="md"
            classNames={{
              label: 'text-gray-400',
            }}
          />
          <Input
            type="text"
            label="C."
            labelPlacement="outside-left"
            placeholder="option c."
            size="md"
            classNames={{
              label: 'text-gray-400',
            }}
          />
          <Input
            type="text"
            label="D."
            labelPlacement="outside-left"
            placeholder="option d."
            size="md"
            classNames={{
              label: 'text-gray-400',
            }}
          />
          <Textarea
            label="Explanation"
            labelPlacement="outside"
            placeholder="Write explainaton ..."
            size="md"
            className="max-w-xs mt-6 ml-5"
          />
        </form>
      </div>
      <div className="w-1/4">
        <Select
          label="Subjects"
          className="max-w-xs"
          size="sm"
        >
          {subjects.map((subject) => (
            <SelectItem
              key={subject.value}
              value={subject.value}
            >
              {subject.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
}
