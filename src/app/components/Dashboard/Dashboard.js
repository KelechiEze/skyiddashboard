'use client';

import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'; // Import components from Recharts
import { FaUser, FaUserCheck, FaUserTimes, FaFileAlt } from 'react-icons/fa';
import "./Dashboard.css";

// Example of dynamic activities
const activities = [
  { title: "New Salesperson Added", description: "Sarah Johnson added today at 10:23 AM", color: "green" },
  { title: "Salesperson Activated", description: "John Doe activated today at 11:30 AM", color: "blue" },
  { title: "Buyer Request", description: "A new buyer request received at 2:45 PM", color: "red" },
  { title: "Salesperson Inactive", description: "Mark Brown went inactive at 3:00 PM", color: "orange" },
  { title: "Buyer Request Updated", description: "Buyer request from Jane Doe updated at 4:30 PM", color: "purple" },
  // More activities can be added here...
];

const Dashboard = () => {
  // Pie Chart Data (you can change this based on actual data)
  const pieData = [
    { name: 'Active', value: 75, color: '#4CAF50' },
    { name: 'Inactive', value: 20, color: '#FF9800' },
    { name: 'Pending', value: 5, color: '#F44336' },
  ];

  // Manage the number of activities to display
  const [visibleActivities, setVisibleActivities] = useState(3);
  const [viewMoreClicked, setViewMoreClicked] = useState(false);

  // Function to show more activities when the button is clicked
  const handleViewMore = () => {
    setVisibleActivities(visibleActivities + 3); // Increase the number of activities shown by 3
    setViewMoreClicked(true); // Set the flag that "View More" has been clicked
  };

  // Function to show less activities when the button is clicked
  const handleViewLess = () => {
    setVisibleActivities(3); // Reset to show only the first 3 activities
    setViewMoreClicked(false); // Reset the flag that "View More" was clicked
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to the Callbridge Sales Hub</p>
      </header>

      {/* Cards Section */}
      <section className="cards">
        <Card title="Total Salespersons" value="0" icon={<FaUser />} />
        <Card title="Active Salespersons" value="0" icon={<FaUserCheck />} />
        <Card title="Inactive Salespersons" value="0" icon={<FaUserTimes />} />
        <Card title="Buyer Requests" value="0" icon={<FaFileAlt />} />
      </section>

      {/* Lower Section */}
      <section className="lower-section">
        {/* Pie Chart Section */}
        <div className="pie-chart-container">
          <h2>Salesperson Status</h2>
          <div className="pie-chart">
            {/* Render the Pie Chart */}
            <PieChart width={300} height={300}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%" 
                cy="50%" 
                outerRadius={80}
                innerRadius={40}
                paddingAngle={5}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
          <div className="status-numbers">
            <p>Active: {pieData[0].value}</p>
            <p>Inactive: {pieData[1].value}</p>
            <p>Total: {pieData.reduce((acc, data) => acc + data.value, 0)}</p>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="recent-activity">
          <div className="activity-header">
            <h2>Recent Activity</h2>
            {/* View More / View Less Button */}
            <button
              onClick={viewMoreClicked ? handleViewLess : handleViewMore}
              className="view-toggle-btn"
            >
              {viewMoreClicked ? 'View Less' : 'View More'}
            </button>
          </div>

          <div className="activity-list">
            {activities.slice(0, visibleActivities).map((activity, index) => (
              <ActivityItem
                key={index}
                title={activity.title}
                description={activity.description}
                color={activity.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Card component
const Card = ({ title, value, icon }) => (
  <div className="card">
    <div className="card-content">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
    <div className="card-icon">{icon}</div>
  </div>
);

// ActivityItem component
const ActivityItem = ({ title, description, color }) => (
  <div className="activity">
    <div className={`dot ${color}`}></div>
    <div className="activity-info">
      <p className="activity-title"><strong>{title}</strong></p>
      <p className="activity-description">{description}</p>
    </div>
    <button className="create-btn">View</button>
  </div>
);

export default Dashboard;
