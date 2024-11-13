// pages/api/dashboard.js

export default async function handler(req, res) {
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/dashboard`);
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch data');
      }
  
      res.status(200).json(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
  