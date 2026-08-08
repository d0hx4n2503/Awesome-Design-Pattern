# Adapter

## Mục Đích

Chuyển interface của một object có sẵn thành interface mà client mong muốn.

## Vấn Đề

Hai phần code cần làm việc với nhau nhưng interface không khớp.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi tích hợp thư viện/API bên ngoài; khi migrate hệ thống cũ; khi muốn giữ client code ổn định.

## Khi Không Nên Dùng

Khi có thể sửa trực tiếp interface gốc; khi adapter chỉ che giấu thiết kế sai lâu dài.

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

Facade, Proxy, Bridge
