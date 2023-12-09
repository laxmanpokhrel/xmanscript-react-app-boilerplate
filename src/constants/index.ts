import osmLayer from '@Assets/images/osmLayer.png';
import topographyLayer from '@Assets/images/topographyLayer.png';
import satelliteLayer from '@Assets/images/satelliteLayer.png';
import HybridLayer from '@Assets/images/HybridLayer.png';
import { IDropDownData } from '@/schemas/interfaces';

export const ChartFills = ['#0077E4', '#D33A38', '#05A48E', '#05A48E'];
export const BarChartFills = ['#0077E4', '#D33A38', '#05A48E'];
export const PieChartFills = ['#0077E4', '#05A48E', '#D33A38', '#F6C644 '];
export const DonutChartFills = ['#FF671F', '#418FDE', '#5CB8B2', '#FF8042'];
export const LineAreaChartFills = ['#FF671F', '#418FDE', '#5CB8B2', '#FF8042'];

export const baseLayerList = {
  OSM: {
    type: 'raster',
    tiles: [
      'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      'https://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      'https://c.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
    ],
    tileSize: 256,
    attribution: '',
    maxzoom: 18,
    image: osmLayer,
    name: 'OSM',
  },
  Satellite: {
    type: 'raster',
    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'],
    tileSize: 256,
    attribution: '',
    maxzoom: 18,
    image: satelliteLayer,
    name: 'Satellite',
  },

  Topo: {
    type: 'raster',
    tiles: ['https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'],
    maxZoom: 18,
    image: topographyLayer,
    name: 'Topo',
  },

  Hybrid: {
    type: 'raster',
    tiles: ['https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'],
    maxZoom: 18,
    image: HybridLayer,
    name: 'Hybrid',
  },
};

export const DEBOUNCE_TIME = 200;

export const BarchartTestData = [
  { label: 'Label 1', valueMale: 10, valueFemale: 8 },
  { label: 'Label 2', valueMale: 20, valueFemale: 12 },
  { label: 'Label 3', valueMale: 30, valueFemale: 16 },
  { label: 'Label 4', valueMale: 40, valueFemale: 20 },
];

export const BiaxialBarChartTestData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const PieChartTestData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
export const LineChartTestData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const TreeChartTestData = [
  { name: 'Spacer', size: 0 },
  {
    name: 'operator',
    children: [
      {
        name: 'distortion',
        children: [
          { name: 'BifocalDistortion', size: 4461 },
          { name: 'Distortion', size: 6314 },
          { name: 'FisheyeDistortion', size: 3444 },
        ],
      },
      { name: 'Spacer', size: 0 },
      {
        name: 'filter',
        children: [
          { name: 'FisheyeTreeFilter', size: 5219 },
          { name: 'VisibilityFilter', size: 3509 },
        ],
      },
      { name: 'Spacer', size: 0 },
      { name: 'IOperator', size: 1286 },
      { name: 'Spacer', size: 0 },
      {
        name: 'label',
        children: [
          { name: 'Labeler', size: 9956 },
          { name: 'Spacer', size: 0 },
          { name: 'RadialLabeler', size: 3899 },
          { name: 'Spacer', size: 0 },
          { name: 'StackedAreaLabeler', size: 3202 },
        ],
      },
      { name: 'Spacer', size: 0 },
    ],
  },
];

export const budgetList = [
  {
    id: 1,
    budgetIcon: 'handshake',
    budgetName: 'Commitment',
    amount: 12312123000,
  },
  {
    id: 2,
    budgetIcon: 'paid',
    budgetName: 'Disbursement',
    amount: 112312000,
  },
  {
    id: 3,
    budgetIcon: 'payments',
    budgetName: 'Expenditure',
    amount: 987900000000,
  },
];

export const comboboxTestData: IDropDownData[] = [
  {
    id: 1,
    label: 'Next.js',
    value: 'next.js',
  },
  {
    id: 2,
    label: 'SvelteKit',
    value: 'sveltekit',
  },
  {
    id: 3,
    label: 'Nuxt.js',
    value: 'nuxt.js',
  },
  {
    id: 4,
    label: 'Remix',
    value: 'remix',
  },
  {
    id: 5,
    label: 'Astro',
    value: 'astro',
  },
];
