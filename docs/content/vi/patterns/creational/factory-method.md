---
title: "Factory Method"
slug: "factory-method"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/factory-method/README.md"
---

# Factory Method

## Mục đích

Ẩn việc tạo object cụ thể sau một factory method để workflow không phụ thuộc trực tiếp vào class concrete.

## Vấn đề

Khi code gọi `new` ở nhiều nơi, việc thêm provider hoặc product mới thường kéo theo sửa nhiều workflow vốn không nên biết chi tiết khởi tạo.

## Ý tưởng cốt lõi

Workflow phụ thuộc vào product interface. Factory method quyết định concrete product nào được tạo.

## Góc nhìn thực tế

Factory Method không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần khởi tạo đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Object cần tạo thay đổi theo config hoặc input.
- Caller chỉ nên biết contract, không biết class cụ thể.
- Quá trình tạo có setup/validation/defaults.

## Khi không nên dùng

- Constructor trực tiếp vẫn rõ ràng.
- Cần tạo cả họ object liên quan; cân nhắc Abstract Factory.
- Factory chỉ bọc `new` mà không giảm coupling.

## Checklist thiết kế

- Bắt đầu từ caller: caller thật sự cần contract nào?
- Đặt tên abstraction theo domain, không chỉ theo tên pattern.
- Giữ concrete class nhỏ và chỉ có một lý do để thay đổi.
- Test qua public interface thay vì private detail.
- Nếu thêm pattern làm code khó đọc hơn, hãy quay lại giải pháp đơn giản hơn.

## Lỗi thường gặp

- Áp dụng pattern khi mới có một biến thể giả định.
- Tạo interface chỉ để bọc một class cùng tên.
- Ẩn runtime flow khiến debug khó hơn.
- Dùng pattern để khoe kiến thức thay vì giải quyết pressure thật.

## Hướng dẫn kiểm thử

- Test từng concrete behavior hoặc collaborator riêng.
- Test caller với fake implementation để chứng minh boundary hữu ích.
- Thêm case lỗi/edge case đúng với lý do bạn chọn pattern.

## Triển khai TypeScript

Thư mục pattern có ví dụ TypeScript chạy được trong `index.ts`. Hãy đọc code cùng test tương ứng để thấy pattern boundary nằm ở đâu và vì sao caller không cần phụ thuộc vào chi tiết triển khai.
