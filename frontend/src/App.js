import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BuyerDashboard from './pages/BuyerDashboard';
import ShopperDashboard from './pages/ShopperDashboard';
import { useAuth } from './context/AuthContext'; // assuming you have an AuthContext

function App() {
  const { user, role } = useAuth(); // role = 'buyer' or 'shopper'

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            !user ? <Navigate to="/" /> : role === 'buyer' ? <BuyerDashboard /> : <Navigate to="/shopper" />
          }
        />
        <Route
          path="/shopper"
          element={
            !user ? <Navigate to="/" /> : role === 'shopper' ? <ShopperDashboard /> : <Navigate to="/dashboard" />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
