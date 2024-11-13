import { FaUsers, FaUserCheck, FaUserFriends, FaUserTie } from "react-icons/fa";

const UserMetricsSummary = ({ metrics }) => {
  // Provide default values if metrics is undefined
  const defaultMetrics = {
    totalUser: 0,
    activeUser: 0,
    totalReferral: 0,
    creator: 0
  };

  const safeMetrics = metrics || defaultMetrics;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex items-center p-4 bg-blue-100 text-blue-800 rounded-lg shadow">
        <FaUsers className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Users</h4>
          <p className="text-xl">{safeMetrics.totalUser}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg shadow">
        <FaUserCheck className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Active Users</h4>
          <p className="text-xl">{safeMetrics.activeUser}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-purple-100 text-purple-800 rounded-lg shadow">
        <FaUserFriends className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Referrals</h4>
          <p className="text-xl">{safeMetrics.totalReferral}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow">
        <FaUserTie className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Creators</h4>
          <p className="text-xl">{safeMetrics.creator}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMetricsSummary;
