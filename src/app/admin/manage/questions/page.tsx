'use client';

import { Button, RadioGroup, Radio } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <h1>Create</h1>
      <Link href="/admin/manage/questions/addQuestion">
        <Button> Add </Button>
      </Link>
    </div>
  );
}
