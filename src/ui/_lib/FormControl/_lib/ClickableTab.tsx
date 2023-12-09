import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@/utils';

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'naxatw-inline-flex naxatw-h-10 naxatw-items-center naxatw-justify-center naxatw-gap-1 naxatw-rounded-lg naxatw-bg-gray-200 naxatw-p-1 naxatw-text-gray-600',
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, onClick, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'naxatw-inline-flex naxatw-items-center naxatw-justify-center naxatw-whitespace-nowrap naxatw-rounded-lg hover:naxatw-bg-teal-50 naxatw-px-3 naxatw-py-1.5 naxatw-text-sm naxatw-font-medium naxatw-ring-offset-white naxatw-transition-all focus-visible:naxatw-outline-none focus-visible:naxatw-ring-2 focus-visible:naxatw-ring-ring focus-visible:naxatw-ring-offset-2 disabled:naxatw-pointer-events-none disabled:naxatw-opacity-50 data-[state=active]:naxatw-bg-white data-[state=active]:naxatw-text-gray-800 data-[state=active]:naxatw-shadow-sm',
      className,
    )}
    onClick={onClick}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export { Tabs, TabsList, TabsTrigger };
