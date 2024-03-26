import { Button, RadioGroup, Radio } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <h1>Create the button below to add the question</h1>
      <Link href="/admin/manage/questions/addQuestion">
        <Button> Add</Button>
      </Link>
    </div>
  );
}
