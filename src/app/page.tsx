import React from 'react';
import { Button, Link } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="flex flex-row justify-between p-16">
      <p>This is home page</p>

      <div className="space-x-4">
        <Link href="/auth/signup">
          <Button color="primary">Signup</Button>
        </Link>
        <Link href="/auth/login">
          <Button color="primary">Login</Button>
        </Link>
      </div>
    </div>
  );
}
