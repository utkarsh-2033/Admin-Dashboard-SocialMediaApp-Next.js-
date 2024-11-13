const DashboardCard = ({ title, value, icon }) => {
    return (
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
        <div className="p-3 bg-blue-500 text-white rounded-full">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-2xl">{value}</p>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  