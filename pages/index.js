import Layout from "../components/Layout/Layout";
import DashboardCard from "../components/Dashboard/DashboardCard";
import { FaUsers, FaThumbsUp, FaComments, FaEye } from "react-icons/fa";
import UserMetricsBarChart from "../components/Dashboard/charts/UserMetricsBarChart";
import ContentMetricsCard from "../components/Dashboard/charts/ContentMetricsCard";
import EngagementMetricsBarChart from "../components/Dashboard/charts/EngagementMetricsBarChart";
import BlockchainMetricsCard from "../components/Dashboard/charts/BlockchainMetricsCard";

const DashboardPage = ({ dashboardData }) => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">
          Dashboard Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Total Users"
            value={dashboardData.userMetrics?.allTime?.totalUser || 0}
            icon={<FaUsers />}
          />
          <DashboardCard
            title="Active Users"
            value={dashboardData.userMetrics?.allTime?.activeUser || 0}
            icon={<FaEye />}
          />
          <DashboardCard
            title="Total Likes"
            value={dashboardData.engagementMetrics?.allTime?.totalLikes || 0}
            icon={<FaThumbsUp />}
          />
          <DashboardCard
            title="Total Comments"
            value={dashboardData.contentMetrics?.allTime?.totalComments || 0}
            icon={<FaComments />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">User Metrics</h3>
            <UserMetricsBarChart
              userMetrics={dashboardData.userMetrics?.allTime}
            />
          </div>
          <ContentMetricsCard
            contentMetrics={dashboardData.contentMetrics?.allTime}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Engagement Metrics</h3>
            <EngagementMetricsBarChart engagementMetrics={dashboardData.engagementMetrics?.allTime} />
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Blockchain Metrics</h3>
            <BlockchainMetricsCard metrics={dashboardData.blockchainMetrics?.allTime}/>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  let dashboardData = {};

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    dashboardData = data.dashboard || {};
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
  }

  return {
    props: {
      dashboardData,
    },
    revalidate: 3600, 
  };
}

export default DashboardPage;
