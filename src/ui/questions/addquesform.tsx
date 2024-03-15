'use client';
import react from 'react';
import { subjects } from '@/datas/subjects';

import { Input, Textarea, Select, SelectItem, Button } from '@nextui-org/react';
import { IoSendSharp } from 'react-icons/io5';
import { DropdownMenuDemo } from './dropdown';

export default function AddQuestionForm() {
  return (
    <form className="flex flex-col h-full w-full bg-gray-50/50  rounded-md px-6 py-8 lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-8">
      <div className=" lg:col-span-3 lg:row-span-2 ">
        <div className="h-full flex flex-col gap-2">
          <Input
            type="text"
            label="Q."
            labelPlacement="outside-left"
            placeholder="Write Question ..."
            size="md"
            classNames={{
              mainWrapper: 'w-full',
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
            className="max-w-xs mt-6 ml-5 mt-16"
          />
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        {/* <Select label="Subjects" className="max-w-xs" size="sm">
          {subjects.map((subject) => (
            <SelectItem key={subject.value} value={subject.value}>
              {subject.label}
            </SelectItem>
          ))}
        </Select> */}
        <DropdownMenuDemo />
      </div>
      <div className="lg:col-span-1 lg:row-span-1 lg:self-end pb-1">
        <Button
          size="lg"
          radius="lg"
          color="primary"
          endContent={<IoSendSharp className="text-xl" />}
        >
          Send
        </Button>
      </div>
    </form>
  );
}
