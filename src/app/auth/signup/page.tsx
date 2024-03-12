'use client';

import react from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/ui/MegaMedLogo';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaRegEye,
  FaRegEyeSlash,
  FaGoogle,
} from 'react-icons/fa';

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false);
  // const toogleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center justify-center h-fit">
      <div className="flex flex-col items-center justify-center m-4">
        <div className="flex flex-col items-center gap-6 border-2 rounded-md radius px-8 py-4 m-4 w-96">
          <MegaMedLogo />
          <h1 className="text-center text-gray-400">
            Sign up to unlock your potential in medical
            enrance exams.
          </h1>
          <form className="flex flex-col gap-3 w-full">
            <Input
              type="text"
              label="Full Name"
              size="sm"
              radius="lg"
              isRequired={true}
            />
            <Input
              type="email"
              label="Email Address"
              size="sm"
              radius="lg"
              isRequired={true}
            />
            <Input
              type="tel"
              label="Mobile Number"
              size="sm"
              radius="lg"
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
              className="rounded-3xl"
            >
              Signup
            </Button>
          </form>
          <div className="h-2 w-full flex items-center gap-4 ">
            <div className="h-px w-full bg-gray-500 box-border ml-2"></div>
            <p className="text-gray-500 h-fit">OR</p>
            <div className="h-px w-full bg-gray-500 box-border mr-2"></div>
          </div>
          <button className=" bg-gray-800 flex items-center gap-2 h-9 px-3 rounded-3xl text-sm">
            Sign up with
            <FaGoogle className="text-red-500" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          Already have an account?
          <Link
            href="/auth/login"
            className="text-blue-500 hover:cursor pointer hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
