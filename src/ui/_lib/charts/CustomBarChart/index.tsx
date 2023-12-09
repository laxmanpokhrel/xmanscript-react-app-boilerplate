import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartFills } from '@/constants';
import { IChartProps } from '../@types';

const CustomYAxisTickLeft = (props: any) => {
  // eslint-disable-next-line no-unused-vars
  const { y, payload } = props;
  return (
    <g transform={`translate(${0},${y})`}>
      <text x={0} y={0} textAnchor="start" fill="#666">
        {payload.value}
      </text>
    </g>
  );
};
// const CustomYAxisTickRight = (props: any) => {
//   const { x, y, payload } = props;
//   return (
//     <g transform={`translate(${x + 20},${y})`}>
//       <text x={0} y={0} textAnchor="start" fill="#666">
//         {payload.value}
//       </text>
//     </g>
//   );
// };

/**
 *
 * @param `width` in percentage
 * @returns
 */
export default function CustomBarChart({ data, fills = ChartFills, scrollable = false, width = '150%' }: IChartProps) {
  const keys = Object.keys(data ? data[0] : {});
  return (
    // <div className="naxatw-h-full naxatw-w-full border-2">
    <ResponsiveContainer width={scrollable && width ? width : '100%'} minHeight={300} maxHeight={500}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} stroke="#DDD" />
        <XAxis
          dataKey="name"
          axisLine={false}
          style={{
            fontSize: '1.3rem',
            color: '#212121',
          }}
        />
        <YAxis
          yAxisId="left"
          orientation="left"
          axisLine={false}
          style={{
            fontSize: '1.3rem',
            color: '#212121',
          }}
          tick={<CustomYAxisTickLeft />}
        />
        <Tooltip />
        {keys.map((key, i) => (
          <Bar key={key} yAxisId="left" dataKey={key} fill={fills[i - 1]} barSize={28} radius={[4, 4, 0, 0]} />
        ))}
      </BarChart>
    </ResponsiveContainer>
    // </div>
  );
}
