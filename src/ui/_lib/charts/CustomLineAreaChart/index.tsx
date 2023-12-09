/* eslint-disable react/no-array-index-key */
import { ResponsiveContainer, Tooltip, CartesianGrid, XAxis, YAxis, Line, Area, ComposedChart } from 'recharts';
import { IChartProps } from '../@types';

export default function CustomLineAreaChart({ data, fills }: IChartProps) {
  const keys = Object.keys(data ? data[0] : {});

  return (
    <ResponsiveContainer width="100%" minHeight={300} maxHeight={500}>
      <ComposedChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} stroke="#DDD" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {keys.map((key, i) => (
          <Area
            key={`line-${i}`}
            type="monotone"
            dataKey={key}
            stroke={fills && fills[i - 1]}
            fillOpacity={0.2}
            fill={fills && fills[i - 1]}
            // fill={`url(#${0}-${fills && fills[i - 1]}-${0.8})`}
          />
        ))}
        {keys.map((key, i) => (
          <Line key={`line-${key}`} type="monotone" dataKey={key} stroke={fills && fills[i - 1]} activeDot={{ r: 8 }} />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
