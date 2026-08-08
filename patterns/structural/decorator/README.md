# Decorator

## Mục Đích

Bọc object để thêm hành vi mới mà không sửa class gốc.

## Vấn Đề

Cần kết hợp nhiều biến thể hành vi nhưng kế thừa tạo quá nhiều subclass.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi cần thêm behavior linh hoạt; khi behavior có thể xếp chồng; khi muốn tuân thủ open/closed principle.

## Khi Không Nên Dùng

Khi thứ tự wrapper khó kiểm soát; khi debug chuỗi wrapper trở nên mơ hồ.

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

Proxy, Composite, Strategy
