import React, { useState } from 'react';
import { Input } from '@nextui-org/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { subjects } from '@/datas/subjects';
import { subjectData } from '@/datas/subjects';
import { BsChevronDoubleDown } from 'react-icons/bs';

export function MultiDropdownMenu() {
  const [value, setValue] = useState('');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Input
          type="text"
          placeholder="Subjects / Units"
          size="md"
          classNames={{
            base: 'hover:cursor-pointer',
            mainWrapper: 'w-full',
            label: 'text-gray-400',
          }}
          isRequired={true}
          isReadOnly={true}
          value={value}
          onValueChange={setValue}
          // isInvalid={`${value}` === ''}
          // errorMessage="Please select a subject and unit"
          endContent={<BsChevronDoubleDown />}
          className="mb-3"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 h-64 overflow-y-auto bg-gray-100">
        <DropdownMenuGroup>
          {subjects.map((subject) => {
            const units = subjectData[subject];
            return (
              <DropdownMenuSub key={subject}>
                <DropdownMenuSubTrigger
                  className="hover:bg-blue-500"
                  key={subject}
                >
                  <span>{subject}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="m-1 bg-gray-100">
                    {units.map((unit) => (
                      <DropdownMenuItem
                        className="hover:bg-blue-500"
                        key={`${subject}/${unit}`}
                        onSelect={(e) => {
                          setValue(`${subject}/${unit}`);
                        }} // This is the line that needs to be fixed
                      >
                        <span>{unit}</span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
