# Interpreter

## Mục Đích

Định nghĩa và diễn giải grammar cho một ngôn ngữ/DSL đơn giản.

## Vấn Đề

Có tập rule/ngữ pháp nhỏ cần parse và evaluate lặp lại.

## Ý Tưởng Cốt Lõi

Tách phần hành vi thay đổi ra thành object, protocol, hoặc workflow rõ ràng để các object cộng tác với nhau mà không phụ thuộc chặt vào chi tiết của nhau.

## Khi Nên Dùng

Khi xây DSL nhỏ; khi grammar ổn định và đơn giản; khi biểu thức có thể biểu diễn bằng cây object.

## Khi Không Nên Dùng

Khi grammar phức tạp; khi nên dùng parser generator hoặc library có sẵn.

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
