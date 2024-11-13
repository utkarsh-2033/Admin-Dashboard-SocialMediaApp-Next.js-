import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserMetricsBarChart = ({ userMetrics }) => {
  const labels = ["Total Users", "Total Referrals", "Active Users", "Creators"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Users Data',
        data: [userMetrics.totalUser, userMetrics.totalReferral, userMetrics.activeUser, userMetrics.creator],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1,
      }
    ],
  };

  return <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />;
};

export default UserMetricsBarChart;
