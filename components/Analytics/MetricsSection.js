import { useState } from "react";
import AnalyticsChart from "./AnalyticsChart";

const transformChartData = (chartData) => {
  const labels = chartData.map((item) => item.timestamp);
  const data = chartData.map((item) => item.count);

  return {
    labels: labels,
    datasets: [
      {
        label: "Activity",
        data: data,
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
    ],
  };
};

const MetricsSection = ({ title, metrics = {} , chartLabel }) => {
  const [timeframe, setTimeframe] = useState("daily");

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const selectedMetrics = metrics[timeframe] || {};
  const chartData = transformChartData(selectedMetrics.chartData || []);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      legend: { display: false },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-xl flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <select
          value={timeframe}
          onChange={handleTimeframeChange}
          className="border p-2 rounded bg-gray-700 text-gray-100"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg shadow-md mb-4">
        <h4 className="text-lg font-semibold mb-2">Metrics Data</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          {Object.keys(selectedMetrics).map(
            (key) =>
              key !== "chartData" && (
                <div
                  key={key}
                  className="p-2 bg-gray-600 rounded-lg"
                >{`${key.replace(/([A-Z])/g, " $1")}: ${selectedMetrics[key]}`}</div>
              )
          )}
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded-lg shadow-md flex-grow">
        <h4 className="text-lg font-semibold mb-2">Chart</h4>
        <div className="h-64">
          {selectedMetrics.chartData?.length > 0 ? (
            <AnalyticsChart data={chartData} options={chartOptions} />
          ) : (
            <div>Loading {chartLabel} Chart...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetricsSection;
