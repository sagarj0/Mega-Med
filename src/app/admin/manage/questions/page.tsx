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

      <h1 className="m-8">Radio form </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('form submitted');
        }}
      >
        {/* <RadioGroup name="radio" isRequired={true}>
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </RadioGroup> */}
        <div role="radiogroup" aria-required>
          <label>
            <input type="radio" name="radio" value="1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="radio" value="2" />
            Option 2
          </label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
