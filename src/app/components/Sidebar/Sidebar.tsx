'use client';

import { FaTachometerAlt, FaUserPlus, FaUsers, FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";  // Import useState
import "./Sidebar.css";

const Sidebar = () => {
  // Track active link state
  const [activeLink, setActiveLink] = useState('dashboard'); // Default active link

  // Handle active link change
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <span>CB</span>
        <h2>CallBridge</h2>
      </div>
      <nav className="nav-links">
        <Link 
          href="/dashboard" 
          className={`nav-item ${activeLink === 'dashboard' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('dashboard')}
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </Link>
        <Link 
          href="/create-salesperson" 
          className={`nav-item ${activeLink === 'create-salesperson' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('create-salesperson')}
        >
          <FaUserPlus />
          <span>Create Salesperson</span>
        </Link>
        <Link 
          href="/view-salespersons" 
          className={`nav-item ${activeLink === 'view-salespersons' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('view-salespersons')}
        >
          <FaUsers />
          <span>View Salespersons</span>
        </Link>
        <Link 
          href="/buyer-applications" 
          className={`nav-item ${activeLink === 'buyer-applications' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('buyer-applications')}
        >
          <FaClipboardList />
          <span>Buyer Applications</span>
        </Link>
        <Link 
          href="/settings" 
          className={`nav-item ${activeLink === 'settings' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('settings')}
        >
          <FaCog />
          <span>Settings</span>
        </Link>
        <Link 
          href="/logout" 
          className={`nav-item logout ${activeLink === 'logout' ? 'active' : ''}`} 
          onClick={() => handleLinkClick('logout')}
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </Link>
      </nav>
      <div className="version">CallBridge Admin v1.0.0</div>
    </div>
  );
};

export default Sidebar;
