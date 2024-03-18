'use client';
import React, { Dispatch, SetStateAction } from 'react';

import { Input, Textarea, Button, RadioGroup, Radio } from '@nextui-org/react';
import { IoSendSharp } from 'react-icons/io5';
import { MultiDropdownMenu } from './dropdown';

const AddQuestionForm: React.FC<{
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}> = ({ setBreadCrumbVal }) => {
  return (
    <form className="flex flex-col max-h-fit w-full bg-gray-50/50  rounded-md px-6 py-8 lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-8">
      <div className=" lg:col-span-3 lg:row-span-2 ">
        <div className="h-full flex flex-col gap-4">
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
          />
          <div className="flex flex-col gap-2">
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
          </div>
          <RadioGroup
            name="Options"
            label="Select correct option: "
            className="flex flex-row w-full items-center gap-4 mt-1"
            orientation="horizontal"
          >
            <Radio value="a" className="">
              A
            </Radio>
            <Radio value="b">B</Radio>
            <Radio value="c">C</Radio>
            <Radio value="d">D</Radio>
          </RadioGroup>
          <Textarea
            label="Explanation"
            labelPlacement="outside"
            placeholder="Write explainaton ..."
            // disableAutosize
            maxRows={4}
            size="md"
            className="max-w-xs ml-5 mt-2"
          />
        </div>
      </div>
      <div className="lg:col-span-2 lg:row-span-1">
        <MultiDropdownMenu setBreadCrumbVal={setBreadCrumbVal} />
      </div>
      <div className="lg:col-span-1 lg:row-span-1 lg:self-end xl:mb-2 xl:-ml-40">
        <Button
          size="lg"
          radius="lg"
          color="primary"
          endContent={<IoSendSharp className="text-xl" />}
          className="xl:-ml-3"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddQuestionForm;
