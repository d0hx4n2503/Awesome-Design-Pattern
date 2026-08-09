---
title: "Template Method"
slug: "template-method"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/template-method/README.md"
---

# Template Method

## Mục đích

Cố định khung workflow trong base class và cho subclass tùy biến một số bước.

## Vấn đề

Nhiều workflow giống thứ tự nhưng khác vài bước thường bị copy-paste, dẫn đến validation/logging/error handling không nhất quán.

## Ý tưởng cốt lõi

Base class giữ skeleton algorithm; subclass override hook cụ thể.

## Góc nhìn thực tế

Template Method không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần hành vi đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Thứ tự workflow phải ổn định.
- Chỉ một vài bước thay đổi.
- Bạn kiểm soát inheritance hierarchy.

## Khi không nên dùng

- Composition rõ hơn inheritance.
- Subclass cần đổi thứ tự workflow.
- Base class có nguy cơ thành fragile god class.

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
