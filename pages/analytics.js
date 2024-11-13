import Layout from "../components/Layout/Layout";
import MetricsSection from "../components/Analytics/MetricsSection";

const AnalyticsPage = ({ dashboardData }) => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Metrics */}
          <MetricsSection 
            title="User Metrics"
            metrics={dashboardData.userMetrics}
            chartLabel="User Metrics"
          />
          
          {/* Content Metrics */}
          <MetricsSection 
            title="Content Metrics"
            metrics={dashboardData.contentMetrics}
            chartLabel="Content Metrics"
          />
          
          {/* Engagement Metrics */}
          <MetricsSection 
            title="Engagement Metrics"
            metrics={dashboardData.engagementMetrics}
            chartLabel="Engagement Metrics"
          />
          
          {/* Blockchain Metrics */}
          <MetricsSection 
            title="Blockchain Metrics"
            metrics={dashboardData.blockchainMetrics}
            chartLabel="Blockchain Metrics"
          />
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

export default AnalyticsPage;
