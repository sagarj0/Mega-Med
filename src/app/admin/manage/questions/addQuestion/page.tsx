'use client';

import React, { SetStateAction, useState } from 'react';
import AddQuestionForm from '@/ui/questions/addquesform';
import Header from '@/ui/questions/header';
import BreadCrumb from '@/ui/questions/breadcrumb';

const Page = () => {
  const [breadCrumbVal, setBreadCrumbVal] = useState('');

  return (
    <main className=" h-full w-full flex flex-col items-center gap-4">
      <Header />
      {/* //BreadCrub here */}
      <BreadCrumb breadCrumbVal={breadCrumbVal} />
      <AddQuestionForm setBreadCrumbVal={setBreadCrumbVal} />
    </main>
  );
};

export default Page;
