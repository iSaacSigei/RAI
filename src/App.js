import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Client/Navbar';
import Home from './components/Client/Home';
import About from './components/Client/About';
import WhoWeServe from './components/Client/WhoWeServe';
import Resources from './components/Client/Resources';
import Events from './components/Client/Events';
import OurTeam from './components/Client/OurTeam';
import Blog from './components/Client/Blog';
import Contact from './components/Client/Contact';
import Footer from './components/Client/Footer';
import CoursesPage from './components/Client/CoursesPage';
import Donate from './components/Client/DonatePage';
import Gallery from './components/Client/Gallery';
import AdminLogin from './components/Admin/AdminLogin';
import AdminPage from './components/Admin/AdminPage';
import SignUp from './components/Client/LandingPage/auth/SignUp';
import SignIn from './components/Client/LandingPage/auth/SignIn';
import ForgotPassword from './components/Client/LandingPage/auth/ForgotPassword';
import ResetPassword from './components/Client/LandingPage/auth/ResetPassword';
import AuthLayout from './components/layouts/AuthLayout';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - No Navbar/Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/* Admin Routes - No Navbar/Footer */}
        <Route path='/admin_only_login' element={<AdminLogin />} />
        <Route path='/admin_only_dashboard' element={<AdminPage />} />

        {/* Main Routes - With Navbar/Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-we-serve" element={<WhoWeServe />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Resources />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
