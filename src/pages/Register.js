import '../css/Register.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Mật khẩu nhập lại không khớp');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find((u) => u.username === username)) {
      setError('Tên người dùng đã tồn tại');
    } else {
      const role = username === 'admin' ? 'admin' : 'user';

      if (avatarFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const avatarBase64 = reader.result;
          users.push({ username, password, role, avatar: avatarBase64 });
          localStorage.setItem('users', JSON.stringify(users));
          setSuccess('Đăng ký thành công! Đang chuyển hướng...');
          setTimeout(() => navigate('/login'), 1500);
        };
        reader.readAsDataURL(avatarFile);
      } else {
        const defaultAvatar = `https://i.pravatar.cc/150?u=${username}`;
        users.push({ username, password, role, avatar: defaultAvatar });
        localStorage.setItem('users', JSON.stringify(users));
        setSuccess('Đăng ký thành công! Đang chuyển hướng...');
        setTimeout(() => navigate('/login'), 1500);
      }
    }
  };

  return (
    <div className="register-container" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên đăng nhập:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Mật khẩu:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Nhập lại mật khẩu:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ảnh đại diện:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatarFile(e.target.files[0])}
          />
        </div>

        <button type="submit">Đăng ký</button>

        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
}

export default Register;
