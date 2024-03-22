'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';

import { Input, Textarea, Button, RadioGroup, Radio } from '@nextui-org/react';
import { IoSendSharp } from 'react-icons/io5';
import { MultiDropdownMenu } from './dropdown';
import axios from 'axios';

const AddQuestionForm: React.FC<{
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
  breadCrumbVal: string;
}> = ({ setBreadCrumbVal, breadCrumbVal }) => {
  const subjectDetails = breadCrumbVal;

  const [subject, unit, chapter] = subjectDetails.split('/');

  const handleSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const questionDetail = {
      subject: subject,
      unit: unit,
      chapter: chapter,
      question: formData.get('question'),
      tag: formData.get('tag'),
      optionA: formData.get('optionA'),
      optionB: formData.get('optionB'),
      optionC: formData.get('optionC'),
      optionD: formData.get('optionD'),
      correctAnswer: formData.get('correctAnswer'),
      explanation: formData.get('explanation'),
    };

    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/manageQuestion/addQuestionManually',
        questionDetail
      );

      if (res.status === 200) {
        console.log(res);
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('An error occurred while sending form data:', error);
    }
  };
  return (
    <form
      onSubmit={handleSubmition}
      className="flex flex-col max-h-fit w-full bg-gray-50/50  rounded-md px-6 py-8 lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-8"
    >
      <div className=" lg:col-span-3 lg:row-span-2 ">
        <div className="h-full flex flex-col gap-5">
          <div className=" w-full flex flex-row justify-between">
            <Input
              type="text"
              name="question"
              label="Q."
              labelPlacement="outside-left"
              placeholder="Write Question ..."
              size="md"
              classNames={{
                mainWrapper: 'w-full',
                label: 'text-gray-400',
              }}
              className="w-3/4"
            />
            <Input
              type="text"
              name="tag"
              // label="Tag"
              // labelPlacement="outside-left"
              placeholder="Tag "
              size="md"
              classNames={{
                mainWrapper: 'w-full',
                label: 'text-gray-400',
              }}
              className="w-24 mr-8"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Input
              type="text"
              name="optionA"
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
              name="optionB"
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
              name="optionC"
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
              name="optionD"
              labelPlacement="outside-left"
              placeholder="option d."
              size="md"
              classNames={{
                label: 'text-gray-400',
              }}
            />
          </div>
          <RadioGroup
            name="correctAnswer"
            label="Select correct option: "
            className="mt-2 flex flex-row w-full items-center gap-4"
            orientation="horizontal"
          >
            <Radio value="a" className="mr-1">
              A
            </Radio>
            <Radio value="b" className="mr-1">
              B
            </Radio>
            <Radio value="c" className="mr-1">
              C
            </Radio>
            <Radio value="d" className="mr-1">
              D
            </Radio>
          </RadioGroup>
          <Textarea
            // label="Explanation"
            name="explanation"
            labelPlacement="outside"
            placeholder="Explainaton ..."
            // disableAutosize
            maxRows={4}
            size="md"
            className="max-w-xs ml-5 mt-4"
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
          className="xl:-ml-4"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddQuestionForm;
