# Factory Method

## Mục Đích

Đưa quyết định tạo object vào factory method thay vì gọi concrete constructor trực tiếp.

## Vấn Đề

Client cần object theo interface chung nhưng không nên phụ thuộc class cụ thể.

## Ý Tưởng Cốt Lõi

Tách phần thay đổi ra khỏi client code, để client làm việc với abstraction thay vì phụ thuộc trực tiếp vào chi tiết triển khai.

## Khi Nên Dùng

Khi object cần tạo phụ thuộc runtime context; khi framework cho subclass quyết định implementation; khi muốn giảm coupling.

## Khi Không Nên Dùng

Khi việc tạo object không thay đổi; khi abstraction làm code khó lần theo hơn.

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

Abstract Factory, Template Method
