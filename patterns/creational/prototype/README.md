# Prototype

## Mục Đích

Tạo object mới bằng cách clone object mẫu.

## Vấn Đề

Tạo object từ đầu tốn kém hoặc cần copy một cấu hình mẫu đã có.

## Ý Tưởng Cốt Lõi

Tách phần thay đổi ra khỏi client code, để client làm việc với abstraction thay vì phụ thuộc trực tiếp vào chi tiết triển khai.

## Khi Nên Dùng

Khi object setup phức tạp; khi cần nhiều bản sao gần giống nhau; khi muốn tránh phụ thuộc concrete constructor.

## Khi Không Nên Dùng

Khi object có reference phức tạp dễ clone sai; khi copy semantics không rõ ràng.

## Dấu Hiệu Nhận Biết

- Có nhiều concrete class cùng chia sẻ một vai trò.
- Client đang phải biết quá nhiều chi tiết khởi tạo.
- Thay đổi implementation làm lan sửa code ở nhiều nơi.

## Ưu Điểm

- Giảm coupling giữa client và concrete class.
- Dễ thay đổi hoặc mở rộng biến thể object.
- Làm ý định thiết kế rõ ràng hơn.

## Nhược Điểm

- Tăng số lượng class/file cần đọc.
- Có thể gây over-engineering nếu bài toán còn đơn giản.
- Cần đặt tên abstraction tốt để tránh khó hiểu.

## Pattern Liên Quan

Builder, Abstract Factory
