# Singleton

## Mục Đích

Đảm bảo một class chỉ có một instance và cung cấp điểm truy cập chung.

## Vấn Đề

Một tài nguyên dùng chung cần được quản lý thống nhất, ví dụ config hoặc logger.

## Ý Tưởng Cốt Lõi

Tách phần thay đổi ra khỏi client code, để client làm việc với abstraction thay vì phụ thuộc trực tiếp vào chi tiết triển khai.

## Khi Nên Dùng

Khi thật sự cần single shared instance; khi lifecycle được kiểm soát rõ; khi dependency injection không phù hợp.

## Khi Không Nên Dùng

Khi chỉ dùng để tiện truy cập global; khi làm test khó; khi tạo hidden dependency.

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

Factory Method, Facade
