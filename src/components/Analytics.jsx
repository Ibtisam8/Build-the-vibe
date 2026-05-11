import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  Cell
} from 'recharts';
import './Analytics.css';

const data = [
  { name: 'Mon', visitors: 4000, tickets: 2400 },
  { name: 'Tue', visitors: 3000, tickets: 1398 },
  { name: 'Wed', visitors: 2000, tickets: 9800 },
  { name: 'Thu', visitors: 2780, tickets: 3908 },
  { name: 'Fri', visitors: 1890, tickets: 4800 },
  { name: 'Sat', visitors: 2390, tickets: 3800 },
  { name: 'Sun', visitors: 3490, tickets: 4300 },
];

const zoneData = [
  { name: 'Waterfront', value: 400, color: '#1f6593' },
  { name: 'City Walk', value: 300, color: '#5eb090' },
  { name: 'Old Town', value: 300, color: '#9ece47' },
  { name: 'Corniche', value: 200, color: '#eab2bb' },
];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <div className="analytics-card">
        <h3>Visitor Traffic & Ticket Sales</h3>
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="visitors" fill="#1f6593" radius={[4, 4, 0, 0]} />
              <Bar dataKey="tickets" fill="#5eb090" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card mini">
          <h3>Popular Zones</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={zoneData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {zoneData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="analytics-card mini">
          <h3>Revenue Growth</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="tickets" 
                  stroke="#eab2bb" 
                  strokeWidth={3} 
                  dot={{ r: 4 }} 
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
