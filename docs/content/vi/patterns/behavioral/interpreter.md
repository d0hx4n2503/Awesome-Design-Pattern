---
title: "Interpreter"
slug: "interpreter"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/interpreter/README.md"
---

# Interpreter

## Mục đích

Biểu diễn và evaluate một DSL nhỏ hoặc expression tree bằng object model rõ ràng.

## Vấn đề

Rule dạng string, filter hoặc condition phức tạp nếu parse/evaluate ad-hoc sẽ khó mở rộng và khó báo lỗi.

## Ý tưởng cốt lõi

Mỗi grammar concept là expression object; expression evaluate dựa trên context.

## Góc nhìn thực tế

Interpreter không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần hành vi đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- DSL nhỏ và ổn định.
- Rule cần compose/store/inspect.
- Feature flag, filter, eligibility rule.

## Khi không nên dùng

- Grammar lớn hoặc thay đổi liên tục.
- Parser/rules engine có sẵn phù hợp hơn.
- Predicate đơn giản đã đủ.

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
