/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { format, isValid, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '../_lib/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../_lib/Popover';
import { Button } from '../_lib/Button';
import { IDatePickerProps } from './@types';
import Input from '../Input';
import { cn } from '@/utils';

/**
 *  This code exports a default function called `DatePicker` that takes an optional boolean prop
 * `canType`. It uses React hooks to manage state for the selected date and a typed date input.
 */
export default function DatePicker({
  canType = false,
  onChange,
  value,
  id,
  placeholder,
  enable = true,
  mode = 'single',
}: IDatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const [typedDate, setTypedDate] = React.useState<any>();
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);

  useEffect(() => {
    if (!value) return;
    const dateArray = value.split('/');

    if (dateArray.length > 1) {
      // @ts-ignore
      setDate({ from: new Date(dateArray[0]), to: new Date(dateArray[1]) });
    } else {
      setDate(new Date(value));
    }
    setTypedDate(value);
  }, [value]);

  const handleTypedDate = (e: any) => {
    const passedTypedDate = e.target.value;
    setTypedDate(passedTypedDate);
    const parsedDate = parse(passedTypedDate, 'yyyy-MM-dd', new Date());

    if (isValid(parsedDate)) setDate(parsedDate);
    if (onChange) onChange(parsedDate);
  };

  const handleCalendarSelect = (data: any) => {
    setDate(data);
    setTypedDate((prev: any) => (data ? format(data, 'yyyy-MM-dd') : prev));
    if (onChange) onChange(data ? format(data, 'yyyy-MM-dd') : typedDate);
  };

  const handleRangeSelect = (data: any) => {
    if (onChange) onChange(`${format(data.from, 'yyyy-MM-dd')}/${format(data.to, 'yyyy-MM-dd')}`);
  };

  return (
    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild id={id} className="hover:naxatw-bg-teal-green-50">
        {canType ? (
          <Input
            type="text"
            hasIcon
            rightIconName="calendar_month"
            leftIconName="arrow_drop_down"
            value={typedDate}
            onChange={handleTypedDate}
            placeholder={placeholder}
            disabled={!enable}
          />
        ) : (
          <Button
            variant="secondary"
            className={cn(
              'naxatw-text-left naxatw-font-normal naxatw-flex naxatw-gap-2 naxatw-items-center naxatw-justify-between !naxatw-px-[0.75rem] !naxatw-text-gray-800 naxatw-w-full !naxatw-border-gray-400 naxatw-bg-white',
              !date && '',
            )}
          >
            <CalendarIcon className="naxatw-mr-2 naxatw-h-4 naxatw-w-4" />
            {mode === 'range' && date ? (
              <span className="naxatw-flex-1">
                {/*
// @ts-ignore */}
                {format(new Date(date?.from), 'yyyy/MM/dd')} <b>-</b>{' '}
                {/*
// @ts-ignore */}
                {date.to ? format(new Date(date?.to), 'yyyy/MM/dd') : ''}
              </span>
            ) : date ? (
              <span className="naxatw-flex-1">{format(new Date(date), 'yyyy-MM-dd')}</span>
            ) : (
              <span className="naxatw-flex-1">Pick a date</span>
            )}

            <i className="material-symbols-outlined  naxatw-cursor-pointer">arrow_drop_down</i>
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="naxatw-w-full !naxatw-p-[0px] naxatw-bg-white">
        {mode === 'range' ? (
          <Calendar
            mode="range"
            selected={date}
            onSelect={(val: Date) => {
              setDate(val);
              // @ts-ignore
              if (val?.to) {
                handleRangeSelect(val);
                // setIsCalendarOpen(false);
              }
            }}
          />
        ) : (
          <Calendar
            mode="single"
            selected={date}
            onSelect={(val: Date) => {
              handleCalendarSelect(val);
              setIsCalendarOpen(false);
            }}
            initialFocus
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
