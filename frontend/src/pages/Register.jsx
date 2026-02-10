import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

export default function Register(){
  const [form, setForm] = useState({ name:'', email:'', password:'', role:'student' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { register } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(form);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="card" style={{maxWidth:460, margin:'40px auto'}}>
      <h3>Create Account</h3>
      {error && <div style={{color:'crimson'}}>{error}</div>}
      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input className="input" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        <label>Email</label>
        <input className="input" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
        <label>Password</label>
        <input className="input" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} required />
        <label>Role</label>
        <select className="select" value={form.role} onChange={e=>setForm({...form, role:e.target.value})}>
          <option value="student">student</option>
          <option value="mentor">mentor</option>
        </select>
        <div style={{marginTop:10}}><button className="btn">Register</button></div>
      </form>
    </div>
  );
}
