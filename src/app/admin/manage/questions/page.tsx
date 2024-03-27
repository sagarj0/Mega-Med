import { Button, Link } from '@nextui-org/react';
import React from 'react';

export default function Page() {
  return (
    <div>
      <h1 className="m-8">Page for managing questions here</h1>
      <p className="m-8">or</p>
      <Link className="m-8" href="/admin/manage/questions/addQuestion">
        Add question Manually
      </Link>
    </div>
  );
}
