'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Input, Textarea, Button, RadioGroup, Radio } from '@nextui-org/react';
import { IoSendSharp } from 'react-icons/io5';
import { MultiDropdownMenu } from './dropdown';
import { Toaster } from 'react-hot-toast';
import { handleQuestionSubmit } from '@/services/admin/questions/question-actions';

interface Props {
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}

const AddQuestionForm: React.FC<Props> = ({ setBreadCrumbVal }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleQuestionSubmit({ e, setLoading });
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmition}
        className="flex h-full min-h-fit w-full  flex-col items-stretch gap-10  border-primary bg-gray-300 px-6 py-8 lg:flex-row lg:justify-between "
      >
        <div className=" flex max-h-[800px] min-h-[400px] w-full flex-col items-stretch gap-5 lg:w-3/5 lg:justify-between">
          <section className="flex flex-col gap-2">
            <div className=" flex w-full flex-col  gap-2 ">
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
                  className="mr-8 w-20"
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
            <input type="file" name="qImage" className=" ml-8 w-72 " />
          </section>
          <section className="flex w-full items-center justify-between">
            <div className="grid w-3/5 grid-rows-4  gap-3">
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
            <div className="grid w-2/5 grid-rows-4  items-end  gap-5">
              <input type="file" name="aImage" className=" w-full  " />
              <input type="file" name="bImage" className=" w-full  " />
              <input type="file" name="cImage" className=" w-full  " />
              <input type="file" name="dImage" className=" w-full  " />
            </div>
          </section>

          <RadioGroup
            name="correctAnswer"
            label="Select correct option: "
            className="mt-2 flex w-full flex-row items-center gap-4"
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
            className="mt-4  max-w-xs lg:ml-5 "
          />
          <input type="file" name="eImage" className=" w-full lg:ml-5  " />
        </div>
        <div className="flex w-full flex-col items-start  gap-5 lg:w-2/5 lg:justify-between xl:max-h-[800px] xl:min-h-[400px] ">
          <MultiDropdownMenu setBreadCrumbVal={setBreadCrumbVal} />
          <Button
            size={'lg'}
            radius={'lg'}
            type={'submit'}
            className={'btn-filled'}
            spinnerPlacement={'end'}
            isLoading={loading}
            endContent={!loading && <IoSendSharp className={'text-md'} />}
          >
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddQuestionForm;
