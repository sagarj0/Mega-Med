'use client';

import React from 'react';
import { Tabs, Tab, Card, CardBody, CardHeader } from '@nextui-org/react';

import { useRouter } from 'next/navigation';

export default function SubjectTabs() {
  const router = useRouter();

  const handleChange = (subject: React.Key) => {
    router.push(`/admin/manage/questions/${subject}`);
  };

  let tabs = [
    {
      id: 'physics',
      label: 'Physics',
    },
    {
      id: 'chemistry',
      label: 'Chemistry',
    },
    {
      id: 'botany',
      label: 'Botany',
    },
    {
      id: 'zoology',
      label: 'Zoology',
    },
    {
      id: 'mat',
      label: 'MAT',
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="primary"
        classNames={{
          tabList: 'w-full p-2',
        }}
        onSelectionChange={handleChange}
      >
        {(item) => <Tab key={item.id} title={item.label}></Tab>}
      </Tabs>
    </div>
  );
}
