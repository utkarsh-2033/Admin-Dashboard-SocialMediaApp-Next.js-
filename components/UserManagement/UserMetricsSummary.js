import { FaUsers, FaUserCheck, FaUserFriends, FaUserTie } from "react-icons/fa";

const UserMetricsSummary = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex items-center p-4 bg-blue-100 text-blue-800 rounded-lg shadow">
        <FaUsers className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Users</h4>
          <p className="text-xl">{metrics.totalUser}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg shadow">
        <FaUserCheck className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Active Users</h4>
          <p className="text-xl">{metrics.activeUser}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-purple-100 text-purple-800 rounded-lg shadow">
        <FaUserFriends className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Total Referrals</h4>
          <p className="text-xl">{metrics.totalReferral}</p>
        </div>
      </div>
      <div className="flex items-center p-4 bg-yellow-100 text-yellow-800 rounded-lg shadow">
        <FaUserTie className="text-2xl mr-4" />
        <div>
          <h4 className="text-lg font-bold">Creators</h4>
          <p className="text-xl">{metrics.creator}</p>
        </div>
      </div>
    </div>
  );
};

export default UserMetricsSummary;
