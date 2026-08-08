# Iterator

## Mục Đích

Duyệt collection mà không lộ cấu trúc lưu trữ bên trong.

## Vấn Đề

Client cần đi qua các phần tử nhưng không nên biết collection dùng array, tree, graph hay structure khác.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi muốn chuẩn hóa cách duyệt; khi collection có nhiều kiểu traversal; khi cần che giấu internal structure.

## Khi Không Nên Dùng

Khi collection rất đơn giản và abstraction không cần thiết; khi traversal cần tối ưu đặc thù.

## Dấu Hiệu Nhận Biết

- Logic hành vi có nhiều nhánh hoặc nhiều biến thể.
- Object đang biết quá nhiều về object khác.
- Thay đổi một rule làm ảnh hưởng nhiều class không liên quan.

## Ưu Điểm

- Làm hành vi dễ thay đổi và dễ test độc lập hơn.
- Giảm phụ thuộc trực tiếp giữa các object cộng tác.
- Giúp workflow hoặc rule phức tạp có cấu trúc rõ ràng hơn.

## Nhược Điểm

- Có thể làm tăng số lượng object/class.
- Flow runtime đôi khi khó lần theo hơn gọi trực tiếp.
- Dễ bị lạm dụng nếu bài toán chỉ có một hành vi đơn giản.

## Pattern Liên Quan

Composite, Visitor
