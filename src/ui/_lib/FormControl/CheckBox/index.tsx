import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { cn } from '@/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'peer naxatw-h-4 naxatw-w-4 naxatw-shrink-0 naxatw-rounded-sm naxatw-border naxatw-border-primary naxatw-shadow-sm focus-visible:naxatw-outline-none focus-visible:naxatw-ring-1 focus-visible:ring-ring disabled:naxatw-cursor-not-allowed disabled:naxatw-opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn('naxatw-flex naxatw-items-center naxatw-justify-center naxatw-text-current')}
    >
      <CheckIcon className="naxatw-h-4 naxatw-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
