import ToolTip from '@/radixComponents/Tooltip';
import CaptureComponent from '@/utils/CaptureComponent';

export interface IChartHeaderProps {
  chartTitle: string;
  hasDownloadBtn?: boolean;
  hasChartSwitcher?: boolean;
  hasFullScreenButton?: boolean;
  downloadComponentRef: React.RefObject<any>;
}

export default function ChartHeader({
  chartTitle,
  hasDownloadBtn,
  hasFullScreenButton,
  downloadComponentRef,
}: IChartHeaderProps) {
  return (
    <div className="head naxatw-flex naxatw-flex-col naxatw-justify-center naxatw-gap-2">
      <div className="naxatw-flex naxatw-justify-between naxatw-items-start">
        <h3 className="naxatw-text-[1.063rem] naxatw-font-bold naxatw-pr-5 naxatw-relative">
          {chartTitle}
          <ToolTip
            iconName="info"
            message={`This chart shows the ${chartTitle}`}
            iconStyle="naxatw-absolute naxatw-bottom-[2px] naxatw-pl-1 naxatw-font-light"
            messageStyle="naxatw-font-normal naxatw-my-3"
          />
        </h3>

        <div className="naxatw-flex naxatw-justify-end naxatw-items-center naxatw-gap-3">
          {hasFullScreenButton && (
            <div className="actions naxatw-flex naxatw-w-40px hover:naxatw-bg-teal-50 naxatw-cursor-pointer naxatw-p-1 naxatw-rounded-lg">
              <ToolTip
                iconName="open_in_full"
                message="View chart in full screen"
                iconStyle="!naxatw-text-2xl"
                messageStyle="naxatw-font-normal"
                iconClick={() => {}}
              />
            </div>
          )}

          {hasDownloadBtn && (
            <div className="actions naxatw-flex naxatw-w-40px hover:naxatw-bg-teal-50 naxatw-cursor-pointer naxatw-p-1 naxatw-rounded-lg">
              <ToolTip
                iconName="download"
                message="Download chart"
                iconStyle="!naxatw-text-2xl"
                messageStyle="naxatw-font-normal"
                iconClick={() => CaptureComponent({ componentRef: downloadComponentRef, captureName: chartTitle })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
