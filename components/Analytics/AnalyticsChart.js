import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const AnalyticsChart = ({ data, options }) => {
  return <Line data={data} options={options} />;
};

export default AnalyticsChart;
