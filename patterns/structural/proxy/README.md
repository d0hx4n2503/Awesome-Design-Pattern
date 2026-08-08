# Proxy

## Mục Đích

Đặt object đại diện trước object thật để kiểm soát truy cập hoặc thêm hành vi phụ.

## Vấn Đề

Cần lazy loading, cache, logging, permission, hoặc remote access mà không đổi interface client.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi cần kiểm soát vòng đời object thật; khi thêm cross-cutting behavior; khi object thật đắt đỏ hoặc ở xa.

## Khi Không Nên Dùng

Khi proxy làm side effect khó đoán; khi client cần semantics khác object thật.

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

Decorator, Adapter, Facade
