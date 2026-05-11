import React from 'react';
import { Calendar, Users, Ticket, Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import './StatsCards.css';

const StatsCards = () => {
  const stats = [
    { 
      label: 'Total Events', 
      value: '24', 
      growth: '+12%', 
      isUp: true, 
      icon: <Calendar className="stat-icon events" /> 
    },
    { 
      label: 'Total Visitors', 
      value: '142.5k', 
      growth: '+18%', 
      isUp: true, 
      icon: <Users className="stat-icon visitors" /> 
    },
    { 
      label: 'Tickets Sold', 
      value: '85,400', 
      growth: '+24%', 
      isUp: true, 
      icon: <Ticket className="stat-icon tickets" /> 
    },
    { 
      label: 'Revenue', 
      value: '$2.4M', 
      growth: '-4%', 
      isUp: false, 
      icon: <Wallet className="stat-icon revenue" /> 
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-header">
            {stat.icon}
            <div className={`growth-tag ${stat.isUp ? 'up' : 'down'}`}>
              {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {stat.growth}
            </div>
          </div>
          <div className="stat-body">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
