import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';

function Dashboard({ user, onLogout }) {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const handleDelete = (usernameToDelete) => {
    if (!window.confirm(`Xác nhận xóa người dùng "${usernameToDelete}"?`)) return;
    const updated = users.filter(u => u.username !== usernameToDelete);
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const filteredUsers = users.filter(u =>
    u.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : ''}`}>
      <div className="dashboard-header">
        <h1>Xin chào {user?.username}, vui lòng đợi 1 chút chúng tôi sẽ liên hệ với bạn sớm nhất 👋</h1>
        <button onClick={handleLogout} className="logout-btn">Đăng xuất</button>
        <button onClick={toggleDarkMode} className="darkmode-btn">

        </button>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Tìm người dùng..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <h2>Danh sách khách hàng sử dụng dịch vụ cao cấp (đang chờ):</h2>
      <ul className="user-list">
        {filteredUsers.map((u, index) => (
          <li key={index}>
            <img src={u.avatar} alt="avatar" className="avatar" />
            <span>{u.username}</span>
            <span className="role-badge">{u.role}</span>
            {user?.role === 'admin' && u.username !== user.username && (
              <button
                className="delete-btn"
                onClick={() => handleDelete(u.username)}
              >
                Xóa
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;