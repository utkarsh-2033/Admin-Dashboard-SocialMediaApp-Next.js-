import { FaBell, FaUserCircle, FaBars } from 'react-icons/fa';

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <FaBars className="text-2xl cursor-pointer md:hidden" onClick={toggleSidebar} />
        <h1 className="text-2xl font-bold">SocialVerse</h1>
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-xl hover:text-yellow-300 cursor-pointer" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
        </div>
        <div className="hidden md:inline">Welcome, Admin</div>
        <FaUserCircle className="text-2xl hover:text-gray-300 cursor-pointer" />
        <button className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg transition duration-300">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;
