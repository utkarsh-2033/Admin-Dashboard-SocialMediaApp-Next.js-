import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const DashboardChart = ({ data, options, title }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="h-96 overflow-y-auto">  
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default DashboardChart;
