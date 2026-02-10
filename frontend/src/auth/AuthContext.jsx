import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import api from '../lib/api.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setUser(jwtDecode(token));
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await api.post('/auth/login', { email, password });
    setToken(res.data.token);
  }

  const register = async (payload) => {
    const res = await api.post('/auth/register', payload);
    setToken(res.data.token);
  }

  const logout = () => setToken(null);

  return <AuthContext.Provider value={{ token, user, login, register, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
