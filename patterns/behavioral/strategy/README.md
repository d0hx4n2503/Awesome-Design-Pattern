# Strategy

## Mục Đích

Đóng gói các thuật toán/hành vi có thể thay thế cho nhau sau cùng một interface.

## Vấn Đề

Code có nhiều nhánh chọn thuật toán hoặc behavior thay đổi theo context.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi cần thay đổi thuật toán runtime; khi muốn bỏ if/else theo loại; khi viết validation, pricing, sorting, payment.

## Khi Không Nên Dùng

Khi chỉ có một thuật toán; khi interface chung bị ép gượng.

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

State, Template Method
