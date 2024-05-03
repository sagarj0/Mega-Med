import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';
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

export function MultiDropdownMenu({
  setBreadCrumbVal,
}: {
  setBreadCrumbVal: Dispatch<SetStateAction<string>>;
}) {
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
            inputWrapper: 'bg-gray-300',
            input: 'hover:cursor-pointer',
          }}
          isRequired={true}
          // isReadOnly={true}
          value={value}
          // onValueChange={setValue}
          endContent={<BsChevronDoubleDown />}
          className="mb-3"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 h-64 overflow-y-auto bg-gray-300 no-scrollbar -mt-0.5">
        <DropdownMenuGroup>
          {subjects.map((subject) => {
            const chapters = subjectData[subject];
            return (
              <DropdownMenuSub key={subject}>
                <DropdownMenuSubTrigger
                  className="hover:bg-blue-500"
                  key={subject}
                >
                  <span>{subject}</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="m-1 bg-gray-300 max-w-96 ">
                    {chapters.map((chapter) => (
                      <DropdownMenuItem
                        className="hover:bg-blue-500 text-black "
                        key={`${subject}/${chapter}`}
                        onSelect={(e) => {
                          // console.log(e);
                          setValue(`${subject}/${chapter}`);
                        }}
                      >
                        <span>{chapter}</span>
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
