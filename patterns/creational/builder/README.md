# Builder

## Mục Đích

Tạo object phức tạp từng bước để code khởi tạo dễ đọc và dễ kiểm soát.

## Vấn Đề

Constructor có quá nhiều tham số hoặc object cần nhiều bước setup theo thứ tự.

## Ý Tưởng Cốt Lõi

Tách phần thay đổi ra khỏi client code, để client làm việc với abstraction thay vì phụ thuộc trực tiếp vào chi tiết triển khai.

## Khi Nên Dùng

Khi object có nhiều optional field; khi cần nhiều cách build cùng một object; khi muốn test data/config dễ đọc.

## Khi Không Nên Dùng

Khi object đơn giản; khi builder chỉ lặp lại setter mà không thêm ý nghĩa.

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

Factory Method, Abstract Factory
