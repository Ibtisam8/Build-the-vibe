import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroBanner from '../components/HeroBanner';
import StatsCards from '../components/StatsCards';
import EventsSection from '../components/EventsSection';
import Analytics from '../components/Analytics';
import AIInsights from '../components/AIInsights';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <HeroBanner />
          <StatsCards />
          <div className="dashboard-grid">
            <div className="left-col">
              <EventsSection />
              <Analytics />
            </div>
            <div className="right-col">
              <AIInsights />
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
