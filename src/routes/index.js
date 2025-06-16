import Home from '../components/Client/Home';
import About from '../components/Client/About';
import WhoWeServe from '../components/Client/WhoWeServe';
import Resources from '../components/Client/Resources';
import Events from '../components/Client/Events';
import OurTeam from '../components/Client/OurTeam';
import Blog from '../components/Client/Blog';
import Contact from '../components/Client/Contact';
import CoursesPage from '../components/Client/CoursesPage';
import Donate from '../components/Client/DonatePage';
import Gallery from '../components/Client/Gallery';
import AdminLogin from '../components/Admin/AdminLogin';
import AdminPage from '../components/Admin/AdminPage';
import SignUp from '../components/Client/LandingPage/auth/SignUp';
import SignIn from '../components/Client/LandingPage/auth/SignIn';
import ForgotPassword from '../components/Client/LandingPage/auth/ForgotPassword';

// Public routes that don't require authentication
export const publicRoutes = [
  {
    path: '/',
    element: Home
  },
  {
    path: '/about',
    element: About
  },
  {
    path: '/who-we-serve',
    element: WhoWeServe
  },
  {
    path: '/events',
    element: Events
  },
  {
    path: '/community',
    element: Resources
  },
  {
    path: '/gallery',
    element: Gallery
  },
  {
    path: '/courses',
    element: CoursesPage
  },
  {
    path: '/team',
    element: OurTeam
  },
  {
    path: '/blog',
    element: Blog
  },
  {
    path: '/donate',
    element: Donate
  },
  {
    path: '/contact',
    element: Contact
  }
];

// Auth routes (sign in, sign up, forgot password)
export const authRoutes = [
  {
    path: '/signUp',
    element: SignUp
  },
  {
    path: '/signIn',
    element: SignIn
  },
  {
    path: '/forgot-password',
    element: ForgotPassword
  }
];

// Admin routes
export const adminRoutes = [
  {
    path: '/admin_only_login',
    element: AdminLogin
  },
  {
    path: '/admin_only_dashboard',
    element: AdminPage
  }
]; 