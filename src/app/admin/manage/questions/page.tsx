'use client';
import React, { useEffect } from 'react';
import { Button, Link } from '@nextui-org/react';
import SubjectTabs from '@/ui/admin/questions/subjectTab';
import { IoAddCircleOutline } from 'react-icons/io5';

export default function Page() {
  return (
    <div className=" flex h-full w-full flex-col">
      <SubjectTabs />
      <Link href="/admin/manage/questions/addQuestion">
        <Button startContent={<IoAddCircleOutline size={20} />} className="btn-filled">
          Add question
        </Button>
      </Link>
    </div>
  );
}
