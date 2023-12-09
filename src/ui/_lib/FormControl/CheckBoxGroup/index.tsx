/* eslint-disable react-hooks/exhaustive-deps */
import { markCheckedByStringMatch, splitArrayIntoChunks } from '@xmanscript/utils';
import { useState, useEffect } from 'react';
import { IChechBoxGroupProps, ICheckBoxData } from './@types';
import Checkbox from '../CheckBox';
import { cn } from '@/utils';

export default function CheckBoxGroup({
  className,
  value,
  checkBoxOptions = [],
  choose = 'id',
  onChange,
  rows = 5,
  id,
}: IChechBoxGroupProps) {
  const [list, setList] = useState<ICheckBoxData[]>([]);
  const changeHandler = (obj: Record<string, any>, val: boolean) => {
    setList((prev) => {
      const tempPrev = prev;
      const index = prev.findIndex((item) => item.id === obj.id);
      tempPrev[index].checked = val;
      if (onChange)
        onChange(
          tempPrev.reduce((acc: string[], item: ICheckBoxData) => {
            if (item.checked) acc.push(String(item[choose as keyof ICheckBoxData]));
            return acc;
          }, []),
        );
      return [...tempPrev];
    });
  };

  useEffect(() => {
    if (value?.length) setList(markCheckedByStringMatch(list, value, choose as keyof ICheckBoxData));
  }, [value]);

  useEffect(() => {
    setList(checkBoxOptions);
  }, [checkBoxOptions]);
  return (
    <div className="naxatw-flex naxatw-gap-4" id={id}>
      {splitArrayIntoChunks(list, rows).map((lst) => (
        <div
          key={JSON.stringify(lst)}
          className={cn(
            'naxatw-w-full naxatw-gap-2 naxatw-flex-col naxatw-justify-center naxatw-items-center',
            className,
          )}
        >
          {lst.map((item) => (
            <div
              key={item.id}
              className="box naxatw-flex naxatw-gap-2 naxatw-items-center naxatw-justify-start naxatw-min-h-[1.5rem]"
            >
              <Checkbox id={item.id} onCheckedChange={(e: any) => changeHandler(item, e)} checked={item.checked} />
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 naxatw-cursor-pointer naxatw-text-gray-800"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
