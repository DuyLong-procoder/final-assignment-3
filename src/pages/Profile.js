import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import './Profile.css';

function Profile({ user }) {
  return (
    <Container className="py-5">
      <Card className="profile-card">
        <h2 className="text-center mb-4">Xin chào, {user?.username || 'Quý khách'}!</h2>
        <p className="text-center fs-5">
          Trong lúc chờ chúng tôi liên lạc với bạn, bạn có thể:
        </p>
        <ul className="fs-5">
          <li>📞 Liên hệ trực tiếp qua số điện thoại: <strong>0123 456 789</strong></li>
          <li>📧 Gửi email cho chúng tôi tại: <a href="mailto:hotro@congty.com">hotro@congty.com</a></li>
          <li>📍 Ghé văn phòng: 123 Đường ABC, Quận XYZ, TP.HCM</li>
          <li>
            📱 Theo dõi tin tức mới nhất trên mạng xã hội:
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://zalo.me" target="_blank" rel="noreferrer">Zalo</a></li>
            </ul>
          </li>
        </ul>
        <div className="text-center mt-4">
          <Button variant="primary" href="/">
            Quay về trang chủ
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default Profile;
