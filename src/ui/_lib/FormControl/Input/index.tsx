/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { cn } from '@/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  rightIconName?: string;
  leftIconName?: string;
  varientSize?: 'sm' | 'lg';
  iconStyle?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      hasIcon = false,
      rightIconName = '',
      leftIconName = 'idators',
      varientSize = 'lg',
      iconStyle = '',
      onClick,
      ...props
    },
    ref,
  ) => {
    const sizeVarient = {
      sm: 'naxatw-h-[2.25rem]',
      lg: 'naxatw-h-[2.75rem]',
    };
    if (hasIcon)
      return (
        <div
          className={cn(
            `naxatw-bg-white group naxatw-flex naxatw-gap-[2px] naxatw-w-full naxatw-items-center naxatw-justify-center naxatw-rounded-md naxatw-border naxatw--[12px] file:naxatw-border-0 file:naxatw-bg-transparent file:naxatw-text-sm file:naxatw-font-medium placeholder:naxatw-text-gray-400 focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:naxatw-ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-5 disabled:naxatw-border-b-gray-600`,
            className,
            sizeVarient[varientSize],
          )}
        >
          {rightIconName && (
            <i
              className={cn(
                `material-symbols-outlined naxatw-cursor-pointer naxatw-text-2xl naxatw-px-1 group-hover:naxatw-bg-teal-green-50`,
                iconStyle,
              )}
              onClick={onClick}
            >
              {rightIconName}
            </i>
          )}
          <input
            type={type}
            className={cn(
              'naxatw-flex naxatw-pl-[8px] naxatw-h-full naxatw-w-full  naxatw-border-input naxatw-bg-transparent naxatw-text-sm naxatw-ring-offset-background file:naxatw-border-0 file:naxatw-bg-transparent file:naxatw-text-sm file:naxatw-font-medium placeholder:naxatw-text-gray-400  disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50 focus:naxatw-border-none focus:naxatw-outline-none hover:naxatw-bg-teal-green-50 naxatw-transition-all naxatw-duration-200',
            )}
            ref={ref}
            onClick={onClick}
            {...props}
          />
          {leftIconName && (
            <i
              className={cn(
                `material-symbols-outlined naxatw-cursor-pointer naxatw-text-2xl naxatw-px-1 group-hover:naxatw-bg-teal-green-50`,
                iconStyle,
              )}
              onClick={onClick}
            >
              {leftIconName}
            </i>
          )}
        </div>
      );

    return (
      <input
        type={type}
        className={cn(
          'naxatw-bg-white naxatw-flex naxatw-h-10 naxatw-w-full naxatw-rounded-md naxatw-border naxatw-border-gray-400 naxatw-bg-transparent naxatw-px-3 naxatw-py-2 naxatw-text-sm naxatw-ring-offset-background file:naxatw-border-0 file:naxatw-bg-transparent file:naxatw-text-sm file:naxatw-font-medium placeholder:naxatw-text-gray-400 focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:naxatw-ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50 hover:naxatw-bg-teal-green-50 naxatw-transition-all naxatw-duration-200',
          className,
          sizeVarient[varientSize],
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
