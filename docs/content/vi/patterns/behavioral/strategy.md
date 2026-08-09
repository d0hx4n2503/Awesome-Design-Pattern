---
title: "Strategy"
slug: "strategy"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/strategy/README.md"
---

# Strategy

## Mục đích

Đóng gói các thuật toán hoặc chính sách có thể thay thế cho nhau sau một interface chung.

## Vấn đề

Khi pricing, validation, shipping hoặc routing bắt đầu có nhiều nhánh `if/else`, workflow chính sẽ phải biết quá nhiều rule và rất khó test từng rule riêng.

## Ý tưởng cốt lõi

Giữ workflow ổn định trong context, còn từng biến thể hành vi được đưa vào các strategy riêng. Context chỉ gọi interface, không biết concrete strategy.

## Góc nhìn thực tế

Strategy không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần hành vi đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Có nhiều thuật toán cùng input/output.
- Rule thay đổi theo tenant, plan, quốc gia hoặc config.
- Muốn thêm rule mới mà không sửa workflow chính.

## Khi không nên dùng

- Chỉ có một thuật toán.
- Một callback đơn giản đã đủ rõ.
- Các biến thể có input khác nhau đến mức interface bị gượng ép.

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
