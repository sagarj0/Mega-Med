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
    label: 'Questions',
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
            'hover:secondary-bg hover:active-text flex h-[48px] grow items-center justify-center  gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'secondary-bg  active-text ': href === pathName || (href !== '/admin' && pathName.includes(href)),
            },
          )}
        >
          <Icon className="w-6 " />
          <p className="hidden  md:block">{label}</p>
        </Link>
      ))}
    </>
  );
}
