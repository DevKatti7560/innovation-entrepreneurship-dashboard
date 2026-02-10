import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext.jsx';

export default function Login(){
  const [email, setEmail] = useState('student@dashboard.test');
  const [password, setPassword] = useState('student123');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="card" style={{maxWidth:420, margin:'40px auto'}}>
      <h3>Login</h3>
      {error && <div style={{color:'crimson'}}>{error}</div>}
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input className="input" value={email} onChange={e=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <div style={{marginTop:10}}><button className="btn">Login</button></div>
      </form>
      <div style={{marginTop:10, fontSize:12, opacity:.8}}>
        Demo accounts: student@dashboard.test / student123, mentor@dashboard.test / mentor123, admin@dashboard.test / admin123
      </div>
    </div>
  );
}
