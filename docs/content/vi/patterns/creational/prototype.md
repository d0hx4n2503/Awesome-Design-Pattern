---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/prototype/README.md"
---

# Prototype

## Mục đích

Tạo object mới bằng cách clone từ prototype đã cấu hình sẵn.

## Vấn đề

Object có nhiều default hoặc setup đắt đỏ nếu dựng lại từ đầu ở nhiều nơi sẽ dễ lệch cấu hình.

## Ý tưởng cốt lõi

Prototype giữ baseline; clone tạo bản độc lập và override phần cần khác.

## Góc nhìn thực tế

Prototype không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần khởi tạo đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Template email/document/config.
- Test fixture cần biến thể nhỏ.
- Object creation tốn kém hoặc dài dòng.

## Khi không nên dùng

- Copy semantics không rõ.
- Có resource/identity không được clone.
- Object tạo trực tiếp vẫn đơn giản.

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
