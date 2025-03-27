import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  if (!token) {
    // Redirect to login if no token is present
    return <Navigate to="/login" replace />;
  }

  if (userRole !== role) {
    // Redirect to login if user's role doesn't match the required role
    return <Navigate to="/login" replace />;
  }

  // Render children if authentication and role check pass
  return <>{children}</>;
};

export default ProtectedRoute; 