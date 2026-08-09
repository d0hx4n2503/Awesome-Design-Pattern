---
title: "Facade"
slug: "facade"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/facade/README.md"
---

# Facade

## Mục đích

Cung cấp một API đơn giản, theo use case, che đi orchestration phức tạp phía sau.

## Vấn đề

Nhiều caller cùng phải gọi cart, inventory, payment, email theo đúng thứ tự sẽ tạo duplication và lỗi khó kiểm soát.

## Ý tưởng cốt lõi

Facade gom workflow phổ biến thành một entry point rõ nghĩa, xử lý ordering và error ở một nơi.

## Góc nhìn thực tế

Facade không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần cấu trúc đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Một use case cần phối hợp nhiều subsystem.
- Caller chỉ cần thao tác mức nghiệp vụ.
- Muốn thống nhất error handling.

## Khi không nên dùng

- Facade thành god service chứa mọi thứ.
- Caller cần kiểm soát chi tiết từng subsystem.
- Bạn đang che giấu domain model nên được tách rõ hơn.

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
