'use client';
import react from 'react';

import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  if (path === '/admin') {
    return (
      <div className="bg-gray-100/90 rounded-md p-4 flex flex-row items-center justify-between w-full">
        <h1 className="bold text-2xl">Dashboard</h1>
        <p>Admin Profile</p>
      </div>
    );
  } else if (path.includes('/admin/manage/admins')) {
    return (
      <div className="bg-gray-100/90 rounded-md p-4 flex flex-row items-center justify-between w-full">
        <h1 className="bold text-2xl">Admins</h1>
        <p>Admin Profile</p>
      </div>
    );
  } else if (path.includes('/admin/manage/mentors')) {
    return (
      <div className="bg-gray-100/90 rounded-md p-4 flex flex-row items-center justify-between w-full">
        <h1 className="bold text-2xl">Mentors</h1>
        <p>Admin Profile</p>
      </div>
    );
  } else if (path.includes('/admin/manage/questions')) {
    return (
      <div className="bg-gray-100/90 rounded-md p-4 flex flex-row items-center justify-between w-full">
        <h1 className="bold text-2xl">Questions</h1>
        <p>Admin Profile</p>
      </div>
    );
  }
}
