import { FaFileAlt, FaTags, FaSignOutAlt, FaShareSquare, FaEye, FaComments, FaBan, FaTrash } from 'react-icons/fa';

const ContentMetricsCard = ({ contentMetrics }) => {
  return (
    <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg h-full">
      <h3 className="text-xl font-semibold mb-4">Content Metrics (All Time)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaFileAlt className="text-blue-500 mr-3" />
          <span>Total Posts: {contentMetrics.totalPosts}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaTags className="text-green-500 mr-3" />
          <span>Total Categories: {contentMetrics.totalCategory}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaSignOutAlt className="text-red-500 mr-3" />
          <span>Total Post Exit Count: {contentMetrics.totalPostExitCount}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaShareSquare className="text-purple-500 mr-3" />
          <span>Total Post Shares: {contentMetrics.totalPostShares}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaEye className="text-yellow-500 mr-3" />
          <span>Total Views: {contentMetrics.totalViews}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaComments className="text-pink-500 mr-3" />
          <span>Total Comments: {contentMetrics.totalComments}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaBan className="text-red-500 mr-3" />
          <span>Total Post Blocked: {contentMetrics.totalPostBlocked}</span>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg">
          <FaTrash className="text-gray-500 mr-3" />
          <span>Total Post Deleted: {contentMetrics.totalPostDeleted}</span>
        </div>
      </div>
    </div>
  );
};

export default ContentMetricsCard;
