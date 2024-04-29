'use client';

import { Button, Link } from '@nextui-org/react';
import React from 'react';
import SubjectTabs from '@/ui/admin/questions/subjectTab';

export default function Page() {
  return (
    <div className=" w-full h-full flex flex-col justify-between">
      <SubjectTabs />
      <Link className="mt-8" href="/admin/manage/questions/addQuestion">
        Add question Manually
      </Link>
    </div>
  );
}
