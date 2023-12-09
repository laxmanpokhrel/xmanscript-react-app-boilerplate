/* eslint-disable no-nested-ternary */
import React, { ChangeEvent, useEffect, useState, useRef } from 'react';
import { hasErrorBoundary } from '@xmanscript/has-error-boundary';
import { IComboBoxProps, IDropOption } from './@types';
import { Popover, PopoverContent, PopoverTrigger } from '../_lib/Popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../_lib/Command';
import { Button } from '../_lib/Button';

function Combobox({
  options = [],
  value,
  choose = 'id',
  multiple = false,
  onChange,
  disabled,
  placeholder = 'Choose',
  dropDownSize = 'drop-lg',
}: IComboBoxProps) {
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState(bindvalue);
  const [dropDownWidth, setDropDownWidth] = React.useState<number | undefined>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredData, setFilteredData] = useState(options);

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    setDropDownWidth(triggerRef.current?.clientWidth);
  }, [triggerRef.current?.clientWidth]);

  useEffect(() => {
    const debounceInstance = setTimeout(() => {
      setFilteredData([...options]);
      if (searchQuery.length) {
        const newOptions = options.filter(
          (item) =>
            // @ts-ignore
            item.value?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
            item.label?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
        );
        setFilteredData(newOptions);
      } else setFilteredData(options);
    }, 300);

    return () => clearTimeout(debounceInstance);
  }, [searchQuery, options]);

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
      if (onChange) onChange(selectedValue);
      // setValue(selectedValue);
      setOpen(false);
    }
    setSearchQuery('');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild ref={triggerRef}>
        <Button
          variant={disabled ? 'ghost' : 'drop'}
          size={dropDownSize}
          role="combobox"
          aria-expanded={open}
          className="naxatw-flex naxatw-justify-between naxatw-pr-3 naxatw-items-center"
        >
          {multiple ? (
            <div className="naxatw-flex naxatw-flex-wrap">
              {Array.isArray(value) && value.length > 0 ? (
                <span>{value.length} items selected</span>
              ) : (
                <span className="naxatw-opacity-50">Select options...</span>
              )}
            </div>
          ) : (
            <p className="naxatw-line-clamp-1">
              {value ? (
                options.find((option: IDropOption) => option[choose as keyof IDropOption] === value)?.label
              ) : (
                <span className="naxatw-opacity-50">{placeholder}</span>
              )}
            </p>
          )}
          <i className="material-symbols-outlined naxatw-cursor-pointer naxatw-h-4 naxatw-w-4 naxatw-flex naxatw-justify-center naxatw-items-center naxatw-shrink-0 naxatw-opacity-50">
            arrow_drop_down
          </i>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="naxatw-p-[0px] naxatw-bg-white naxatw-w-full naxatw-max-h-[15rem] "
        style={{ width: `${dropDownWidth}px` }}
      >
        <Command className="naxatw-p-0 naxatw-m-0">
          <CommandInput
            placeholder="Search data..."
            value={searchQuery}
            onChangeCapture={(e: ChangeEvent<any>) => {
              setSearchQuery(e.target.value);
            }}
          />
          {/* {!filteredData.length && (
            <div className="naxatw-px-2 naxatw-py-1 naxatw-text-gray-500 naxatw-font-extralight">No match found!</div>
          )} */}
          <CommandEmpty>No match found.</CommandEmpty>
          <CommandGroup className="naxatw-overflow-y-auto naxatw-max-h-[12rem] scrollbar">
            {filteredData.map((option: IDropOption) => (
              <CommandItem
                key={option.label}
                onSelect={() => handleSelect(option[choose as keyof IDropOption])}
                // @ts-ignore
                value={option.value}
              >
                <i
                  className={`material-symbols-outlined naxatw-cursor-pointer naxatw-mr-[1px] naxatw-text-[20px] ${
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
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default hasErrorBoundary(Combobox);
