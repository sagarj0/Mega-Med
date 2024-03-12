'use client';

import react from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/ui/MegaMedLogo';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const [isVisible, setIsVisible] = useState(false);
  // const toogleVisibility = () => setIsVisible(!isVisible);

  return (
    <main className="flex items-center justify-center h-fit">
      <div className="flex flex-col items-center justify-center my-6">
        <section className="flex flex-col items-center gap-6 border-2 rounded-md radius px-8 py-4 m-4 w-96">
          <MegaMedLogo />
          <h1 className="text-center text-gray-400">
            Log in to continue
          </h1>
          <form className="flex flex-col gap-3 w-full">
            <Input
              type="email"
              label="Email Address"
              size="sm"
              radius="lg"
              isRequired={true}
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
            />
            <Button
              type="submit"
              color="primary"
              radius="full"
            >
              Log in
            </Button>
          </form>
          <div className="h-2 w-full flex items-center gap-4 ">
            <div className="h-px w-full bg-gray-500 box-border ml-2"></div>
            <p className="text-gray-500 h-fit">OR</p>
            <div className="h-px w-full bg-gray-500 box-border mr-2"></div>
          </div>
          <Button
            startContent={<span>Continue with</span>}
            endContent={<FcGoogle className="text-lg" />}
            radius="full"
          ></Button>
        </section>
        <section className="flex items-center justify-center  ">
          Don`t have an account?
          <Link
            href="/auth/signup"
            className="text-blue-500 hover:cursor pointer hover:underline"
          >
            Signup
          </Link>
        </section>
      </div>
    </main>
  );
}
