import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import '../../styles/global.css'

const UserTable = ({ users }) => {
  if (!users || users.length === 0) {
    return <div>No user data available.</div>;
  }

  return (
    <div className="overflow-x-auto w-full"> {/* Ensure horizontal scrolling is enabled */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-2 py-1 md:px-4 md:py-2">User ID</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Name</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Email</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Activity</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Referrals</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Role</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="border px-2 py-1 md:px-4 md:py-2">{user.id}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{user.name}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{user.email}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{user.activity}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{user.referrals}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">{user.role}</td>
              <td className="border px-2 py-1 md:px-4 md:py-2">
                <button className="text-blue-500 hover:text-blue-700 mx-1 md:mx-2">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700 mx-1 md:mx-2">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
