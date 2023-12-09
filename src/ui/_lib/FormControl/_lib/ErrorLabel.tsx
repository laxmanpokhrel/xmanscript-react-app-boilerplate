import { HTMLAttributes } from 'react';
import { cn } from '@/utils';

interface IErrorLabelProps extends HTMLAttributes<HTMLDivElement> {
  message?: string;
  disabled?: boolean;
}
export default function ErrorLabel({ message = '', disabled, className }: IErrorLabelProps) {
  return (
    <p
      className={cn(
        `naxatw-text-other-red naxatw-font-normal naxatw-body-sm ${disabled ? 'naxatw-text-gray-600' : ''}`,
        className,
      )}
    >
      {message}
    </p>
  );
}
