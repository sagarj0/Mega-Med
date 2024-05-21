'use client'; // This directive marks the file as a Client Component

import React from 'react';
import useSWR from 'swr';
import { FaFileCircleQuestion } from 'react-icons/fa6';
import { FaPeopleArrows, FaRegUser } from 'react-icons/fa';
import { RiAdminLine } from 'react-icons/ri';
import axios from 'axios';
import { backUrl } from '@/datas/variable';
import { CardsSkeleton } from '@/ui/skeleton.tsx/cardSkeleton'; // Ensure this import is correct

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

const iconMap = {
  question: FaFileCircleQuestion,
  mentor: FaPeopleArrows,
  admin: RiAdminLine,
  user: FaRegUser,
};

export default function CardWrapperClient() {
  const { data: totalQuestions, error: questionError } = useSWR(
    `${backUrl}/api/v1/manageQuestion/count`,
    fetcher,
    { refreshInterval: 60000 }
  );
  const { data: totalAdmins, error: adminError } = useSWR(
    `${backUrl}/api/v1/admin/count`,
    fetcher,
    { refreshInterval: 60000 * 30 }
  );
  const { data: totalMentors, error: mentorError } = useSWR(
    `${backUrl}/api/v1/mentor/count`,
    fetcher,
    { refreshInterval: 60000 * 30 }
  );
  const { data: totalUsers, error: userError } = useSWR(`${backUrl}/api/v1/user/count`, fetcher, {
    refreshInterval: 60000 * 30,
  });

  if (questionError || adminError || mentorError || userError) {
    console.error(questionError || adminError || mentorError || userError);
    return <div>Error loading data</div>;
  }

  if (!totalQuestions || !totalAdmins || !totalMentors || !totalUsers) {
    return <CardsSkeleton />;
  }

  return (
    <div className="w-full md:flex grid grid-cols-2 gap-5 items-center justify-around">
      <Card title="Questions" value={totalQuestions} type="question" />
      <Card title="Admins" value={totalAdmins} type="admin" />
      <Card title="Mentors" value={totalMentors} type="mentor" />
      <Card title="Users" value={totalUsers} type="user" />
    </div>
  );
}

function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'question' | 'admin' | 'mentor' | 'user';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-400 p-2 md:w-1/5 shadow-md">
      <div className="flex p-4 items-center">
        {Icon ? <Icon className="h-4 w-4 text-gray-800" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p className="truncate rounded-xl bg-white px-5 py-8 text-center text-2xl">{value}</p>
    </div>
  );
}
