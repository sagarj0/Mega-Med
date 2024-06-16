import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { Input } from '@nextui-org/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { subjects } from '@/datas/subjects';
import { subjectData } from '@/datas/subjects';
import { BsChevronDoubleDown } from 'react-icons/bs';

interface Props {
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}

export function MultiDropdownMenu({ setBreadCrumbVal }: Props) {
  const [value, setValue] = useState('');
  const breadCrumbVal = value;

  useEffect(() => {
    setBreadCrumbVal(breadCrumbVal);
  }, [breadCrumbVal, setBreadCrumbVal]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Input
          type="text"
          placeholder="Subjects / Units"
          name="subjectDetails"
          size="md"
          classNames={{
            mainWrapper: 'w-4/5 text-black',
            inputWrapper: 'border-primary',
            input: 'hover:cursor-pointer',
          }}
          isRequired={true}
          value={value}
          endContent={<BsChevronDoubleDown />}
          className="mb-3"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="no-scrollbar -mt-0.5 h-64 w-80 overflow-y-auto border-primary bg-gray-300">
        {subjects.map((subject) => {
          const chapters = subjectData[subject];
          return (
            <DropdownMenuSub key={subject}>
              <DropdownMenuSubTrigger className="hover:bg-blue-500 data-[state='open']:bg-blue-500 " key={subject}>
                <span>{subject}</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="no-scrollbar absolute -left-44  -top-10  m-1  max-h-64  w-fit max-w-96 overflow-y-auto text-nowrap border-primary bg-gray-300 md:static md:max-h-96 ">
                {chapters.map((chapter) => (
                  <DropdownMenuItem
                    className="text-black hover:bg-blue-500 "
                    key={`${subject}/${chapter}`}
                    onSelect={() => {
                      setValue(`${subject}/${chapter}`);
                    }}
                  >
                    <span>{chapter}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
