import {
  Routes,
  Route,
  useNavigate,
  Link as ReactRouterLink,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

//auth services
import * as authService from './services/authService.js';
import * as profileService from './services/profileService.js';

//components
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes.jsx';

// page components
import HomeShopper from './views/shopper/home/Home.jsx';
import ReadyMadeSets from './views/shopper/ReadyMadeSets.jsx';
import Customizer from './views/shopper/lab/Customizer.jsx';
import FindATech from './views/shopper/findATech/FindATech.jsx';
import HomeNailTech from './views/tech/home/Home.jsx';
import Orders from './views/tech/orders/Orders.jsx';
import LoginModal from './views/shopper/authModals/LoginModal.jsx';
import SignupModal from './views/shopper/authModals/SignupModal.jsx';
import ChangePassword from './views/ChangePassword/ChangePassword.jsx';
import MyProfile from './views/MyProfile/MyProfile.jsx';
import { CartProvider } from './shoppingCart/CartContext.jsx';

export default function App() {
  // setting state
  const [user, setUser] = useState(authService.getUser());
  const [profile, setProfile] = useState([]);

  const navigate = useNavigate();

  // use effects
  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.getMyProfile();
      setProfile(profileData);
    };
    fetchProfile();
  }, []);

  // user login logout functions
  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate('/');
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  return (
    <CartProvider>
      <Routes>
        {/* Shopper Routes */}
        <Route path="/shopper/home" element={<HomeShopper />} />

        <Route path="/shopper/products" element={<ReadyMadeSets />} />
        <Route path="/shopper/customizer" element={<Customizer />} />
        <Route path="/shopper/nailtechs" element={<FindATech />} />

        {/* Nail Tech Routes */}
        <Route path="/nailtech/home" element={<HomeNailTech />} />
        <Route path="/nailtech/orders" element={<Orders />} />
        {/* <Route path="/nailtech/addservice" element={<AddService />} /> */}

        {/* Default Route */}
        <Route path="/" element={<HomeShopper />} />

        {/* Login/Logout Route */}
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignupModal />} />
        <Route
          path="/changePassword"
          element={
            <ProtectedRoutes user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoutes user={user}>
              <MyProfile profile={profile} />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </CartProvider>
  );
}
