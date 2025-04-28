import { FaTachometerAlt, FaUserPlus, FaUsers, FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span>CB</span>
        <h2>CallBridge</h2>
      </div>
      <nav className="nav-links">
        <Link href="#" className="nav-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link href="#" className="nav-item">
          <FaUserPlus />
          <span>Create Salesperson</span>
        </Link>
        <Link href="#" className="nav-item">
          <FaUsers />
          <span>View Salespersons</span>
        </Link>
        <Link href="#" className="nav-item">
          <FaClipboardList />
          <span>Buyer Applications</span>
        </Link>
        <Link href="#" className="nav-item">
          <FaCog />
          <span>Settings</span>
        </Link>
        <Link href="#" className="nav-item logout">
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </nav>
      <div className="version">CallBridge Admin v1.0.0</div>
    </div>
  );
};

export default Sidebar;
