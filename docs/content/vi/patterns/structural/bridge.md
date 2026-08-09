---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/bridge/README.md"
---

# Bridge

## Mục đích

Tách abstraction khỏi implementation để hai chiều biến thể phát triển độc lập.

## Vấn đề

Hai trục biến thể tạo class explosion như EmailPdfReport, SmsPdfReport, EmailHtmlReport...

## Ý tưởng cốt lõi

Một chiều nằm ở abstraction, chiều còn lại nằm sau implementation interface.

## Góc nhìn thực tế

Bridge không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần cấu trúc đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Có hai variation axes độc lập.
- Muốn thay implementation mà không đổi abstraction.
- Subclass combination đang tăng nhanh.

## Khi không nên dùng

- Chỉ có một trục biến thể.
- Strategy đủ đơn giản hơn.
- Hai phía không thật sự độc lập.

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
