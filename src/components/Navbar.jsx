import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Jeddah Season</h1>
      </div>
      <div className="navbar-search">
        <Search size={20} />
        <input type="text" placeholder="Search events..." />
      </div>
      <div className="navbar-actions">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </button>
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <span>Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
