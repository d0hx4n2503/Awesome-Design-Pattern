# Composite

## Mục Đích

Biểu diễn object đơn và object nhóm bằng cùng một interface dạng cây.

## Vấn Đề

Client phải xử lý riêng leaf và container dù chúng cùng vai trò.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi dữ liệu có cấu trúc cây; khi thao tác trên node đơn và nhóm giống nhau; khi xây UI/menu/folder.

## Khi Không Nên Dùng

Khi cấu trúc không phải dạng cây; khi leaf và composite có hành vi quá khác nhau.

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

Iterator, Visitor, Decorator
