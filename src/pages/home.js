// src/pages/Home.js
import React from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Thêm hook useNavigate
import '../css/Home.css';  

function Home() {
  const navigate = useNavigate(); // Khởi tạo navigate

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <a className="navbar-brand" href="/">DuyLongAPP</a>
          <div className="navbar-nav ml-auto">
            <Button 
              variant="outline-light" 
              className="nav-link-btn"
              onClick={() => navigate('/login')}
            >
              Đăng nhập
            </Button>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <Container>
          <h1 className="hero-title">Duy Long get information</h1>
          <p className="hero-subtitle">Chào mừng bạn đến với trang web thu thập thông tin</p>
          <div className="hero-buttons">
            <Button 
              variant="primary" 
              size="lg" 
              className="mr-3"
              onClick={() => navigate('/login')}
            >
              Bắt đầu ngay
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              onClick={() => navigate('/login')}
            >
              Tìm hiểu thêm
            </Button>
          </div>
        </Container>
      </header>

      {/* Features Section */}
      <section className="features-section py-5">
        <Container>
          <h2 className="text-center mb-5">Tính năng chính</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title>Thu thập dữ liệu</Card.Title>
                  <Card.Text>
                    Hệ thống tự động thu thập thông tin từ nhiều nguồn khác nhau.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title>Phân tích thông minh</Card.Title>
                  <Card.Text>
                    Phân tích và xử lý dữ liệu thu thập được một cách thông minh.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body>
                  <Card.Title>Báo cáo trực quan</Card.Title>
                  <Card.Text>
                    Trình bày kết quả dưới dạng báo cáo và biểu đồ trực quan.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <Container>
          <p className="text-center mb-0">&copy; {new Date().getFullYear()} Duy Long Assignment. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;