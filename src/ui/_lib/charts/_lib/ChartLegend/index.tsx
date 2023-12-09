/* eslint-disable no-unused-vars */

import PieLegendItem from '@/ui/_lib/charts/_lib/PieLegendItem';
import { calculatePercentage, getSumOfKey, removeKeyFromObject } from '@/utils';
import { ILegendProps, PieChartDataItem } from '../../@types';
import LegendItem from '../LegendItem';

export default function ChartLegend<T>({
  data,
  type = 'bar',
  onClick = (_key: string) => {},
  fills = ['#418FDE', '#FF671F'],
}: ILegendProps<T>) {
  if (type === 'pie' || type === 'donut') {
    const maxValue = getSumOfKey(data as PieChartDataItem[], 'value');
    return (
      <div className="naxatw-w-full">
        <div className="cover naxatw-flex naxatw-flex-col naxatw-gap-4">
          {data.map((key: any, index: any) => (
            <PieLegendItem
              key={key.name}
              color={fills[index] || '#000000'}
              name={key.name}
              value={key.value}
              percentage={calculatePercentage(maxValue || 0, key.value ? key.value : 0)}
              onLegendClick={onClick}
            />
          ))}
        </div>
      </div>
    );
  }

  const keys: string[] = Object.keys(removeKeyFromObject(data[0], 'name' as keyof (typeof data)[0]));
  return (
    <div className="naxatw-w-full naxatw-flex naxatw-justify-center">
      <div className="cover naxatw-flex naxatw-gap-4 ">
        {keys.map((key, index) => (
          <LegendItem key={key} color={fills[index] || '#000000'} name={key} onLegendClick={onClick} />
        ))}
      </div>
    </div>
  );
}
