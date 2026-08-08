# Command

## Mục Đích

Đóng gói một request/action thành object riêng.

## Vấn Đề

Cần truyền, queue, log, retry, undo hoặc schedule hành động mà không gọi trực tiếp receiver.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi cần undo/redo; khi xử lý job queue; khi tách invoker khỏi receiver; khi muốn audit action.

## Khi Không Nên Dùng

Khi action quá đơn giản; khi tạo quá nhiều command class không mang thêm ý nghĩa.

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

Memento, Chain of Responsibility
