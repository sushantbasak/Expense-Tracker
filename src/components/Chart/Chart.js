import './Chart.css';

import ChartBar from './Chartbar';

const Chart = (props) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);

  let totalMaximum = 0;
  for (const data of dataPointsValue) totalMaximum += data;

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
