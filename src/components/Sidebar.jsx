import React from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Ticket, 
  Wallet, 
  Sparkles, 
  Settings 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Calendar size={20} />, label: 'Events' },
    { icon: <Users size={20} />, label: 'Visitors' },
    { icon: <Ticket size={20} />, label: 'Tickets' },
    { icon: <Wallet size={20} />, label: 'Revenue' },
    { icon: <Sparkles size={20} />, label: 'AI Insights' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
            <a href="#">
              {item.icon}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
