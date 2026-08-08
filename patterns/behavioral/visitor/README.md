# Visitor

## Mục Đích

Thêm operation mới cho cấu trúc object ổn định mà không sửa các class node nhiều lần.

## Vấn Đề

Cần nhiều thao tác khác nhau trên cùng một object structure, ví dụ AST hoặc tree.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi object structure ổn định; khi thường thêm operation mới; khi cần gom logic operation ra riêng.

## Khi Không Nên Dùng

Khi thường thêm node type mới; khi double dispatch làm team khó hiểu.

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

Composite, Iterator
