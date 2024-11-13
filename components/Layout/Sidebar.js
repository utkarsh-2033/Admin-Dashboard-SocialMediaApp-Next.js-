import Link from 'next/link';
import { useState } from 'react';
import { FaTachometerAlt, FaUsers, FaClipboardList, FaChartBar } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [active, setActive] = useState('');

  const handleSetActive = (item) => {
    setActive(item);
    if (toggleSidebar) {
      toggleSidebar();
    }
  };

  return (
    <aside className={`fixed top-0 left-0 h-full bg-gray-900 text-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 md:w-64 w-full`}>
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/" className={`flex items-center p-3 rounded ${active === 'dashboard' ? 'bg-green-500' : 'hover:bg-gray-700'}`} onClick={() => handleSetActive('dashboard')}>
              <FaTachometerAlt className="w-6 h-6 mr-3 text-purple-500" />
              Dashboard Overview
            </Link>
          </li>
          <li>
            <Link href="/user-management" className={`flex items-center p-3 rounded ${active === 'user-management' ? 'bg-green-500' : 'hover:bg-gray-700'}`} onClick={() => handleSetActive('user-management')}>
              <FaUsers className="w-6 h-6 mr-3 text-blue-400" />
              User Management
            </Link>
          </li>
          <li>
            <Link href="/content-moderation" className={`flex items-center p-3 rounded ${active === 'content-moderation' ? 'bg-green-500' : 'hover:bg-gray-700'}`} onClick={() => handleSetActive('content-moderation')}>
              <FaClipboardList className="w-6 h-6 mr-3 text-yellow-400" />
              Content Moderation
            </Link>
          </li>
          <li>
            <Link href="/analytics" className={`flex items-center p-3 rounded ${active === 'analytics' ? 'bg-green-500' : 'hover:bg-gray-700'}`} onClick={() => handleSetActive('analytics')}>
              <FaChartBar className="w-6 h-6 mr-3 text-pink-500" />
              Analytics
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
