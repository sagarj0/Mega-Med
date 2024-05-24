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
          tabList:
            'w-3/4 p-0  gap-0  m-auto rounded-t-lg rounded-b-none border-gray-500 border-x border-t  ',
          tab: 'py-5 self-stretch border-x border-gray-500 rounded-none  ',
          tabContent: 'text-slate-800 font-medium  text-sm ',
          cursor: 'h-full rounded-none group-data-[selected=true]:primary-bg ',
        }}
        onSelectionChange={(item) => setSelectedTab(String(item))}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex items-center justify-center gap-2">
                <span>{item.label}</span>
                <item.icon className="w-3 h-3" />
              </div>
            }
          ></Tab>
        )}
      </Tabs>
      <SubjectTable subject={selectedTab} />
    </div>
  );
}
