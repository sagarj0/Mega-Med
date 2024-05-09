'use client';

import React from 'react';
import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/ui/MegaMedLogo';
import Link from 'next/link';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { backUrl } from '@/datas/variable';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function SignupPage() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  // const toogleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const formDataArray = Array.from(formData.entries());

    const signupCredential = formDataArray.reduce(
      (acc: { [key: string]: string }, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {}
    );

    console.log('signup detail is ', signupCredential);

    try {
      const res = await axios.post(
        `${backUrl}/api/v1/auth/register`,
        signupCredential
      );

      if (res.status === 201) {
        console.log(res);
        toast.success('Registered Successfully');
        (e.target as HTMLFormElement).reset();

        router.push(`/${res.data.data.user.role}`);
      }
    } catch (error) {
      console.error('Failed to register', error);
      toast.error('Failed to register');
    }
  };

  return (
    <main className="flex flex-col px-20 py-8 items-center justify-center h-fit">
      <Link href="/" className=" w-full flex items-center gap-2 ">
        <FiArrowLeft className="text-2xl cursor-pointer" />
        <p>Back to home</p>
      </Link>

      <div className="flex flex-col items-center justify-center mb-6">
        <Toaster />
        <section className="flex flex-col items-center gap-6 border-primary rounded-md radius px-8 py-6 m-4 w-[375px]">
          <MegaMedLogo />
          <h1 className="text-center">
            Sign up to unlock your potential in medical enrance exams.
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <Input
              type="text"
              name="name"
              label="Full Name"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0 border-primary',
              }}
            />
            <Input
              type="email"
              name="email"
              label="Email Address"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0 border-primary',
              }}
            />
            <Input
              type="tel"
              name="number"
              label="Mobile Number"
              size="sm"
              radius="lg"
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0 border-primary',
              }}
            />
            <Input
              type={isVisible ? 'text' : 'password'}
              name="password"
              endContent={
                isVisible ? (
                  <FaRegEyeSlash
                    onClick={() => setIsVisible(false)}
                    className="cursor-pointer text-xl"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setIsVisible(true)}
                    className="cursor-pointer text-xl"
                  />
                )
              }
              label="Password"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0 border-primary',
              }}
            />
            <Button type="submit" color="primary" radius="full">
              Signup
            </Button>
          </form>
          <div className="h-2 w-full flex items-center gap-4 ">
            <div className="h-px w-full bg-gray-500 box-border ml-2"></div>
            <p className="text-gray-500 h-fit">OR</p>
            <div className="h-px w-full bg-gray-500 box-border mr-2"></div>
          </div>
          <Button
            startContent={<span>Sign up with</span>}
            endContent={<FcGoogle className="text-lg" />}
            radius="full"
          ></Button>
        </section>
        <section className="flex items-center justify-center  ">
          Already have an account?
          <Link
            href="/auth/login"
            className="text-blue-500 hover:cursor pointer hover:underline"
          >
            Login
          </Link>
        </section>
      </div>
    </main>
  );
}
