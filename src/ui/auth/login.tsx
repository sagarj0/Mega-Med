'use client';

import React from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/components/MegaMedLogo';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import { handleLogin } from '@/services/auth/actions';
import { FiArrowLeft } from 'react-icons/fi';

export const Login: React.FC = () => {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await handleLogin({ e, router, setLoading });
  };

  return (
    <main className=" flex h-fit max-w-screen-2xl flex-col items-center justify-center px-20 py-8">
      <Toaster />
      <Link href="/" className=" flex w-full items-center gap-2 ">
        <FiArrowLeft className="cursor-pointer text-2xl" />
        <p>Back to home</p>
      </Link>

      <div className="my-6 flex flex-col items-center justify-center">
        <section className="radius m-4 flex w-[375px] flex-col items-center gap-6 rounded-md border-primary px-8 py-6">
          <MegaMedLogo />
          <h1 className="text-center">Log in to continue</h1>
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
            <Input
              name="email"
              type="email"
              label="Email Address"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0 border-primary ',
              }}
            />

            <Input
              type={isVisible ? 'text' : 'password'}
              endContent={
                isVisible ? (
                  <FaRegEyeSlash onClick={() => setIsVisible(false)} className="cursor-pointer text-xl" />
                ) : (
                  <FaRegEye onClick={() => setIsVisible(true)} className="cursor-pointer text-xl" />
                )
              }
              name="password"
              label="Password"
              size="sm"
              radius="lg"
              isRequired={true}
              classNames={{
                base: 'h-10',
                label: 'text-xs p-0 pb-1',
                inputWrapper: 'pb-0 border-primary ',
              }}
            />
            <Button type="submit" color="primary" radius="full" isLoading={loading}>
              Log in
            </Button>
          </form>
          <div className="flex h-2 w-full items-center gap-4 ">
            <div className="ml-2 box-border h-px w-full bg-gray-500"></div>
            <p className="h-fit text-gray-500">OR</p>
            <div className="mr-2 box-border h-px w-full bg-gray-500"></div>
          </div>
          <Button
            startContent={<span>Continue with</span>}
            endContent={<FcGoogle className="text-lg" />}
            radius="full"
            type="submit"
          ></Button>
        </section>
        <section className="flex items-center justify-center  ">
          Don`t have an account?
          <Link href="/auth/signup" className="hover:cursor pointer text-blue-500 hover:underline">
            Signup
          </Link>
        </section>
      </div>
    </main>
  );
};
