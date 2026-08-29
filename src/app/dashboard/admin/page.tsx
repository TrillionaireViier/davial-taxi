'use client';
import { useState } from 'react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0a', color: '#fff' }}>
      
      {/* Sidebar Navigation */}
      <aside style={{ width: '250px', background: '#111', padding: '2rem', borderRight: '1px solid #333' }}>
        <h2 style={{ color: 'var(--accent-gold)', marginBottom: '2rem', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Admin Center</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Overview', 'Dispatch', 'Bookings', 'Drivers', 'Users', 'Financials'].map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none', border: 'none', color: activeTab === tab ? 'var(--accent-gold)' : '#888',
                textAlign: 'left', fontSize: '1.1rem', cursor: 'pointer', padding: '0.5rem 0'
              }}
            >
              {tab}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '3rem', overflowY: 'auto' }}>
        <header style={{ marginBottom: '3rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>{activeTab} Dashboard</h1>
          <p style={{ color: '#888' }}>Davial Taxi Advanced Management System</p>
        </header>

        {/* OVERVIEW / ANALYTICS (Features 1-5) */}
        {activeTab === 'Overview' && (
          <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { label: 'Total Revenue (Today)', value: '$12,450' }, // Feature 1
                { label: 'Active Drivers', value: '143' },          // Feature 2
                { label: 'Pending Bookings', value: '28' },         // Feature 3
                { label: 'Completion Rate', value: '98.5%' },       // Feature 4
                { label: 'Avg Satisfaction', value: '4.9/5' }       // Feature 5
              ].map((metric, i) => (
                <div key={i} style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                  <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{metric.label}</p>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>{metric.value}</h3>
                </div>
              ))}
            </div>
            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
              <h3 style={{ marginBottom: '1rem' }}>System Status</h3>
              <p>All core systems operational. Live dispatch servers running at optimal latency.</p>
            </div>
          </section>
        )}

        {/* DISPATCH (Features 6-10) */}
        {activeTab === 'Dispatch' && (
          <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333', height: '500px' }}>
              <h3 style={{ marginBottom: '1rem' }}>Live Fleet Map (Mock)</h3> {/* Feature 6 */}
              <div style={{ width: '100%', height: '80%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#888' }}>Map visualization placeholder</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ background: 'rgba(255,0,0,0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid red' }}>
                <h3 style={{ color: 'red', marginBottom: '1rem' }}>SOS Alerts Panel</h3> {/* Feature 7 */}
                <p style={{ color: '#ffaaaa', fontSize: '0.9rem' }}>No active emergency alerts.</p>
              </div>
              <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Traffic/Weather Integrations</h3> {/* Feature 8 */}
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Status: Clear weather. Light traffic reported in Downtown.</p>
              </div>
              <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Manual Assignment Override</h3> {/* Feature 9 */}
                <select style={{ width: '100%', padding: '0.8rem', background: '#000', color: '#fff', border: '1px solid #444', marginBottom: '1rem' }}>
                  <option>Select Ride ID</option>
                  <option>Ride #10492</option>
                </select>
                <select style={{ width: '100%', padding: '0.8rem', background: '#000', color: '#fff', border: '1px solid #444', marginBottom: '1rem' }}>
                  <option>Select Driver</option>
                  <option>John Doe (ID: 482)</option>
                </select>
                <button className="btn btn-primary" style={{ width: '100%' }}>Force Dispatch</button>
              </div>
              <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Active Ride Status Tracker</h3> {/* Feature 10 */}
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #333' }}>Ride #10492: En Route (ETA 4 min)</li>
                  <li style={{ padding: '0.5rem 0' }}>Ride #10493: Arrived at Pickup</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* BOOKINGS (Features 11-15) */}
        {activeTab === 'Bookings' && (
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div>
                <input type="text" placeholder="Search Booking ID..." style={{ padding: '0.8rem', width: '300px', background: '#1a1a1a', color: '#fff', border: '1px solid #333' }} />
              </div>
              <button className="btn btn-outline">Export to CSV</button> {/* Feature 15 */}
            </div>
            
            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
              <h3 style={{ marginBottom: '1rem' }}>Advanced Booking Table</h3> {/* Feature 11 */}
              <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #444' }}>
                    <th style={{ padding: '1rem 0', color: '#888' }}>ID</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>User</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Route</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Status</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '1rem 0' }}>#10492</td>
                    <td>alice@example.com</td>
                    <td>JFK -> Midtown</td>
                    <td><span style={{ color: '#00ff00' }}>Active</span></td>
                    <td><button style={{ background: 'transparent', color: 'var(--accent-gold)', border: 'none', cursor: 'pointer' }}>View Details</button></td> {/* Feature 13 */}
                  </tr>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '1rem 0' }}>#10491</td>
                    <td>bob@example.com</td>
                    <td>Downtown -> EWR</td>
                    <td><span style={{ color: 'red' }}>Cancelled</span></td>
                    <td><button style={{ background: 'transparent', color: 'red', border: 'none', cursor: 'pointer' }}>Process Refund</button></td> {/* Feature 12 */}
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333', marginTop: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Scheduled Rides Calendar View (Mock)</h3> {/* Feature 14 */}
              <p style={{ color: '#888' }}>Calendar component would render here showing future bookings.</p>
            </div>
          </section>
        )}

        {/* DRIVERS (Features 16-20) */}
        {activeTab === 'Drivers' && (
          <section>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Driver Application Queue</h3> {/* Feature 16 */}
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 0', borderBottom: '1px solid #333' }}>
                    <span>Michael T. - S-Class</span>
                    <div>
                      <button style={{ background: 'green', color: '#fff', border: 'none', padding: '0.3rem 0.6rem', marginRight: '0.5rem', borderRadius: '4px' }}>Approve</button>
                      <button style={{ background: 'red', color: '#fff', border: 'none', padding: '0.3rem 0.6rem', borderRadius: '4px' }}>Reject</button>
                    </div>
                  </li>
                </ul>
              </div>

              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Performance Leaderboard</h3> {/* Feature 17 */}
                <ol style={{ paddingLeft: '1.5rem', color: '#ccc' }}>
                  <li style={{ padding: '0.5rem 0' }}>John D. (Rating: 5.0) - 1,204 rides</li>
                  <li style={{ padding: '0.5rem 0' }}>Sarah W. (Rating: 4.98) - 950 rides</li>
                </ol>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Vehicle Inspections</h3> {/* Feature 18 */}
                <p style={{ color: 'orange' }}>3 vehicles require annual inspection renewal.</p>
              </div>
              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Driver Payouts</h3> {/* Feature 19 */}
                <button className="btn btn-outline">Process Weekly Payouts</button>
              </div>
              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Document Vault</h3> {/* Feature 20 */}
                <button className="btn btn-outline">View Uploaded Licenses</button>
              </div>
            </div>
          </section>
        )}

        {/* USERS (Features 21-25) */}
        {activeTab === 'Users' && (
          <section>
            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333', marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>User Database</h3> {/* Feature 21 */}
              <input type="text" placeholder="Search Users..." style={{ padding: '0.8rem', width: '100%', background: '#000', color: '#fff', border: '1px solid #333', marginBottom: '1.5rem' }} />
              
              <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #444' }}>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Email</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Total Rides</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Status</th>
                    <th style={{ padding: '1rem 0', color: '#888' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '1rem 0' }}>ceo@techcorp.com</td>
                    <td>150</td>
                    <td><span style={{ color: 'var(--accent-gold)' }}>VIP</span></td>
                    <td>
                      <button style={{ background: 'transparent', color: '#888', border: 'none', cursor: 'pointer', marginRight: '1rem' }}>View History</button> {/* Feature 23 */}
                      <button style={{ background: 'transparent', color: 'var(--accent-gold)', border: 'none', cursor: 'pointer' }}>Toggle VIP</button> {/* Feature 22 */}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #333' }}>
                    <td style={{ padding: '1rem 0' }}>spammer@bad.com</td>
                    <td>0</td>
                    <td><span style={{ color: 'red' }}>Banned</span></td>
                    <td>
                      <button style={{ background: 'transparent', color: 'red', border: 'none', cursor: 'pointer' }}>Ban/Suspend</button> {/* Feature 24 */}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
              <h3 style={{ marginBottom: '1rem' }}>Support Tickets Inbox</h3> {/* Feature 25 */}
              <p style={{ color: '#888' }}>You have 2 unresolved customer support tickets.</p>
              <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Open Inbox</button>
            </div>
          </section>
        )}

        {/* FINANCIALS & SETTINGS (Features 26-30) */}
        {activeTab === 'Financials' && (
          <section>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333', height: '300px' }}>
                <h3 style={{ marginBottom: '1rem' }}>Revenue Analytics Chart (Mock)</h3> {/* Feature 26 */}
                <div style={{ width: '100%', height: '70%', display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
                  <div style={{ flex: 1, background: 'var(--accent-gold)', height: '40%' }}></div>
                  <div style={{ flex: 1, background: 'var(--accent-gold)', height: '60%' }}></div>
                  <div style={{ flex: 1, background: 'var(--accent-gold)', height: '50%' }}></div>
                  <div style={{ flex: 1, background: 'var(--accent-gold)', height: '90%' }}></div>
                  <div style={{ flex: 1, background: 'var(--accent-gold)', height: '80%' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                  <h3 style={{ marginBottom: '1rem' }}>Surge Pricing Controls</h3> {/* Feature 27 */}
                  <label style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ transform: 'scale(1.5)' }} /> Enable Global 1.5x Surge
                  </label>
                </div>
                <div style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
                  <h3 style={{ marginBottom: '1rem' }}>Commission Rate</h3> {/* Feature 29 */}
                  <input type="range" min="10" max="30" defaultValue="20" style={{ width: '100%' }} />
                  <p style={{ textAlign: 'center', marginTop: '0.5rem', color: 'var(--accent-gold)' }}>Current: 20%</p>
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div style={{ background: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #333' }}>
                <h3 style={{ marginBottom: '1rem' }}>Promo Code Generator</h3> {/* Feature 28 */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="Enter Code (e.g. VIP20)" style={{ flex: 1, padding: '0.8rem', background: '#000', color: '#fff', border: '1px solid #333' }} />
                  <button className="btn btn-primary">Create</button>
                </div>
              </div>
              
              <div style={{ background: '#000', padding: '2rem', borderRadius: '8px', border: '1px solid #333', fontFamily: 'monospace' }}>
                <h3 style={{ marginBottom: '1rem', color: '#0f0' }}>System Audit Logs</h3> {/* Feature 30 */}
                <div style={{ color: '#0f0', fontSize: '0.9rem', opacity: 0.8 }}>
                  <p>[10:42:01] Admin logged in.</p>
                  <p>[10:45:33] Promo code WELCOME created.</p>
                  <p>[10:48:11] Ride #10492 assigned manually.</p>
                  <p>[10:50:00] Payment batch processed successfully.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
