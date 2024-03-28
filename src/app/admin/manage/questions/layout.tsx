import { Button, Link } from '@nextui-org/react';
import React from 'react';
import SubjectTabs from '@/ui/admin/questions/subjectTab';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SubjectTabs />
      {children}
      <Link className="m-8" href="/admin/manage/questions/addQuestion">
        Add question Manually
      </Link>
    </>
  );
}
