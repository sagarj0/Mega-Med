'use client';

import React from 'react';
import { Tabs, Tab, Card, CardBody, CardHeader } from '@nextui-org/react';
import SubjectTable from '@/ui/admin/questions/subjectTable';

export default function SubjectTabs() {
  let tabs = [
    {
      id: 'physics',
      label: 'Physics',
      content: 'Physics questions ',
    },
    {
      id: 'chemistry',
      label: 'Chemistry',
      content: 'Chemistry questions',
    },
    {
      id: 'botany',
      label: 'Botany',
      content: 'Botany questions ',
    },
    {
      id: 'zoology',
      label: 'Zoology',
      content: 'Zoology questions',
    },
    {
      id: 'mat',
      label: 'MAT',
      content: 'MAT questions',
    },
  ];

  return (
    <div className="flex w-full flex-col mt-2">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="primary"
        classNames={{
          tabList:
            'w-3/4 p-0 bg-gray-50/30 gap-0  m-auto rounded-t-lg rounded-b-none ',
          panel: 'w-full p-0  bg-gray-50/30 rounded-lg ',
          tab: 'py-5 rounded-t-md',
          tabContent: ' group-data-[selected=true]:text-base',
          cursor: 'h-full bg-gray-50/50 rounded-t-md rounded-b-none',
        }}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <SubjectTable />
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
