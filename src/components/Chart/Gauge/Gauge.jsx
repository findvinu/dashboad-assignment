import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import './Gauge.css';

const PercentChart = () => {
  const settings = {
    width: 100,
    height: 100,
    value: 75,
  };

  return (
    <Gauge
    className="chart"
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 20,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: "#7294ff",
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: "#2a3465",
        },
      })}
    />
  );
};

export default PercentChart;
