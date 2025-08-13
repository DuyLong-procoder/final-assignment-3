import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function BookingSchedule() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const storedBookings = JSON.parse(localStorage.getItem("lionDanceBookings")) || [];
    setBookings(storedBookings);
  }, []);

  const handleClear = () => {
    localStorage.removeItem("lionDanceBookings");
    setBookings([]);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">📅 Lịch Biểu Diễn Đã Đặt</h2>
      {bookings.length === 0 ? (
        <p>Chưa có lịch đặt nào.</p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Tên khách hàng</th>
                <th>Ngày biểu diễn</th>
                <th>Gói biểu diễn</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{booking.name}</td>
                  <td>{booking.date}</td>
                  <td>{booking.package}</td>
                  <td>{booking.note || "Không có"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="danger" onClick={handleClear}>Xóa tất cả lịch</Button>
        </>
      )}
      <Button
        variant="secondary"
        className="mt-3"
        onClick={() => navigate("/booking")}
      >
        Đặt thêm lịch
      </Button>
    </Container>
  );
}

export default BookingSchedule;
