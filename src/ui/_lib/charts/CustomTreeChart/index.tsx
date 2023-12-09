/* eslint-disable react/no-array-index-key */
import { ResponsiveContainer, Treemap } from 'recharts';
import { IChartProps } from '../@types';

export default function CustomTreeChart({ data }: IChartProps) {
  return (
    <ResponsiveContainer width="100%" minHeight={300} maxHeight={500}>
      <Treemap data={data} dataKey="size" stroke="#ffffff" fill="#D5E2F5" />
    </ResponsiveContainer>
  );
}
