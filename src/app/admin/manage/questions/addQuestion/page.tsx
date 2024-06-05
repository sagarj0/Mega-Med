'use client';

import React, { useState } from 'react';
import AddQuestionForm from '@/ui/admin/questions/addquesform';
import BreadCrumb from '@/ui/admin/questions/breadcrumb';

const Page = () => {
  const [breadCrumbVal, setBreadCrumbVal] = useState('');

  return (
    <>
      <BreadCrumb breadCrumbVal={breadCrumbVal} />
      <AddQuestionForm setBreadCrumbVal={setBreadCrumbVal} />
    </>
  );
};

export default Page;
