# Mediator

## Mục Đích

Điều phối giao tiếp giữa nhiều object thông qua một object trung gian.

## Vấn Đề

Nhiều component gọi qua lại trực tiếp khiến dependency chằng chịt.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi UI components phụ thuộc chéo; khi workflow cần điều phối tập trung; khi muốn giảm many-to-many coupling.

## Khi Không Nên Dùng

Khi mediator biến thành god object; khi quan hệ giữa object vốn đơn giản.

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

Observer, Facade
