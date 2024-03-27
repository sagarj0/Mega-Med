import { Button, RadioGroup, Radio } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <h1 className="m-8">Added question here</h1>
      <p className="m-8">or</p>
      <h1 className="m-8">Add question Manually</h1>
      <Link className="m-8" href="/admin/manage/questions/addQuestion">
        <Button> Add</Button>
      </Link>
    </div>
  );
}
