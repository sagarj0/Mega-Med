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
import { backUrl } from '@/datas/variable';
import { uploadImage } from '@/app/fireBaseConfig';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';

const AddQuestionForm: React.FC<{
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}> = ({ setBreadCrumbVal }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

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
      // Upload image to firebase storage
      let url = '';

      if (image) {
        const storageRef = ref(uploadImage, `Questions/${v4()}`);
        await uploadBytes(storageRef, image);
        url = await getDownloadURL(storageRef);
        questionCredential.image = url;
      }

      // Send question data to backend if image is uploaded

      const res = await axios.post(
        `${backUrl}/api/v1/manageQuestion/addQuestionManually`,
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
      className="flex flex-col min-h-fit h-full  w-full bg-gray-300 border-primary  pl-6 py-8 lg:flex-row items-stretch lg:justify-between gap-10 "
    >
      <Toaster />
      <div className=" w-full lg:w-3/5 min-h-[400px] max-h-[800px] flex flex-col items-stretch lg:justify-between gap-5">
        <div className=" w-full flex flex-row lg:justify-between lg:gap-2">
          <Input
            type="text"
            name="questionNo"
            label="Q."
            labelPlacement="outside-left"
            placeholder="QNo."
            size="md"
            classNames={{
              mainWrapper: 'w-full',
              inputWrapper: 'border-primary ',
            }}
            className="w-24"
            isRequired={true}
          />
          <Input
            type="text"
            name="question"
            labelPlacement="outside-left"
            placeholder="Write Question ..."
            size="md"
            classNames={{
              mainWrapper: 'w-full',
              inputWrapper: 'border-primary',
            }}
            className="w-[76%]"
            isRequired={true}
          />
          <Input
            type="text"
            name="tag"
            placeholder="Tag "
            size="md"
            classNames={{
              mainWrapper: 'w-full',
              inputWrapper: 'border-primary',
            }}
            className="w-20 mr-8"
          />
        </div>
        <div className="  flex items-center  gap-10">
          <div className="flex flex-col gap-3">
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

          {/* next ui image upload is not working */}
          <input
            type="file"
            name="image"
            onChange={async (e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
                console.log(e.target.files[0]);
              }
            }}
            className=" w-72 "
          />
        </div>
        <RadioGroup
          name="correctAnswer"
          label="Select correct option: "
          className="mt-2 flex flex-row w-full items-center gap-4"
          orientation="horizontal"
          //isRequired={true} is not working...
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
            inputWrapper: 'border-primary min-h-24',
          }}
          maxRows={4}
          size="md"
          className="max-w-xs  lg:ml-5 mt-4 "
        />
      </div>
      <div className=" w-full lg:w-2/5 lg:min-h-[400px] lg:max-h-[800px]  flex flex-col items-start lg:justify-between gap-5 ">
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
