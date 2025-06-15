import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="auth-layout" style={{ minHeight: '100vh', width: '100%' }}>
      <Outlet />
    </div>
  );
};

export default AuthLayout; 