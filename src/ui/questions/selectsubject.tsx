'use client'
import react from 'react';
import { subjects } from '@/utils/subjects';
import { Select, SelectItem } from '@nextui-org/react';

export default function SelectSubjectDropdown() {
  return (
    <div>
      <Select
        label="Subjects"
        className="max-w-xs"
        size="sm"
      >
        {subjects.map((subject) => (
          <SelectItem
            key={subject.value}
            value={subject.value}
          >
            {subject.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
