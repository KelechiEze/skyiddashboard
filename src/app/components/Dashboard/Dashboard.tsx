import { FaUser, FaUserCheck, FaUserTimes, FaFileAlt } from "react-icons/fa";
import "./Dashboard.css";

const activities = [
  {
    title: "New Salesperson Added",
    description: "Sarah Johnson added today at 10:23 AM",
    color: "green",
  },
  {
    title: "Buyer Request Created",
    description: "John Doe requested a call at 11:45 AM",
    color: "green",
  },
  {
    title: "Salesperson Deactivated",
    description: "Emily Smith marked inactive at 1:30 PM",
    color: "green",
  },
  {
    title: "New Buyer Inquiry",
    description: "David Brown submitted a request at 2:15 PM",
    color: "green",
  },
  {
    title: "Salesperson Reactivated",
    description: "Michael Lee reactivated at 3:00 PM",
    color: "green",
  },
  {
    title: "Profile Updated",
    description: "Laura Wilson updated profile at 4:20 PM",
    color: "green",
  },
];

const Dashboard = () => {
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
            <div className="circle">
              <span>75%</span>
            </div>
          </div>
          <div className="status-numbers">
            <p>18 Active</p>
            <p>6 Inactive</p>
            <p>24 Total</p>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {activities.map((activity, index) => (
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

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const Card = ({ title, value, icon }: CardProps) => (
  <div className="card">
    <div className="card-content">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
    <div className="card-icon">{icon}</div>
  </div>
);

interface ActivityItemProps {
  title: string;
  description: string;
  color: string;
}

const ActivityItem = ({ title, description, color }: ActivityItemProps) => (
  <div className="activity">
    <div className={`dot ${color}`}></div>
    <div className="activity-info">
      <p className="activity-title"><strong>{title}</strong></p>
      <p className="activity-description">{description}</p>
    </div>
    <button className="create-btn">Create</button>
  </div>
);

export default Dashboard;
