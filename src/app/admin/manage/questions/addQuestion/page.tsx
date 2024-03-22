'use client';

import React, { SetStateAction, useState } from 'react';
import AddQuestionForm from '@/ui/admin/questions/addquesform';
import Header from '@/ui/admin/questions/header';
import BreadCrumb from '@/ui/admin/questions/breadcrumb';

const Page = () => {
  const [breadCrumbVal, setBreadCrumbVal] = useState('');

  return (
    <main className=" h-full w-full flex flex-col items-center gap-4">
      <Header />
      {/* //BreadCrub here */}
      <BreadCrumb breadCrumbVal={breadCrumbVal} />
      <AddQuestionForm
        setBreadCrumbVal={setBreadCrumbVal}
        breadCrumbVal={breadCrumbVal}
      />
    </main>
  );
};

export default Page;
