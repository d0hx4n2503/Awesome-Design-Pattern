# Facade

## Mục Đích

Cung cấp interface đơn giản cho một subsystem phức tạp.

## Vấn Đề

Client phải biết quá nhiều class, bước gọi, hoặc chi tiết nội bộ của subsystem.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi muốn tạo service/module boundary; khi gom workflow phức tạp sau API đơn giản; khi giảm coupling.

## Khi Không Nên Dùng

Khi facade trở thành god object; khi nó che giấu lỗi thiết kế thay vì tạo boundary rõ.

## Dấu Hiệu Nhận Biết

- Client đang phụ thuộc quá nhiều vào cấu trúc nội bộ.
- Có nhu cầu bọc, chuyển đổi, gom nhóm, hoặc che giấu chi tiết object.
- Thay đổi cấu trúc làm lan sửa code ở nhiều nơi.

## Ưu Điểm

- Giảm coupling giữa client và implementation.
- Làm ranh giới module rõ hơn.
- Giúp hệ thống dễ mở rộng mà ít sửa client code.

## Nhược Điểm

- Có thể thêm nhiều lớp trung gian.
- Debug khó hơn nếu abstraction bị lạm dụng.
- Cần kiểm soát naming để người đọc hiểu vai trò từng lớp.

## Pattern Liên Quan

Adapter, Mediator, Proxy
