# Observer

## Mục Đích

Thông báo thay đổi từ một subject đến nhiều subscriber phụ thuộc.

## Vấn Đề

Một object thay đổi và nhiều object khác cần phản ứng mà không muốn coupling trực tiếp.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi xây event system; khi có notification/pub-sub; khi UI hoặc state thay đổi cần nhiều listener.

## Khi Không Nên Dùng

Khi thứ tự event quan trọng nhưng không kiểm soát; khi callback chain gây khó debug.

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

Mediator, Strategy
