# Flyweight

## Mục Đích

Chia sẻ dữ liệu dùng chung giữa nhiều object để giảm chi phí bộ nhớ.

## Vấn Đề

Hệ thống tạo rất nhiều object giống nhau và tiêu tốn bộ nhớ không cần thiết.

## Ý Tưởng Cốt Lõi

Tổ chức lại quan hệ giữa object/class để client dùng hệ thống qua interface ổn định, trong khi cấu trúc bên trong có thể thay đổi linh hoạt hơn.

## Khi Nên Dùng

Khi có hàng nghìn/triệu object; khi tách được intrinsic state và extrinsic state; khi tối ưu memory thật sự cần.

## Khi Không Nên Dùng

Khi số object ít; khi tối ưu sớm làm code khó hiểu; khi state không thể tách rõ.

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

Composite, Singleton
