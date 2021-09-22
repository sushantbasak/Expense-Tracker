import './Chart.css';

import ChartBar from './Chartbar';

const Chart = (props) => {
  return (
    <div className="chart">
      {props.datapoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
        />
      ))}
    </div>
  );
};

export default Chart;
