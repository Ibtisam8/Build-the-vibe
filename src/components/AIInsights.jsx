import React from 'react';
import { Lightbulb, TrendingUp, AlertCircle } from 'lucide-react';
import './AIInsights.css';

const AIInsights = () => {
  const insights = [
    {
      icon: <TrendingUp className="insight-icon trend" />,
      title: 'Most Popular Event',
      desc: 'City Walk Concert has 45% more interest than other events this week.',
      color: '#1f6593'
    },
    {
      icon: <Lightbulb className="insight-icon suggestion" />,
      title: 'Expected Traffic',
      desc: 'Visitor peak expected on Friday evening between 7 PM and 10 PM.',
      color: '#5eb090'
    },
    {
      icon: <AlertCircle className="insight-icon action" />,
      title: 'Recommended Action',
      desc: 'Consider increasing shuttle frequency to Obhur Beach for the weekend.',
      color: '#eab2bb'
    }
  ];

  return (
    <aside className="ai-insights">
      <div className="insights-header">
        <div className="sparkle-title">
          <TrendingUp size={18} />
          <h2>AI Insights</h2>
        </div>
        <span className="live-tag">LIVE</span>
      </div>
      <div className="insights-list">
        {insights.map((insight, index) => (
          <div key={index} className="insight-item">
            <div className="insight-top">
              {insight.icon}
              <h4>{insight.title}</h4>
            </div>
            <p>{insight.desc}</p>
          </div>
        ))}
      </div>
      <div className="insights-footer">
        <button className="full-report-btn">View Detailed Insights</button>
      </div>
    </aside>
  );
};

export default AIInsights;
