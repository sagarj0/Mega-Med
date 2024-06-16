'use client';

import React, { useState } from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import SubjectTable from '@/ui/admin/questions/subjectTable';
import { tabs } from '@/datas/tab';

export default function SubjectTabs() {
  const [selectedTab, setSelectedTab] = useState('Physics');

  return (
    <div className="mt-2 flex h-full w-full flex-col">
      <Tabs
        aria-label="Dynamic tabs"
        items={tabs}
        color="primary"
        classNames={{
          tabList: 'w-3/4 p-0  gap-0  m-auto rounded-t-lg rounded-b-none border-gray-500 border-x border-t  ',
          tab: 'py-5 self-stretch border-x border-gray-500 rounded-none  ',
          tabContent: 'text-slate-800 font-medium  text-sm ',
          cursor: 'h-full rounded-none group-data-[selected=true]:primary-bg ',
        }}
        onSelectionChange={(item) => setSelectedTab(item as string)}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center justify-center gap-2">
                <span>{item.label}</span>
                <item.icon className="h-3 w-3" />
              </div>
            }
          ></Tab>
        )}
      </Tabs>
      <SubjectTable subject={selectedTab} />
    </div>
  );
}
