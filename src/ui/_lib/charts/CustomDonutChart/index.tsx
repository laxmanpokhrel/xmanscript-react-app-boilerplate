import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { IChartProps } from '../@types';

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

export default function CustomDonutChart({ data, fills }: IChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={300} maxHeight={500}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          // label={renderCustomizedLabel}
          fill="#8884d8"
          dataKey="value"
          outerRadius="90%"
          innerRadius={60}
          paddingAngle={0}
        >
          {data?.map((_entry: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Cell key={`cell-${index}`} fill={fills && fills[index % fills.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
