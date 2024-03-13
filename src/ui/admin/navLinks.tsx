'use client';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaPeopleArrows } from 'react-icons/fa';
import { FaFileCircleQuestion } from 'react-icons/fa6';
import { RiAdminLine } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/admin', label: 'Home', icon: FaHome },
  {
    href: '/admin/manage/admins',
    label: 'Admins',
    icon: RiAdminLine,
  },
  {
    href: '/admin/manage/mentors',
    label: 'Mentors',
    icon: FaPeopleArrows,
  },
  {
    href: '/admin/manage/questions',
    label: 'Add Questions',
    icon: FaFileCircleQuestion,
  },
];

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {links.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className={clsx(
            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-sky-100 text-blue-600': pathName === href,
            }
          )}
        >
          <Icon className="w-6 text-gray-700" />
          <p className="hidden text-gray-700 md:block">
            {label}
          </p>
        </Link>
      ))}
    </>
  );
}
