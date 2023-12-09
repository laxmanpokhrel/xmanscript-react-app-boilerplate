/* eslint-disable no-nested-ternary */
import { hasErrorBoundary } from '@xmanscript/has-error-boundary';
import React, { useEffect, useRef } from 'react';
import { cn } from '@/utils';
import { Popover, PopoverContent, PopoverTrigger } from '../_lib/Popover';
import { Button } from '../_lib/Button';
import { Command, CommandGroup, CommandItem } from '../_lib/Command';
import { IDropDownProps } from './@types';
import { IDropOption } from '../ComboBox/@types';

function Dropdown({
  options = [],
  multiple = false,
  choose = 'id',
  value,
  placeholder,
  onChange,
  id,
  className,
  disabled,
  isLoading = false,
  dropDownSize = 'drop-lg',
  placeholderClassName,
}: IDropDownProps) {
  const [open, setOpen] = React.useState(false);
  const [dropDownWidth, setDropDownWidth] = React.useState<number | undefined>(0);
  const handleSelect = (currentValue: any) => {
    if (multiple) {
      const selectedValues = Array.isArray(value) ? [...value] : [];
      const selectedIndex = selectedValues.indexOf(currentValue);
      if (selectedIndex === -1) {
        selectedValues.push(currentValue);
      } else {
        selectedValues.splice(selectedIndex, 1);
      }
      if (onChange) {
        onChange(selectedValues);
      }
      // setValue(selectedValues);
    } else {
      const selectedValue = currentValue === value ? '' : currentValue;
      // setValue(selectedValue);
      if (onChange) {
        onChange(selectedValue);
      }
      setOpen(false);
    }
  };

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    setDropDownWidth(triggerRef.current?.clientWidth);
  }, [triggerRef.current?.clientWidth]);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild ref={triggerRef}>
        <Button
          id={id}
          variant={disabled ? 'ghost' : 'drop'}
          size={dropDownSize}
          role="combobox"
          aria-expanded={open}
          className={cn(
            'naxatw-flex naxatw-justify-between naxatw-gap-1 naxatw-bg-white naxatw-items-center',
            className,
          )}
          onClick={() => setOpen(true)}
        >
          {multiple ? (
            <div className="naxatw-flex naxatw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <p className=" naxatw-line-clamp-1 naxatw-text-gray-500 naxatw-font-medium">{value.length} Selected </p>
              ) : (
                <p
                  className={cn(
                    'naxatw-text-left  naxatw-body-md naxatw-text-gray-400 naxatw-px-0 naxatw-line-clamp-2',
                    placeholderClassName,
                  )}
                >
                  {placeholder || 'Choose'}
                </p>
              )}
            </div>
          ) : (
            <>
              {value ? (
                <p className=" naxatw-body-md  naxatw-text-gray-800  naxatw-line-clamp-1 naxatw-font-medium">
                  {options.find((option: IDropOption) => option[choose as keyof IDropOption] === value)?.label ||
                    'No Name Found'}
                </p>
              ) : (
                <p
                  className={cn(
                    'naxatw-text-left  naxatw-body-md naxatw-px-0 naxatw-text-gray-400 naxatw-line-clamp-2',
                    placeholderClassName,
                  )}
                >
                  {placeholder || 'Choose'}
                </p>
              )}
            </>
          )}
          <i className="material-symbols-outlined naxatw-cursor-pointer naxatw-h-4 naxatw-text-gray-800 naxatw-w-4 naxatw-flex naxatw-justify-center naxatw-items-center naxatw-shrink-0 naxatw-opacity-50">
            arrow_drop_down
          </i>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="naxatw-p-[0px] naxatw-bg-white naxatw-block search-scrollbar naxatw-max-h-[10rem] naxatw-overflow-y-auto"
        style={{ width: `${dropDownWidth}px` }}
      >
        <Command className="naxatw-p-0 naxatw-m-0">
          {isLoading && <p>Loading ...</p>}
          <CommandGroup className="">
            {options.length ? (
              options.map((option: IDropOption) => (
                <CommandItem
                  key={option.value?.toString()}
                  onSelect={() => handleSelect(option[choose as keyof IDropOption])}
                >
                  <i
                    className={`material-symbols-outlined  naxatw-cursor-pointer naxatw-mr-[1px] naxatw-text-[20px] ${
                      !multiple
                        ? value === option[choose as keyof IDropOption]
                          ? 'naxatw-opacity-100'
                          : 'naxatw-opacity-0'
                        : Array.isArray(value) && value.includes(option[choose as keyof IDropOption])
                        ? 'naxatw-opacity-100'
                        : 'naxatw-opacity-0'
                    }`}
                  >
                    done
                  </i>
                  {option.label}
                </CommandItem>
              ))
            ) : (
              <div className="naxatw-h-[4.25rem] naxatw-flex naxatw-items-center naxatw-justify-center naxatw-text-gray-400">
                No Data Found.
              </div>
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
export default hasErrorBoundary(Dropdown);
