'use client';
import React from 'react';
import Link from 'next/link';
import { FaHome, FaPeopleArrows } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';

import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/admin', label: 'Home', icon: FaHome },
  {
    href: '/admin/manageadmins',
    label: 'Admins',
    icon: RiAdminLine,
  },
  {
    href: '/admin/managementors',
    label: 'Mentors',
    icon: FaPeopleArrows,
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
          <Icon className="w-6" />
          <p className="hidden md:block">{label}</p>
        </Link>
      ))}
    </>
  );
}
