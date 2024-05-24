'use client';

import React from 'react';
import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return <div className="my-auto cursor-pointer self-stretch text-base ">{children}</div>;
};

const navItems = ['Home', 'About us', 'Tests', 'Mentors', 'Contact us'];

function MyComponent() {
  return (
    <div className="flex w-full flex-col  self-stretch bg-orange-50 py-10 max-md:max-w-full max-md:px-5">
      <div className="mx-auto  max-w-screen-2xl ">
        <header className="fixed top-0 z-50 flex h-[85px] w-full items-center justify-between gap-5 self-center bg-orange-50 px-20 shadow-md  max-md:max-w-full max-md:flex-wrap">
          <div className="my-auto flex w-32 items-center justify-center gap-2 text-2xl font-bold leading-8">
            <Image src="/MegaMedLogo.png" alt="MEGA Mentorship logo" width={90} height={50} />
          </div>

          <nav className="hidden items-center justify-between gap-5 text-lg font-semibold max-md:max-w-full max-md:flex-wrap md:flex">
            {navItems.map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}
            <Link href="/auth/login" className=" btn-empty w-fit">
              Log in
            </Link>

            <Link href="/auth/signup" className=" btn-filled w-fit">
              Sign up
            </Link>
          </nav>

          <nav className=" md:hidden">
            <FiMenu className="h-8 w-8 text-gray-800" />
          </nav>
        </header>
        <main className="relative flex min-h-[756px] w-full flex-col  justify-center overflow-hidden px-24 py-10 max-md:mt-10 max-md:max-w-full max-md:px-5">
          <div className="relative  max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex w-[39%] flex-col max-md:ml-0 max-md:w-full">
                <div className="relative my-auto flex flex-col self-stretch font-medium max-md:mt-10 max-md:max-w-full">
                  <h1 className="text-7xl font-extrabold leading-[93px] text-orange-500 max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                    The <span className="text-orange-500">Smart</span> <br /> Choice For
                    <span className="text-orange-500"> Prepration</span>
                  </h1>
                  <p className="mt-10  leading-9 text-zinc-500 max-md:max-w-full">
                    Welcome to Mega-Med: Improve your medical entrance exams
                    <br />
                    Prepare for your medical entrance exams with Mega-Med. Take tests, talk to mentors, and track your
                    progress. Join us and succeed in your medical career.
                  </p>
                  {/* <form className="mt-16 flex w-full justify-between gap-5 rounded-[96px] bg-white px-6 py-1.5 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                    <label htmlFor="location" className="sr-only">
                      Search for a location
                    </label>
                    <div className="my-auto flex gap-3 text-xl text-blue-950">
                      <Image
                        src="/images/search-icon.svg"
                        alt="Search icon"
                        width={24}
                        height={24}
                        className="aspect-square shrink-0"
                      />
                      <input
                        type="text"
                        id="location"
                        placeholder="Search for a location..."
                        className="my-auto flex-auto bg-transparent focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="justify-center whitespace-nowrap rounded-[96px] bg-gray-700 px-7 py-7 text-2xl text-white max-md:px-5"
                    >
                      Continue
                    </button>
                  </form> */}
                </div>
              </div>
              <div className="ml-5 flex w-[61%] flex-col max-md:ml-0 max-md:w-full">
                <Image
                  src="/OBJECTS.png"
                  alt="Mentorship program illustration"
                  width={933}
                  height={612}
                  className="aspect-[1.52] w-full grow max-md:mt-10 max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyComponent;
