import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from './api'; // ✅ استدعاء instance الجاهز

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get('/api/me'); // ✅ رابط نسبي فقط
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  if (loading) {
    return <p>⏳ جاري التحقق من الجلسة...</p>;
  }

  return authenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
