import React from 'react';
import { Button, Container, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/lion-dance-logo.png'; // Import logo từ local
import '../css/Home.css';

function Home() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Danh sách các gói biểu diễn
  const performancePackages = [
    {
      title: "Gói Cơ Bản",
      price: "2.000.000 VND",
      features: [
        "1 đội Lân (5 người)",
        "Biểu diễn 30 phút",
        "1 màn múa lân ngắn",
        "Phát lộc đầu lân"
      ]
    },
    {
      title: "Gói Tiêu Chuẩn",
      price: "4.000.000 VND",
      features: [
        "1 đội Lân Sư Rồng (8 người)",
        "Biểu diễn 45 phút",
        "Múa lân + sư tử",
        "Trống hội truyền thống",
        "Phát lộc + quà Trung Thu"
      ]
    },
    {
      title: "Gói Cao Cấp",
      price: "6.000.000 VND",
      features: [
        "2 đội Lân Sư Rồng (12 người)",
        "Biểu diễn 60 phút",
        "Múa lân chuyên nghiệp",
        "Trống hội + nhạc lễ",
        "Phát lộc + quà cao cấp",
        "Chụp ảnh cùng đội lân"
      ]
    }
  ];

  // Danh sách hình ảnh gallery
  const galleryImages = [
    require('../assets/images/lion-dance-1.jpg'),
    require('../assets/images/lion-dance-2.jpg'),
    require('../assets/images/lion-dance-3.jpg'),
    require('../assets/images/lion-dance-4.jpg'),
    require('../assets/images/lion-dance-5.jpg'),
    require('../assets/images/lion-dance-6.jpg')
  ];

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <Container>
          <a className="navbar-brand" href="/">
            <img 
              src={logo}
              alt="Logo Lân Sư Rồng" 
              className="mr-2 logo-img"
              loading="lazy"
              width="40"
              height="40"
            />
            Lân Sư Rồng Trung Thu {currentYear}
          </a>
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
      <header className="hero-section lion-dance-hero">
        <Container>
          <h1 className="hero-title">Đặt Lịch Biểu Diễn Lân Sư Rồng</h1>
          <p className="hero-subtitle">Mừng Trung Thu {currentYear} - Rước Lộc Đầu Năm</p>
          <div className="hero-buttons">
            <Button 
              variant="danger" 
              size="lg" 
              className="mr-3"
              onClick={() => navigate('/booking')}
            >
              Đặt lịch ngay
            </Button>
            <Button 
              variant="outline-light" 
              size="lg"
              onClick={() => navigate('/schedule')}
            >
              Xem lịch trình
            </Button>
          </div>
        </Container>
      </header>

      {/* Countdown Section */}
      <section className="countdown-section py-4 bg-warning text-dark">
        <Container>
          <h3 className="text-center mb-0">
            Còn <span className="days-left">42</span> ngày nữa đến Trung Thu {currentYear}
          </h3>
        </Container>
      </section>

      {/* Performance Packages */}
      <section className="packages-section py-5">
        <Container>
          <h2 className="text-center mb-5">Các Gói Biểu Diễn</h2>
          <Row>
            {performancePackages.map((pkg, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="package-card h-100">
                  <Card.Header className="bg-danger text-white">
                    <h4 className="text-center mb-0">{pkg.title}</h4>
                  </Card.Header>
                  <Card.Body className="text-center">
                    <h3 className="text-danger">{pkg.price}</h3>
                    <ul className="package-features">
                      {pkg.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Button variant="danger">
                      Đặt ngay
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Hình Ảnh Biểu Diễn</h2>
          <Row>
            {galleryImages.map((img, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="gallery-item">
                  <Card.Img 
                    variant="top" 
                    src={img} 
                    alt={`Múa lân ${index + 1}`}
                    loading="lazy"
                    width="300"
                    height="200"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5">
        <Container>
          <h2 className="text-center mb-5">Khách Hàng Nói Gì</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>"Đội lân biểu diễn rất chuyên nghiệp, các em nhỏ vô cùng thích thú!"</p>
                    <footer className="blockquote-footer">
                      Chị Nguyễn Thị Mai - <cite>Trường Mầm non Hoa Hồng</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="testimonial-card">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>"Không khí Trung Thu trở nên sôi động hơn hẳn với màn múa lân của các bạn!"</p>
                    <footer className="blockquote-footer">
                      Anh Trần Văn Nam - <cite>Công ty ABC</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5 bg-danger text-white">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Liên hệ để đặt những gói cao cấp hơn (múa rồng)</h2>
              <p>Hotline: 0909.123.456</p>
              <p>Email: lansurongtrungthu@gmail.com</p>
              <p>Địa chỉ: 123 Đường Lân Sư, Quận Rồng Bay, TP.HCM</p>
            </Col>
            <Col md={6}>
              <Button 
                variant="outline-light" 
                size="lg" 
                block
                onClick={() => navigate('/login')}
              >
                Đăng nhập để đặt lịch
              </Button>
              <Button 
                variant="light" 
                size="lg" 
                block
                className="mt-3"
                onClick={() => navigate('/schedule')}
              >
                Xem lịch trình biểu diễn
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Lân Sư Rồng Trung Thu {currentYear}</h5>
              <p>Mang đến không khí Trung Thu truyền thống</p>
            </Col>
            <Col md={6} className="text-md-right">
              <p>© {currentYear} Bản quyền thuộc về Đội Lân Sư Rồng Rồng Vàng</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Home;