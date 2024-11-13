import { Bar } from 'react-chartjs-2';

const EngagementMetricsBarChart = ({ engagementMetrics }) => {
  const data = {
    labels: ['Total Likes', 'Total Views', 'Total Notifications', 'Total Messages', 'Private Chats'],
    datasets: [
      {
        label: 'All Time Engagement Metrics',
        data: [
          engagementMetrics.totalLikes,
          engagementMetrics.totalViews,
          engagementMetrics.totalNotifications,
          engagementMetrics.totalMessage,
          engagementMetrics.privateChats,
        ],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />;
};

export default EngagementMetricsBarChart;
