import React, { useEffect, useState } from 'react';
import api from '../lib/api.js';
import { useAuth } from '../auth/AuthContext.jsx';

export default function Events(){
  const [events, setEvents] = useState([]);
  const { user } = useAuth();
  const [form, setForm] = useState({ title:'', description:'', date:'', location:'' });

  const load = () => api.get('/events').then(res => setEvents(res.data));
  useEffect(() => { load(); }, []);

  const create = async (e) => {
    e.preventDefault();
    await api.post('/events', form);
    setForm({ title:'', description:'', date:'', location:'' });
    load();
  };

  const remove = async (id) => { await api.delete(`/events/${id}`); load(); };

  return (
    <div className="grid" style={{gridTemplateColumns:'1fr 1fr'}}>
      <div className="card">
        <h3>Upcoming Events</h3>
        {events.map(ev => (
          <div key={ev._id} className="card">
            <div style={{fontWeight:600}}>{ev.title}</div>
            <div>{new Date(ev.date).toLocaleString()}</div>
            <div>{ev.location}</div>
            <div>{ev.description}</div>
            {(user && user.role === 'admin') && <button className="btn" onClick={()=>remove(ev._id)}>Delete</button>}
          </div>
        ))}
      </div>
      {(user && (user.role === 'mentor' || user.role === 'admin')) && (
        <div className="card">
          <h3>Create Event</h3>
          <form onSubmit={create}>
            <label>Title</label>
            <input className="input" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required />
            <label>Description</label>
            <textarea className="textarea" rows="4" value={form.description} onChange={e=>setForm({...form, description:e.target.value})} />
            <label>Date & Time</label>
            <input className="input" type="datetime-local" value={form.date} onChange={e=>setForm({...form, date:e.target.value})} required />
            <label>Location</label>
            <input className="input" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} />
            <div style={{marginTop:10}}><button className="btn">Create</button></div>
          </form>
        </div>
      )}
    </div>
  );
}
