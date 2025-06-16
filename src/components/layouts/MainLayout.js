import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Client/Navbar';
import Footer from '../Client/Footer';

const MainLayout = () => {
  return (
    <div className="App" style={{ minHeight: '100vh', width: '100%' }}>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout; 