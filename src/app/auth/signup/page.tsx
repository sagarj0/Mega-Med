'use client';

import react from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/ui/MegaMedLogo';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false);
  // const toogleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex items-center justify-center h-fit">
      <div className="flex flex-col items-center gap-6 border-2 rounded-md radius p-8 m-4 w-96">
        <MegaMedLogo />
        <h1 className="text-center">
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
            className="rounded-3xl"
          >
            Signup
          </Button>
        </form>

        <p>
          Already have an account?{' '}
          <Link
            href="#to /auth/login"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
