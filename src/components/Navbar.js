import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar({ user, setUser }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Trang Chủ</Link>
        <Link to="/about">Về chúng tôi</Link>
        {user && <Link to="/dashboard">Danh sách chờ</Link>}
        {user && <Link to="/profile">Thông tin cá nhân</Link>}
      </div>

      <div className="nav-right">
        <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
          {darkMode ? '🌞' : '🌙'}
        </button>

        {user ? (
          <>
            <div className="user-info">
              <img src={user.avatar || `https://i.pravatar.cc/40?u=${user.username}`} alt="Avatar" className="avatar" />
              <span>{user.username} ({user.role})</span>
            </div>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>

          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
