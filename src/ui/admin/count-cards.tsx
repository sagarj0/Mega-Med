'use client';

import React from 'react';
import useCardData from '@/services/admin/counts-action';
import { Card } from '@/components/cards/counts';
import { CardsSkeleton } from '@/components/skeletons/cardSkeleton';

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
      <Card title="Questions" value={totalQuestions!} type="question" />
      <Card title="Admins" value={totalAdmins!} type="admin" />
      <Card title="Mentors" value={totalMentors!} type="mentor" />
      <Card title="Users" value={totalUsers!} type="user" />
    </div>
  );
};

export default CardWrapperClient;
