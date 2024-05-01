'use client';

import react from 'react';
import { Input, Button } from '@nextui-org/react';
import MegaMedLogo from '@/ui/MegaMedLogo';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { backUrl } from '@/datas/variable';

export default function LoginPage() {
  const router = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const formDataArray = Array.from(formData.entries());

    const loginCredential = formDataArray.reduce(
      (acc: { [key: string]: string }, [key, value]) => {
        acc[key] = String(value);
        return acc;
      },
      {}
    );

    console.log('login detail is ', loginCredential);

    try {
      const res = await axios.post(
        `${backUrl}/api/v1/auth/login`,
        loginCredential
      );

      if (res.status === 200) {
        console.log(res);
        toast.success('Logged in Successfully');
        (e.target as HTMLFormElement).reset();

        router.push(`/${res.data.data.user.role}`);
      }
    } catch (error) {
      console.error('Failed to login', error);
      toast.error('Failed to login');
    }
  };

  return (
    <main className="flex items-center justify-center h-fit">
      <div className="flex flex-col items-center justify-center my-6">
        <Toaster />
        <section className="flex flex-col items-center gap-6 border-2 rounded-md radius px-8 py-6 m-4 w-[375px]">
          <MegaMedLogo />
          <h1 className="text-center text-gray-400">Log in to continue</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
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
              name="password"
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
            type="submit"
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
