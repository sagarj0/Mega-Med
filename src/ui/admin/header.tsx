'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();

  if (path === '/admin') {
    return (
      <div className="flex w-full flex-row items-center justify-between border-primary bg-gray-300 p-4">
        <h1 className="bold text-2xl">Dashboard</h1>
        <p>Admin Profile</p>
      </div>
    );
  } else if (path.includes('/admin/manage/admins')) {
    return (
      <div className="flex w-full flex-row items-center justify-between border-primary bg-gray-300 p-4">
        <h1 className="bold text-2xl">Admins</h1>
        <p>Admin Profile</p>
      </div>
    );
  } else if (path.includes('/admin/manage/mentors')) {
    return (
      <div className="flex w-full flex-row items-center justify-between border-primary bg-gray-300 p-4">
        <h1 className="bold text-2xl">Mentors</h1>
        <p>Admin Profile</p>
      </div>
    );
  } else if (path.includes('/admin/manage/questions')) {
    return (
      <div className="flex w-full flex-row items-center justify-between border-primary bg-gray-300 p-4">
        <h1 className="bold text-2xl">Questions</h1>
        <p>Admin Profile</p>
      </div>
    );
  }
}
