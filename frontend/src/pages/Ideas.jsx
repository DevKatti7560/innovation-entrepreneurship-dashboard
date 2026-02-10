import React, { useEffect, useState } from 'react';
import api from '../lib/api.js';
import { useAuth } from '../auth/AuthContext.jsx';

export default function Ideas(){
  const [list, setList] = useState([]);
  const [form, setForm] = useState({ title:'', summary:'', tags:'' });
  const { user } = useAuth();

  const load = () => api.get('/ideas').then(res => setList(res.data));
  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    const payload = { ...form, tags: form.tags.split(',').map(t => t.trim()).filter(Boolean) };
    await api.post('/ideas', payload);
    setForm({ title:'', summary:'', tags:'' });
    load();
  };

  const updateStatus = async (id, status) => {
    await api.put(`/ideas/${id}`, { status });
    load();
  };

  return (
    <div className="grid" style={{gridTemplateColumns:'1fr 1.2fr'}}>
      <div className="card">
        <h3>Submit Idea</h3>
        <form onSubmit={submit}>
          <label>Title</label>
          <input className="input" value={form.title} onChange={e=>setForm({...form, title:e.target.value})} required />
          <label>Summary</label>
          <textarea className="textarea" rows="5" value={form.summary} onChange={e=>setForm({...form, summary:e.target.value})} required />
          <label>Tags (comma separated)</label>
          <input className="input" value={form.tags} onChange={e=>setForm({...form, tags:e.target.value})} />
          <div style={{marginTop:10}}><button className="btn">Create</button></div>
        </form>
      </div>
      <div className="card">
        <h3>Ideas</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th><th>Owner</th><th>Status</th><th>Funds</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(idea => (
              <tr key={idea._id}>
                <td>{idea.title}</td>
                <td>{idea.owner?.name || 'Me'}</td>
                <td>{idea.status}</td>
                <td>₹{idea.fundsRaised || 0}</td>
                <td className="toolbar">
                  {(user.role === 'mentor' || user.role === 'admin') && (
                    <>
                      <select className="select" defaultValue={idea.status} onChange={e => updateStatus(idea._id, e.target.value)}>
                        <option value="submitted">submitted</option>
                        <option value="in_review">in_review</option>
                        <option value="approved">approved</option>
                        <option value="rejected">rejected</option>
                        <option value="incubating">incubating</option>
                      </select>
                      <button className="btn" onClick={()=>updateStatus(idea._id, 'approved')}>Approve</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
