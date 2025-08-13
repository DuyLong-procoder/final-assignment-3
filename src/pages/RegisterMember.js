import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function RegisterMember() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm nhất.");
  };

  return (
    <div className="register-member-page py-5">
      <Container>
        <h1 className="text-center mb-4">Đăng Ký Thành Viên Đội Lân</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Họ và tên</Form.Label>
                <Form.Control type="text" name="fullName" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Tuổi</Form.Label>
                <Form.Control type="number" name="age" min="10" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Chiều cao (cm)</Form.Label>
                <Form.Control type="number" name="height" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Cân nặng (kg)</Form.Label>
                <Form.Control type="number" name="weight" required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Kinh nghiệm biểu diễn</Form.Label>
            <Form.Control as="textarea" rows={3} name="experience" placeholder="Mô tả kinh nghiệm..." />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Vị trí mong muốn</Form.Label>
            <Form.Select name="position" required>
              <option value="">-- Chọn vị trí --</option>
              <option value="dau-lan">Đầu lân</option>
              <option value="duoi-lan">Đuôi lân</option>
              <option value="trong">Trống</option>
              <option value="mua-rong">Múa rồng</option>
              <option value="hau-can">Hậu cần</option>
            </Form.Select>
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Số điện thoại</Form.Label>
                <Form.Control type="tel" name="phone" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" />
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="danger" size="lg" type="submit">
              Gửi đăng ký
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterMember;
