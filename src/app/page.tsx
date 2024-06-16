'use client';
import React, { useState } from 'react';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';

const navItems = [
  {
    menu: 'Home',
    link: '/',
  },
  {
    menu: 'About',
    link: '/',
  },

  {
    menu: 'Tests',
    link: '/test/sub-wise',
  },

  {
    menu: 'Mentors',
    link: '/',
  },

  {
    menu: 'Contact us',
    link: '/',
  },
];

function MyComponent() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex w-full flex-col  self-stretch bg-orange-50 py-10 max-md:max-w-full max-md:px-5">
      <header className="fixed top-0 z-50 flex h-20 w-full  items-center justify-between gap-5 self-center bg-orange-50 px-20 text-gray-800 shadow-md">
        <div className="my-auto flex w-32 items-center justify-center gap-2 text-2xl font-bold leading-8">
          <Image src="/MegaMedLogo.png" alt="MEGA Mentorship logo" width={90} height={50} />
        </div>

        <nav className="hidden items-center gap-5 text-lg font-semibold md:flex ">
          {navItems.map((item, index) => (
            <span key={index}>
              <Link href={item.link} className="text-gray-800">
                {item.menu}
              </Link>
            </span>
          ))}
          <Link href="/auth/login" className=" btn-empty w-fit">
            Log in
          </Link>

          <Link href="/auth/signup" className=" btn-filled w-fit">
            Sign up
          </Link>
        </nav>

        <nav className="md:hidden">
          <FiMenu onClick={toggleMenu} className="h-8 w-8 text-gray-800 hover:cursor-pointer " />

          {showMenu && (
            <div className="absolute left-0 right-0 top-20 z-50 flex flex-col gap-5 bg-orange-50 px-10 py-5 shadow-md">
              {navItems.map((item, index) => (
                <Link key={index} href={item.link} className="text-gray-800">
                  {item.menu}
                </Link>
              ))}
              <Link href="/auth/login" className=" btn-empty w-fit">
                Log in
              </Link>
              <Link href="/auth/signup" className=" btn-filled w-fit">
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </header>
      <div className="mx-auto  max-w-screen-2xl ">
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
