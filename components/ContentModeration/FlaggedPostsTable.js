import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const FlaggedPostsTable = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <div>No flagged posts available.</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">Post ID</th>
            <th className="px-4 py-2">User</th>
            <th className="px-4 py-2">Content</th>
            <th className="px-4 py-2">Reason</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="text-center">
              <td className="border px-4 py-2">{post.id}</td>
              <td className="border px-4 py-2">{post.user}</td>
              <td className="border px-4 py-2">{post.content}</td>
              <td className="border px-4 py-2">{post.reason}</td>
              <td className="border px-4 py-2">{post.date}</td>
              <td className="border px-4 py-2">
                <button className="text-blue-500 hover:text-blue-700 mx-2">
                  <FaEdit />
                </button>
                <button className="text-red-500 hover:text-red-700 mx-2">
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

export default FlaggedPostsTable;
