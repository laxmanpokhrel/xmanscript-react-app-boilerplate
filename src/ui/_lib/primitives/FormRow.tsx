import { HTMLAttributes } from 'react';
import { cn } from '@/utils';

export default function FormRow({ children, className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('naxatw-flex naxatw-items-end naxatw-gap-[0.75rem] naxatw-w-full', className)}>{children}</div>
  );
}
