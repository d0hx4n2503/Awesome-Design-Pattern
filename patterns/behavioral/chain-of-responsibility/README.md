# Chain of Responsibility

## Mục Đích

Truyền request qua một chuỗi handler cho đến khi có handler xử lý.

## Vấn Đề

Client phải biết chính xác object nào xử lý request hoặc có quá nhiều if/else phân nhánh xử lý.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi có pipeline middleware; khi nhiều handler có thể xử lý request; khi muốn đổi thứ tự xử lý linh hoạt.

## Khi Không Nên Dùng

Khi request luôn có một handler cố định; khi chain làm flow khó lần theo.

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

Command, Mediator
