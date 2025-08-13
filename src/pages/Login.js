// src/pages/Login.js
import '../css/Login.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(u => u.username === username && u.password === password);

    if (user) {
      setUser(user);
      navigate('/dashboard');
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng');
    }
  };

  return (
    <div className="login-page">

      {/* Phần form đăng nhập */}
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className="login-form">
              <h2 className="text-center mb-4">Đăng nhập</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nhập số điện thoại"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Mật khẩu:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Đăng nhập
                </Button>

                <div className="register-link text-center">
                  <span>Chưa có tài khoản? </span>
                  <Button 
                    variant="link" 
                    onClick={() => navigate('/register')}
                    className="register-btn"
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;