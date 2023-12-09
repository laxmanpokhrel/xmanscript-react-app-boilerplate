# CustomChartContainer

`CustomChartContainer` is a generic component that serves as a container for visualizing chart data. It accepts various props to customize its behavior and appearance.

## Props

The `CustomChartContainer` component accepts the following props:

- `header` (function): A function that renders the header component of the chart. It receives `chartTitle`, `hasDownloadBtn`, and `downloadComponentRef` as props.

- `legend` (function): A function that renders the legend component of the chart. It receives `data`, `type`, and `onClick` as props.

- `xLabel` (string, optional): The label for the x-axis of the chart.

- `yLabel` (string, optional): The label for the y-axis of the chart.

- `className` (string, optional): Additional CSS class names to apply to the container element.

- `data` (any): The data to be visualized by the chart.

- `type` (ChartTypes): The type of chart to render.

- `chartTitle` (string, optional): The title of the chart.

- `hasDownloadBtn` (boolean, optional): Indicates whether the chart should have a download button.

- `scrollable` (boolean, default: false): Indicates whether the chart container should be scrollable.

- `fillWithType` (boolean, default: false): Indicates whether to use fill colors matching the chart type.

- `fill` (string[], optional): An array of fill colors to be used for the chart.

- `onLegendClick` (function, optional): A callback function to be called when a legend item is clicked.

## Usage

Here's an example of how to use the `CustomChartContainer` component:

```jsx
import CustomChartContainer from 'path/to/CustomChartContainer';

// Example data
const data = [
  { label: 'Category A', value: 10 },
  { label: 'Category B', value: 20 },
  { label: 'Category C', value: 15 },
];

// Example header component
const Header = ({ chartTitle, hasDownloadBtn, downloadComponentRef }) => {
  // Header component implementation
};

// Example legend component
const Legend = ({ data, type, onClick }) => {
  // Legend component implementation
};

const MyComponent = () => {
  return (
    <CustomChartContainer
      header={Header}
      legend={Legend}
      xLabel="X-axis Label"
      yLabel="Y-axis Label"
      className="custom-chart"
      data={data}
      type="bar"
      chartTitle="My Chart"
      hasDownloadBtn={true}
      scrollable={true}
      fillWithType={false}
      fill={['#ff0000', '#00ff00', '#0000ff']}
      onLegendClick={() => {
        // Handle legend click event
      }}
    />
  );
};
