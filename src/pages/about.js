import React from 'react';
import '../css/About.css'; // Bạn có thể tạo file CSS này để style đẹp hơn

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">🎋 Giới Thiệu Đoàn Lân – Sư – Rồng</h1>
      <p className="about-intro">
        Chúng tôi là <strong>Đoàn Lân – Sư – Rồng</strong>, được thành lập với sứ mệnh
        gìn giữ và phát huy nét đẹp văn hóa truyền thống dân tộc Việt Nam thông qua
        những màn biểu diễn đặc sắc và đầy ý nghĩa.
      </p>

      <section className="about-section">
        <h2>🏮 Sứ Mệnh</h2>
        <p>
          Mang đến cho khán giả những tiết mục Lân – Sư – Rồng hoành tráng, kết hợp
          hài hòa giữa tinh hoa cổ truyền và sáng tạo hiện đại, góp phần lan tỏa tinh
          thần đoàn kết, sức mạnh và may mắn trong mỗi dịp lễ hội.
        </p>
      </section>

      <section className="about-section">
        <h2>🐉 Hoạt Động Chính</h2>
        <ul>
          <li>Biểu diễn Lân – Sư – Rồng trong các dịp Tết Trung Thu, Tết Nguyên Đán.</li>
          <li>Tham gia khai trương, động thổ, lễ hội truyền thống.</li>
          <li>Tổ chức giao lưu và huấn luyện kỹ thuật biểu diễn cho thanh thiếu niên.</li>
          <li>Tham dự và đạt nhiều giải thưởng tại các giải đấu Lân – Sư – Rồng toàn quốc.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🎯 Giá Trị Cốt Lõi</h2>
        <p>
          Chúng tôi luôn đề cao <strong>Đoàn Kết – Kỹ Thuật – Sáng Tạo – Văn Hóa</strong>.
          Mỗi thành viên là một mắt xích quan trọng, góp phần tạo nên những màn biểu
          diễn đầy cảm xúc và ấn tượng.
        </p>
      </section>

      <section className="about-section">
        <h2>📞 Liên Hệ</h2>
        <p>
          Email: <a href="mailto:lansurong@example.com">lansurong@example.com</a><br />
          Điện thoại: 0123 456 789<br />
          Facebook: <a href="https://facebook.com" target="_blank" rel="noreferrer">fb.com/doanlansurong</a>
        </p>
      </section>
    </div>
  );
}

export default About;
