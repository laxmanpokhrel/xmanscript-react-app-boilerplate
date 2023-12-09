import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@radix-ui/react-tooltip';
import Icon from '@/primitives/Icon';

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
            <Icon
              iconName={iconName}
              className={`naxatw-text-gray-600 naxatw-font-light naxatw-text-xl ${iconStyle}`}
            />
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
