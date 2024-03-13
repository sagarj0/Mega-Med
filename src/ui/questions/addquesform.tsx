'use client';
import react from 'react';
import { Input, Textarea } from '@nextui-org/react';

export default function AddQuestionForm() {
  return (
    <div className="w-full p-8 border-2 rounded-md">
      <form className="flex flex-col gap-2">
        <Input
          type="text"
          label="Q."
          labelPlacement="outside-left"
          placeholder="Write Question ..."
          size="md"
          classNames={{
            mainWrapper: 'w-3/4',
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
          size="md"
          className="max-w-xs mt-6 ml-5"
        />
      </form>
    </div>
  );
}
