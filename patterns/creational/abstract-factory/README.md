# Abstract Factory

## Mục Đích

Tạo một họ object liên quan mà không phụ thuộc vào concrete class cụ thể.

## Vấn Đề

Ứng dụng cần hỗ trợ nhiều biến thể sản phẩm liên quan với nhau, ví dụ UI light/dark hoặc nhiều provider thanh toán.

## Ý Tưởng Cốt Lõi

Tách phần thay đổi ra khỏi client code, để client làm việc với abstraction thay vì phụ thuộc trực tiếp vào chi tiết triển khai.

## Khi Nên Dùng

Khi các object phải tương thích theo cùng một family; khi muốn thay đổi family bằng cấu hình; khi client không nên biết class cụ thể.

## Khi Không Nên Dùng

Khi chỉ cần tạo một object đơn giản; khi số biến thể ít và ít thay đổi.

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

Factory Method, Builder, Prototype
