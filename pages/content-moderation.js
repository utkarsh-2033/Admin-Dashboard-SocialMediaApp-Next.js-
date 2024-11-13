import Layout from '../components/Layout/Layout';
import MetricsSummary from '../components/ContentModeration/ContentMetricsSummary';
import FlaggedPostsTable from '../components/ContentModeration/FlaggedPostsTable';

const ContentModerationPage = ({ contentMetrics, flaggedPosts }) => {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">Content Moderation</h2>
        
        {/* Metrics Summary */}
        <MetricsSummary metrics={contentMetrics.allTime} />

        {/* Flagged/Blocked Posts Table */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Flagged/Blocked Posts</h3>
          <FlaggedPostsTable posts={flaggedPosts} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  let contentMetrics = {};
  let flaggedPosts = [
{ id: 1, user: 'John Doe', content: 'This is a flagged post content example.', reason: 'Spam', date: '2024-11-10' },
{ id: 2, user: 'Jane Smith', content: 'This post contains inappropriate content.', reason: 'Inappropriate Content', date: '2024-11-11' },
{ id: 3, user: 'Sam Green', content: 'This post is flagged for harassment.', reason: 'Harassment', date: '2024-11-12' },
{ id: 4, user: 'Anna Blue', content: 'This post is flagged for false information.', reason: 'False Information', date: '2024-11-13' },
{ id: 5, user: 'Mike Brown', content: 'This post is flagged for hate speech.', reason: 'Hate Speech', date: '2024-11-14' },
{ id: 6, user: 'Chris Red', content: 'This post contains illegal content.', reason: 'Illegal Content', date: '2024-11-15' },
{ id: 7, user: 'Olivia White', content: 'This post is flagged for spam.', reason: 'Spam', date: '2024-11-16' },
{ id: 8, user: 'Liam Black', content: 'This post is flagged for offensive language.', reason: 'Offensive Language', date: '2024-11-17' },
{ id: 9, user: 'Emma Brown', content: 'This post is flagged for promotion of violence.', reason: 'Promotion of Violence', date: '2024-11-18' },
{ id: 10, user: 'Noah Blue', content: 'This post is flagged for adult content.', reason: 'Adult Content', date: '2024-11-19' },
  ];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    contentMetrics = data.dashboard.contentMetrics || {};
  } catch (error) {
    console.error("Error fetching content metrics:", error);
  }

  return {
    props: {
      contentMetrics,
      flaggedPosts
    },
    revalidate: 3600, 
  };
}

export default ContentModerationPage;
