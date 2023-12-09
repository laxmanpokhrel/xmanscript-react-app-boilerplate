/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { HtmlHTMLAttributes, useRef, useState, useMemo } from 'react';
import { IChartHeaderProps } from '../../ChartHeader';
import { ChartTypes, ILegendProps } from '../../../@types';
import getChartFillOfType from '../../getChartFillOfType';
import { ChartFills } from '@/constants';
import { assignZeroToKeys, cn, removeOrAddObjectFromArray, setZeroValueForObjectsWithKeyValues } from '@/utils';
import RoundedContainer from '@/primitives/RoundedContainer';
import getChartOfType from '../../getChartOfType';
// import { IChartHeaderProps } from '@CustomComponents/Charts/ChartHeader';
// import RoundedContainer from 'ui/_lib/molecules/RoundedContainer';
// import { ChartFills } from '@Constants/index';
// import { ChartTypes } from '@Schemas/types';
// import getChartOfType from '@/ui/_lib/primitives/_lib/getChartOfType';
// import getChartFillOfType from '@/ui/_lib/primitives/_lib/getChartFillOfType';
// import { ILegendProps } from '@Schemas/interfaces';
// import { cn, assignZeroToKeys, removeOrAddObjectFromArray, setZeroValueForObjectsWithKeyValues } from '@Utils/index';

//* Why omit "downloadComponentRef"?
//* Because if we extend "downloadComponentRef" here we will  have to pass it when we call CustomChartContainer.And since we pass this ref from inside "CustomChartContainer" we have to omit it to avoid error while executing "CustomChartContainer"

interface ICustomChartContainerProps<T>
  extends HtmlHTMLAttributes<HTMLDivElement>,
    Omit<IChartHeaderProps, 'downloadComponentRef'> {
  header: (props: IChartHeaderProps) => JSX.Element;
  type: ChartTypes;
  data: T[];
  legend?: (props: ILegendProps<T>) => JSX.Element;
  xLabel?: string;
  yLabel?: string;
  scrollable?: boolean;
  fillWithType?: boolean;
  fill?: string[];
  onLegendClick?: () => any;
  hasHeader?: boolean;
}

/**
 * CustomChartContainer is a generic type component. It's type is specified by type of data it visualises
 * @param `header`, `chart`, `legend`, `xLabel`, `yLabel`, `className`, `data`, `type`, `chartTitle`, `hasDownloadBtn`, `scrollable`, `fills`
 * @returns JSX chart component
 */
export default function ChartContainer<T>({
  header,
  legend,
  xLabel,
  yLabel,
  className,
  data,
  type,
  chartTitle,
  hasDownloadBtn,
  hasChartSwitcher,
  hasFullScreenButton,
  scrollable = false,
  fillWithType = false,
  fill,
  hasHeader = true,
  onLegendClick = () => {},
}: ICustomChartContainerProps<T>) {
  const componentRef = useRef(null);
  const chart = getChartOfType(type);

  // if no fill is provided it uses default fills ie "ChartFills"
  // otherwise if "fillWithType" is passed it will take the fill with matching chart "type"
  // eslint-disable-next-line no-nested-ternary
  const fills = fill || (fillWithType ? getChartFillOfType(type) : ChartFills);
  const [clickedLabels, setClickedLabels] = useState<string[]>([]);

  // set the data based on the clickedLabels
  const initialisedData = useMemo(() => {
    if (!clickedLabels.length) return data;
    if (type === 'pie' || type === 'donut')
      return setZeroValueForObjectsWithKeyValues(data as Record<string, any>[], 'name', clickedLabels);
    return assignZeroToKeys(data as Record<string, any>[], clickedLabels);
  }, [clickedLabels, data, type]);

  return (
    <RoundedContainer
      ref={componentRef}
      className={cn(
        'naxatw-grid naxatw-grid-cols-12 naxatw-gap-7  naxatw-w-full naxatw-h-fit naxatw-py-5 naxatw-px-4 naxatw-relative',
        className,
      )}
    >
      {hasHeader && header && (
        <div className="head naxatw-col-span-12">
          <div className="cover">
            {header({
              chartTitle,
              hasDownloadBtn,
              hasChartSwitcher,
              hasFullScreenButton,
              downloadComponentRef: componentRef,
            })}
          </div>
        </div>
      )}

      {/* {yLabel && !(type === 'pie' || type === 'donut') ? (
        <div className="y-label naxatw-col-span-1 naxatw-flex naxatw-justify-end naxatw-items-center naxatw-bg-slate-500">
          <p className="-naxatw-rotate-90 naxatw-origin-center naxatw-text-xs naxatw-absolute">{yLabel}</p>
        </div>
      ) : null} */}

      {yLabel && !(type === 'pie' || type === 'donut') ? (
        <div className="y-label naxatw-col-span-1 naxatw-flex naxatw-justify-end naxatw-items-center naxatw-absolute naxatw-w-12 naxatw-h-full naxatw-top-0 naxatw-left-0">
          <p className="-naxatw-rotate-90 naxatw-origin-center naxatw-whitespace-nowrap naxatw-text-xs">{yLabel}</p>
        </div>
      ) : null}

      <div
        className={`card ${
          // eslint-disable-next-line no-nested-ternary
          type === 'pie' || type === 'donut'
            ? 'naxatw-col-span-12 sm:naxatw-col-span-6  md:naxatw-col-span-6 lg:naxatw-col-span-12 xl:naxatw-col-span-6'
            : yLabel
            ? 'naxatw-col-span-12'
            : 'naxatw-col-span-12'
        } ${scrollable ? 'naxatw-overflow-x-scroll chart-scrollbar' : ''}`}
      >
        {chart && chart({ data: initialisedData, fills, scrollable })}
      </div>
      {xLabel && !(type === 'pie' || type === 'donut') ? (
        <div className="x-label naxatw-col-span-12 naxatw-flex naxatw-justify-center naxatw-items-center naxatw-h-[2rem]">
          <p className="naxatw-mr-2">{xLabel}</p>
        </div>
      ) : null}
      {legend && (
        <div
          className={`legend ${
            type === 'pie' || type === 'donut'
              ? 'naxatw-col-span-12 sm:naxatw-col-span-6 md:naxatw-col-span-6 lg:naxatw-col-span-12 xl:naxatw-col-span-6  naxatw-flex naxatw-justify-start naxatw-items-center'
              : 'naxatw-col-span-11 naxatw-col-start-1 naxatw-col-end-13'
          } `}
        >
          {legend({
            data,
            type,
            fills,
            onClick: (obj) => {
              setClickedLabels((prev: any) => [...removeOrAddObjectFromArray(prev, obj)]);
              onLegendClick();
            },
          })}
        </div>
      )}
    </RoundedContainer>
  );
}
