import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Look at all the months and find the biggest value across all months
  // Math.max only takes numbers as arguments but we have array of objects
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Now, we have a new array with just numbers
  // By using spread operator, we take all the numbers out from the array
  const totalMaximum = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;
