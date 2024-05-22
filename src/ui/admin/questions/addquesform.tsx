'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Input, Textarea, Button, RadioGroup, Radio, CircularProgress } from '@nextui-org/react';
import { IoSendSharp } from 'react-icons/io5';
import { MultiDropdownMenu } from './dropdown';
import toast, { Toaster } from 'react-hot-toast';
import { handleQuestionSubmit } from '@/services/admin/question-actions';

const AddQuestionForm: React.FC<{
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}> = ({ setBreadCrumbVal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleQuestionSubmit({ e, setLoading, toast });
  };

  return (
    <form
      onSubmit={handleSubmition}
      className="flex flex-col min-h-fit h-full  w-full bg-gray-300 border-primary  px-6 py-8 lg:flex-row items-stretch lg:justify-between gap-10 "
    >
      <Toaster />
      <div className=" w-full lg:w-3/5 min-h-[400px] max-h-[800px] flex flex-col items-stretch lg:justify-between gap-5">
        <section className="flex flex-col gap-2">
          <div className=" w-full flex flex-col  gap-2 ">
            <div className="flex items-center gap-5">
              <Input
                type="text"
                name="questionNo"
                label="Q."
                labelPlacement="outside-left"
                placeholder="QNo."
                size="md"
                classNames={{
                  mainWrapper: 'w-full',
                  inputWrapper: 'border-primary flex-grow-0',
                }}
                className="w-32"
                isRequired={true}
              />
              <Input
                type="text"
                name="tag"
                placeholder="Tag "
                size="md"
                classNames={{
                  mainWrapper: 'w-full',
                  inputWrapper: 'border-primary ',
                }}
                className="w-20 mr-8"
              />
            </div>
            <Textarea
              type="text"
              name="question"
              placeholder="Write Question ..."
              size="md"
              classNames={{
                base: 'w-[90%]',
                mainWrapper: 'w-full',
                inputWrapper: 'w-full border-primary min-h-20 ml-8 ',
              }}
              maxRows={3}
              isRequired={true}
            />
          </div>
          <input type="file" name="qImage" className=" w-72 ml-8 " />
        </section>
        <section className="flex w-full items-center justify-between">
          <div className="grid grid-rows-4 w-1/2  gap-3">
            <Input
              type="text"
              name="optionA"
              label="A."
              labelPlacement="outside-left"
              placeholder="option a."
              size="md"
              classNames={{
                inputWrapper: 'border-primary',
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
                inputWrapper: 'border-primary',
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
                inputWrapper: 'border-primary',
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
                inputWrapper: 'border-primary',
              }}
              isRequired={true}
            />
          </div>
          <div className="grid grid-rows-4 w-1/2  items-end  gap-5">
            <input type="file" name="aImage" className=" w-full  " />
            <input type="file" name="bImage" className=" w-full  " />
            <input type="file" name="cImage" className=" w-full  " />
            <input type="file" name="dImage" className=" w-full  " />
          </div>
        </section>

        <RadioGroup
          name="correctAnswer"
          label="Select correct option: "
          className="mt-2 flex flex-row w-full items-center gap-4"
          orientation="horizontal"
          isRequired={true}
          classNames={{ label: 'text-slate-800' }}
        >
          <Radio
            classNames={{
              wrapper: 'bg-white border  border-gray-500',
            }}
            value="a"
            className="mr-1"
          >
            A
          </Radio>
          <Radio
            classNames={{
              wrapper: 'bg-white border  border-gray-500',
            }}
            value="b"
            className="mr-1"
          >
            B
          </Radio>
          <Radio
            classNames={{
              wrapper: 'bg-white border  border-gray-500',
            }}
            value="c"
            className="mr-1"
          >
            C
          </Radio>
          <Radio
            classNames={{
              wrapper: 'bg-white border  border-gray-500',
            }}
            value="d"
            className="mr-1"
          >
            D
          </Radio>
        </RadioGroup>

        <Textarea
          name="explanation"
          labelPlacement="outside"
          placeholder="Explainaton ..."
          classNames={{
            inputWrapper: 'border-primary min-h-20',
          }}
          maxRows={3}
          size="md"
          className="max-w-xs  lg:ml-5 mt-4 "
        />
      </div>
      <div className=" w-full lg:w-2/5 xl:min-h-[400px] xl:max-h-[800px]  flex flex-col items-start lg:justify-between gap-5 ">
        <MultiDropdownMenu setBreadCrumbVal={setBreadCrumbVal} />
        <Button
          size="lg"
          radius="lg"
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
          className="btn-filled"
          type="submit"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default AddQuestionForm;
