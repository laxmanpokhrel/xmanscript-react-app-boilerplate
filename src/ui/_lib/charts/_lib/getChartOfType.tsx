import { ChartTypes } from '../@types';
import CustomBarChart from '../CustomBarChart';
import CustomDonutChart from '../CustomDonutChart';
import CustomLineAreaChart from '../CustomLineAreaChart';
import CustomPieChart from '../CustomPieChart';
import CustomTreeChart from '../CustomTreeChart';

export default function getChartOfType(type: ChartTypes) {
  switch (type) {
    case 'bar':
      return CustomBarChart;
    case 'donut':
      return CustomDonutChart;
    case 'pie':
      return CustomPieChart;
    case 'line-area':
      return CustomLineAreaChart;
    case 'tree':
      return CustomTreeChart;
    default:
      return null;
  }
}
