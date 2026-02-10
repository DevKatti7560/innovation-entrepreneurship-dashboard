import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Ideas from './pages/Ideas.jsx';
import Events from './pages/Events.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { useAuth, AuthProvider } from './auth/AuthContext.jsx';

const Nav = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav">
      <h1>Innovation & Entrepreneurship Activity Dashboard</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/ideas">Ideas</Link>
      <Link to="/events">Events</Link>
      <div style={{marginLeft:'auto'}}>
        {user ? (
          <>
            <span style={{marginRight:12}}>Hi, {user.name} ({user.role})</span>
            <button className="btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <span style={{margin:'0 8px'}}>|</span>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />
}

export default function App() {
  return (
    <AuthProvider>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/ideas" element={<PrivateRoute><Ideas /></PrivateRoute>} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}
