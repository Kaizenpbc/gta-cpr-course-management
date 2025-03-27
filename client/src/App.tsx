import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import InstructorPortal from './components/InstructorPortal';
import OrganizationPortal from './components/OrganizationPortal';
import CourseManagementPortal from './components/CourseManagementPortal';
import SysAdminPortal from './components/SysAdminPortal';
import AccountingPortal from './components/AccountingPortal';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/portal/instructor"
          element={
            <ProtectedRoute role="instructor">
              <InstructorPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/organization"
          element={
            <ProtectedRoute role="organization">
              <OrganizationPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/course-management"
          element={
            <ProtectedRoute role="course-management">
              <CourseManagementPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/sys-admin"
          element={
            <ProtectedRoute role="sys-admin">
              <SysAdminPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portal/accounting"
          element={
            <ProtectedRoute role="accounting">
              <AccountingPortal />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
