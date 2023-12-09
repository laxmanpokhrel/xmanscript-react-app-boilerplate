import { HTMLAttributes } from 'react';

export default function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`naxatw-animate-pulse naxatw-rounded-md naxatw-bg-muted ${className}`} {...props} />;
}
