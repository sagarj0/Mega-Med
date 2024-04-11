'use client';

import React from 'react';
import { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/ui/MegaMedLogo';
import Link from 'next/link';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false);
  // const toogleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const signupCredential = Array.from(formData.entries()).reduce(
      (acc: { [key: string]: FormDataEntryValue }, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {}
    );

    console.log('signup detail is ', signupCredential);
  };

  return (
    <main className="flex items-center justify-center h-fit">
      <div className="flex flex-col items-center justify-center mb-6">
        <section className="flex flex-col items-center gap-6 border-2 rounded-md radius px-8 py-6 m-4 w-[375px]">
          <MegaMedLogo />
          <h1 className="text-center text-gray-400">
            Sign up to unlock your potential in medical enrance exams.
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
            <Input
              type="text"
              label="Full Name"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0',
              }}
            />
            <Input
              type="email"
              label="Email Address"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0',
              }}
            />
            <Input
              type="tel"
              label="Mobile Number"
              size="sm"
              radius="lg"
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0',
              }}
            />
            <Input
              type={isVisible ? 'text' : 'password'}
              endContent={
                isVisible ? (
                  <FaRegEyeSlash
                    onClick={() => setIsVisible(false)}
                    className="cursor-pointer text-gray-500 text-xl"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setIsVisible(true)}
                    className="cursor-pointer text-gray-500 text-xl"
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
                inputWrapper: 'pb-0',
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
