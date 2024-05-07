'use client';

import { Button, Link } from '@nextui-org/react';
import React from 'react';
import SubjectTabs from '@/ui/admin/questions/subjectTab';
import { IoAddCircleOutline } from 'react-icons/io5';

export default function Page() {
  return (
    <div className=" w-full h-full flex flex-col justify-between space-y-2 ">
      <SubjectTabs />
      <Link href="/admin/manage/questions/addQuestion">
        <Button
          startContent={<IoAddCircleOutline size={20} />}
          className="btn-filled"
        >
          Add question
        </Button>
      </Link>
    </div>
  );
}
