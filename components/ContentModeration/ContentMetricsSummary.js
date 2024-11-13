import { FaFileAlt, FaTags, FaEye, FaShareSquare, FaComments, FaBan, FaTrash } from 'react-icons/fa';

const ContentMetricsSummary = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex items-center p-4 bg-blue-100 text-blue-800 rounded-lg shadow">
        <FaFileAlt className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Posts</h4>
          <p className="text-xl">{metrics.totalPosts}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg shadow">
        <FaTags className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Categories</h4>
          <p className="text-xl">{metrics.totalCategory}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow">
        <FaEye className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Views</h4>
          <p className="text-xl">{metrics.totalViews}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-purple-100 text-purple-800 rounded-lg shadow">
        <FaShareSquare className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Shares</h4>
          <p className="text-xl">{metrics.totalPostShares}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-pink-100 text-pink-800 rounded-lg shadow">
        <FaComments className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Comments</h4>
          <p className="text-xl">{metrics.totalComments}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-red-100 text-red-800 rounded-lg shadow">
        <FaBan className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Blocked Posts</h4>
          <p className="text-xl">{metrics.totalPostBlocked}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-gray-100 text-gray-800 rounded-lg shadow">
        <FaTrash className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Deleted Posts</h4>
          <p className="text-xl">{metrics.totalPostDeleted}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentMetricsSummary;