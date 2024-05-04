'use client';

import React from 'react';
import { Button, Link } from '@nextui-org/react';
import Navbar from '@/ui/home-page/navbar';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

interface NavItemProps {
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  return <div className="self-stretch cursor-pointer my-auto">{children}</div>;
};

const navItems = ['Home', 'About us', 'Tests', 'Mentors', 'Contact us'];

function MyComponent() {
  return (
    <div className="flex flex-col self-stretch  py-10 w-full bg-orange-50 max-md:px-5 max-md:max-w-full">
      <div className="max-w-screen-2xl  mx-auto ">
        <header className="flex gap-5 fixed top-0 shadow-lg h-20 z-50 px-20 bg-orange-50 justify-between items-center self-center w-full  max-md:flex-wrap max-md:max-w-full">
          <div className="flex justify-center items-center gap-2 w-32 my-auto text-2xl font-bold leading-8">
            <Image
              src="/MegaMedLogo.png"
              alt="MEGA Mentorship logo"
              width={90}
              height={50}
            />
          </div>

          <nav className="hidden md:flex gap-5 justify-between items-center text-lg font-semibold max-md:flex-wrap max-md:max-w-full">
            {navItems.map((item) => (
              <NavItem key={item}>{item}</NavItem>
            ))}
            <Link href="/auth/login" className=" w-fit btn-empty">
              Log in
            </Link>

            <Link href="/auth/signup" className=" w-fit btn-filled">
              Sign up
            </Link>
          </nav>

          <nav className=" md:hidden">
            <FiMenu className="w-8 h-8 text-gray-800" />
          </nav>
        </header>
        <main className="flex overflow-hidden relative flex-col justify-center  px-24 py-10 w-full min-h-[756px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="relative  max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col self-stretch my-auto font-medium max-md:mt-10 max-md:max-w-full">
                  <h1 className="text-7xl font-extrabold text-orange-500 leading-[93px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                    The <span className="text-orange-500">Smart</span> <br />{' '}
                    Choice For
                    <span className="text-orange-500"> Prepration</span>
                  </h1>
                  <p className="mt-10 text-xl leading-9 text-zinc-500 max-md:max-w-full">
                    Welcome to Mega-Med: Improve your medical entrance exams
                    <hr />
                    Prepare for your medical entrance exams with Mega-Med. Take
                    tests, talk to mentors, and track your progress. Join us and
                    succeed in your medical career.
                  </p>
                  {/* <form className="flex gap-5 justify-between px-6 py-1.5 mt-16 w-full bg-white rounded-[96px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <label htmlFor="location" className="sr-only">
                    Search for a location
                  </label>
                  <div className="flex gap-3 my-auto text-xl text-blue-950">
                    <Image
                      src="/images/search-icon.svg"
                      alt="Search icon"
                      width={24}
                      height={24}
                      className="shrink-0 aspect-square"
                    />
                    <input
                      type="text"
                      id="location"
                      placeholder="Search for a location..."
                      className="flex-auto my-auto bg-transparent focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="justify-center px-7 py-7 text-2xl text-white whitespace-nowrap bg-gray-700 rounded-[96px] max-md:px-5"
                  >
                    Continue
                  </button>
                </form> */}
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                <Image
                  src="/OBJECTS.png"
                  alt="Mentorship program illustration"
                  width={933}
                  height={612}
                  className="grow w-full aspect-[1.52] max-md:mt-10 max-md:max-w-full"
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
