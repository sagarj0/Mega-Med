'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
  Input,
  Textarea,
  Button,
  RadioGroup,
  Radio,
  CircularProgress,
} from '@nextui-org/react';
import { IoSendSharp } from 'react-icons/io5';
import { MultiDropdownMenu } from './dropdown';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const AddQuestionForm: React.FC<{
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}> = ({ setBreadCrumbVal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const formDataArray = Array.from(formData.entries());

    const questionCredential = formDataArray.reduce(
      (acc: { [key: string]: string }, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {}
    );

    console.log(questionCredential);

    try {
      const res = await axios.post(
        'http://localhost:3001/api/v1/manageQuestion/addQuestionManually',
        questionCredential
      );

      if (res.status === 200) {
        setLoading(false);
        console.log(res);
        toast.success('Question added successfully');
        (e.target as HTMLFormElement).reset();
      } else {
        setLoading(false);
        toast.error('Failed to add question');
        console.error('Failed to send form data');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Error sending question data');
      console.error('An error occurred while sending form data:', error);
    }
  };
  return (
    <form
      onSubmit={handleSubmition}
      className="flex flex-col h-full w-full bg-gray-50/50  rounded-md px-6 py-8 lg:grid lg:grid-cols-5 lg:grid-rows-2 gap-8"
    >
      <Toaster />
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
              isRequired={true}
            />
            <Input
              type="text"
              name="tag"
              placeholder="Tag "
              size="md"
              classNames={{
                mainWrapper: 'w-full',
                label: 'text-gray-400 ',
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
              isRequired={true}
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
              isRequired={true}
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
              isRequired={true}
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
              isRequired={true}
            />
          </div>
          <RadioGroup
            name="correctAnswer"
            label="Select correct option: "
            className="mt-2 flex flex-row w-full items-center gap-4"
            orientation="horizontal"
            //isRequired={true} is not working...
            isRequired={true}
            classNames={{ label: 'text-gray-400' }}
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
          endContent={
            loading ? (
              <CircularProgress
                size="md"
                color="primary"
                aria-label="Loading..."
                strokeWidth={5}
                classNames={{
                  svg: 'w-6',
                  track: 'stroke-orange-900',
                }}
              />
            ) : (
              <IoSendSharp className="text-md" />
            )
          }
          className="xl:-ml-4 w-28"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddQuestionForm;
