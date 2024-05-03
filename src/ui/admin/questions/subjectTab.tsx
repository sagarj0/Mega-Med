'use client';

import React, { useState } from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import SubjectTable from '@/ui/admin/questions/subjectTable';
import { tabs } from '@/datas/tab';

export default function SubjectTabs() {
  const [selectedTab, setSelectedTab] = useState('Physics');

  return (
    <div className="flex w-full h-full flex-col mt-2">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="primary"
        classNames={{
          tabList: 'w-3/4 p-0  gap-0  m-auto rounded-t-lg rounded-b-none ',
          // panel: 'w-full p-0  bg-gray-50/30 rounded-lg ',
          tab: 'py-5 rounded-t-md',
          tabContent:
            ' group-data-[selected=true]:text-base text-slate-800 font-medium  text-base ',
          cursor: 'h-full  rounded-t-md rounded-b-none',
        }}
        onSelectionChange={(item) => setSelectedTab(String(item))}
      >
        {(item) => <Tab key={item.id} title={item.label}></Tab>}
      </Tabs>
      <SubjectTable subject={selectedTab} />
    </div>
  );
}
