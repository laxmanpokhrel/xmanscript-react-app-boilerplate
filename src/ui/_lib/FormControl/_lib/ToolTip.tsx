import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import { cn } from '@/utils';

interface ToolTipProps {
  iconName: string;
  message: string;
  iconStyle?: string;
  messageStyle?: string;
  iconClick?: () => void;
}

export default function ToolTip({ iconName, message, iconClick, iconStyle, messageStyle }: ToolTipProps) {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger onClick={iconClick}>
            <i
              className={cn(
                `material-symbols-outlined laxu-cursor-pointer laxu-text-2xl laxu-px-1 group-hover:laxu-bg-teal-green-50 naxatw-text-gray-600 naxatw-font-light naxatw-text-xl`,
                iconStyle,
              )}
            >
              {iconName}
            </i>
          </TooltipTrigger>
          <TooltipContent sideOffset={5}>
            <div className={`message naxatw-bg-white naxatw-p-1 naxatw-rounded-lg naxatw-text-sm ${messageStyle}`}>
              {message}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
