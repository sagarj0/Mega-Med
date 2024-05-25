// components/CardWrapperClient.tsx
'use client'; // This directive marks the file as a Client Component

import React from 'react';
import { FaFileCircleQuestion } from 'react-icons/fa6';
import { FaPeopleArrows, FaRegUser } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import useCardData from '@/services/admin/counts-action';
import { CardsSkeleton } from '@/ui/skeletons/cardSkeleton'; // Ensure this import is correct

const iconMap = {
  question: FaFileCircleQuestion,
  mentor: FaPeopleArrows,
  admin: RiAdminLine,
  user: FaRegUser,
};

const CardWrapperClient: React.FC = () => {
  const { totalQuestions, totalAdmins, totalMentors, totalUsers, error } = useCardData();

  if (error) {
    console.error(error);
    return <p>Error loading data</p>;
  }

  if (!totalQuestions || !totalAdmins || !totalMentors || !totalUsers) {
    return <CardsSkeleton />;
  }

  return (
    <div className="grid w-full grid-cols-2 items-center justify-around gap-5 md:flex">
      <Card title="Questions" value={totalQuestions} type="question" />
      <Card title="Admins" value={totalAdmins} type="admin" />
      <Card title="Mentors" value={totalMentors} type="mentor" />
      <Card title="Users" value={totalUsers} type="user" />
    </div>
  );
};

const Card: React.FC<{ title: string; value: number | string; type: 'question' | 'admin' | 'mentor' | 'user' }> = ({
  title,
  value,
  type,
}) => {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-400 p-2 shadow-md md:w-1/5">
      <div className="flex items-center p-4">
        {Icon ? <Icon className="h-4 w-4 text-gray-800" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-5 py-8 text-center text-2xl">{value}</p>
    </div>
  );
};

export default CardWrapperClient;
