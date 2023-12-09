/* eslint-disable no-unused-vars */
export type ChartTypes = 'pie' | 'bar' | 'line' | 'donut' | 'line-area' | 'tree';
export interface ILegendProps<T> {
  data: T[];
  onClick?: (key: string) => any;
  type?: ChartTypes;
  fills?: string[];
}

export interface PieChartDataItem {
  name: string;
  value: number;
}

export interface ILegendItemProps {
  color: string;
  name: string;
  onLegendClick: (key: string) => any;
}

export interface IPieLegendItemProps {
  color: string;
  name: string;
  value: number | string;
  percentage: number | string;
  onLegendClick: (key: string) => any;
}

export interface IChartProps {
  data: Record<string, any>[any];
  fills?: string[];
  scrollable?: boolean;
  width?: string;
}
