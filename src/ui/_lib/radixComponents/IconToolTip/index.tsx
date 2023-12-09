import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { HTMLAttributes } from 'react';
import Icon from '@/primitives/Icon';
import { cn } from '@/utils';

interface IconToolTipProps extends HTMLAttributes<HTMLButtonElement> {
  iconName: string;
  message: string;
  iconStyle?: string;
  messageStyle?: string;
}

export default function IconToolTop({ iconName, message, onClick, iconStyle, messageStyle }: IconToolTipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger onClick={onClick}>
          <Icon
            iconName={iconName}
            className={cn('naxatw-text-gray-600 naxatw-font-light naxatw-text-xl', iconStyle)}
          />
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <div className={cn('message naxatw-bg-white naxatw-p-1 naxatw-rounded-lg naxatw-text-sm', messageStyle)}>
            {message}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
