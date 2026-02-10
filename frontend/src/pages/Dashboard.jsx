import React, { useEffect, useState } from 'react';
import api from '../lib/api.js';

export default function Dashboard(){
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    api.get('/metrics').then(res => setMetrics(res.data));
  }, []);

  if (!metrics) return <div className="card">Loading metrics...</div>;

  const items = [
    ['Total Ideas', metrics.totalIdeas],
    ['In Review', metrics.inReview],
    ['Approved', metrics.approved],
    ['Incubating', metrics.incubating],
    ['Upcoming Events', metrics.eventsUpcoming],
    ['Total Funds (₹)', metrics.totalFunds]
  ];

  return (
    <>
      <div className="grid">
        {items.map(([label, value]) => (
          <div className="card" key={label}>
            <div style={{fontSize:12, opacity:.8}}>{label}</div>
            <div style={{fontSize:28, fontWeight:700}}>{value}</div>
          </div>
        ))}
      </div>
      <div className="card">
        <h3>Quick Tips</h3>
        <ul>
          <li>Use the Ideas page to submit new ideas and track status.</li>
          <li>Mentors and Admins can update status and add funds.</li>
          <li>Events are public; log in as mentor/admin to create or edit.</li>
        </ul>
      </div>
    </>
  );
}
