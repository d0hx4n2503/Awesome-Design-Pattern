# Bridge

## Mục Đích

Tách abstraction khỏi implementation để cả hai có thể thay đổi độc lập.

## Vấn Đề

Số class tăng nổ khi kết hợp nhiều abstraction với nhiều implementation.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi có hai trục thay đổi độc lập; khi cần runtime switching implementation; khi tránh kế thừa nhiều tầng.

## Khi Không Nên Dùng

Khi chỉ có một implementation; khi composition làm code khó hiểu hơn kế thừa đơn giản.

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

Adapter, Strategy
