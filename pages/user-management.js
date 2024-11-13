import { useState } from "react";
import Layout from "../components/Layout/Layout";
import UserMetricsSummary from "../components/UserManagement/UserMetricsSummary";
import UserTable from "../components/UserManagement/UserTable";

const UserManagementPage = ({ userMetrics }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = userMetrics.allTimeUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h2 className="text-3xl text-blue-500 font-bold mb-6">
          User Management
        </h2>

        {/* User Metrics Summary */}
        <UserMetricsSummary metrics={userMetrics.allTime} />

        {/* Search Bar */}
        <div className="mb-4">
          {" "}
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-blue-700"
          />
        </div>

        {/* User Table */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">User Details</h3>
          <UserTable users={filteredUsers} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  let userMetrics = {};

  // Dummy user data
  const dummyUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      activity: "Active",
      referrals: 5,
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      activity: "Inactive",
      referrals: 2,
      role: "Creator",
    },
    {
      id: 3,
      name: "Sam Green",
      email: "sam@example.com",
      activity: "Active",
      referrals: 8,
      role: "User",
    },
    {
      id: 4,
      name: "Anna Blue",
      email: "anna@example.com",
      activity: "Active",
      referrals: 12,
      role: "Creator",
    },
    {
      id: 5,
      name: "Mike Brown",
      email: "mike@example.com",
      activity: "Inactive",
      referrals: 0,
      role: "User",
    },
    {
      id: 6,
      name: "Chris Red",
      email: "chris@example.com",
      activity: "Active",
      referrals: 4,
      role: "User",
    },
    {
      id: 7,
      name: "Olivia White",
      email: "olivia@example.com",
      activity: "Inactive",
      referrals: 3,
      role: "User",
    },
    {
      id: 8,
      name: "Liam Black",
      email: "liam@example.com",
      activity: "Active",
      referrals: 7,
      role: "Creator",
    },
    {
      id: 9,
      name: "Emma Brown",
      email: "emma@example.com",
      activity: "Inactive",
      referrals: 1,
      role: "User",
    },
    {
      id: 10,
      name: "Noah Blue",
      email: "noah@example.com",
      activity: "Active",
      referrals: 6,
      role: "Admin",
    },
  ];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data = await res.json();
    userMetrics = data.dashboard.userMetrics || {};
    userMetrics.allTimeUsers = dummyUsers; 
  } catch (error) {
    console.error("Error fetching user metrics:", error);
    userMetrics.allTimeUsers = dummyUsers; 
  }

  return {
    props: {
      userMetrics,
    },
    revalidate: 3600,
  };
}

export default UserManagementPage;
