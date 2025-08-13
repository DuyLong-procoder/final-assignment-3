import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Lấy gói từ query string
  const params = new URLSearchParams(location.search);
  const selectedPackage = params.get("package");

  const eventTypes = [
    { value: 'mua-trung-thu', label: 'Múa Trung Thu' },
    { value: 'mua-khai-truong', label: 'Múa Khai Trương' },
    { value: 'mua-le-hoi', label: 'Múa Lễ Hội' },
    { value: 'mua-dam-cuoi', label: 'Múa Đám Cưới' },
    { value: 'mua-tet', label: 'Múa Tết Nguyên Đán' },
    { value: 'khac', label: 'Sự kiện khác' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newBooking = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      eventType: formData.get("eventType"),
      date: formData.get("date"),
      time: formData.get("time"),
      address: formData.get("address"),
      notes: formData.get("notes"),
      package: formData.get("package") // Lưu tên gói
    };

    // Lưu vào localStorage
    const existingBookings = JSON.parse(localStorage.getItem("lionDanceBookings")) || [];
    existingBookings.push(newBooking);
    localStorage.setItem("lionDanceBookings", JSON.stringify(existingBookings));

    setSubmitted(true);

    // Chuyển sang trang xem lịch
    setTimeout(() => {
      navigate("/schedule");
    }, 1000);
  };

  return (
    <div className="booking-page">
      <Container className="py-5">
        <h1 className="text-center mb-4">Đặt Lịch Biểu Diễn</h1>

        {/* Nếu có gói được chọn thì hiển thị thông báo */}
        {selectedPackage && (
          <div className="alert alert-info text-center mb-4">
            Bạn đang đặt: <strong>{selectedPackage}</strong>
          </div>
        )}

        {!submitted ? (
          <Form
            action="https://formsubmit.co/hsneaky2108@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            {/* Trường ẩn để lưu thông tin gói */}
            {selectedPackage && (
              <input type="hidden" name="package" value={selectedPackage} />
            )}

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="tel" name="phone" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Loại sự kiện</Form.Label>
                  <Form.Select name="eventType" required>
                    {eventTypes.map((event) => (
                      <option key={event.value} value={event.label}>
                        {event.label}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Ngày biểu diễn</Form.Label>
                  <Form.Control type="date" name="date" min={new Date().toISOString().split('T')[0]} required />
                </Form.Group>
              </Col>
              <Col md={3}>
                <Form.Group className="mb-3">
                  <Form.Label>Giờ biểu diễn</Form.Label>
                  <Form.Control type="time" name="time" required />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Địa điểm tổ chức</Form.Label>
              <Form.Control as="textarea" rows={2} name="address" required />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Yêu cầu thêm (nếu có)</Form.Label>
              <Form.Control as="textarea" rows={3} name="notes" />
            </Form.Group>

            <div className="text-center">
              <Button variant="danger" size="lg" type="submit">
                Xác nhận đặt lịch
              </Button>
            </div>
          </Form>
        ) : (
          <div className="text-center">
            <h4>Đang lưu dữ liệu và chuyển đến trang lịch đã đặt...</h4>
          </div>
        )}
      </Container>
    </div>
  );
}

export default BookingPage;
