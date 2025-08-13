import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingPage from './pages/BookingPage';
import BookingSchedule from './pages/BookingSchedule'; // Import component BookingSchedule
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Route chỉ cho phép user đã đăng nhập
const ProtectedRoute = ({ user, redirectPath = '/login' }) => {
  return user ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

// Route chỉ cho phép user chưa đăng nhập
const GuestRoute = ({ user, redirectPath = '/dashboard' }) => {
  return user ? <Navigate to={redirectPath} replace /> : <Outlet />;
};

function App() {
  const [user, setUser] = useState(null);

  // Kiểm tra trạng thái đăng nhập từ localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Lưu user vào localStorage khi thay đổi
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/schedule" element={<BookingSchedule />} /> {/* Thêm route mới cho BookingSchedule */}

          {/* Protected routes */}
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/dashboard" element={<Dashboard user={user} onLogout={handleLogout} />} />
            <Route path="/profile" element={<Profile user={user} />} />
          </Route>

          {/* Guest routes */}
          <Route element={<GuestRoute user={user} />}>
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
          </Route>

          {/* Redirect cho route không tồn tại */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;