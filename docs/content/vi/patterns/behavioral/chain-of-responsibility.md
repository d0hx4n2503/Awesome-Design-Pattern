---
title: "Chain of Responsibility"
slug: "chain-of-responsibility"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/chain-of-responsibility/README.md"
---

# Chain of Responsibility

## Mục đích

Cho request đi qua chuỗi handler theo thứ tự, handler có thể xử lý, reject hoặc forward.

## Vấn đề

Auth, validation, throttling, enrichment nếu nằm trong một function lớn sẽ khó thay đổi từng bước và khó test lỗi sớm.

## Ý tưởng cốt lõi

Mỗi handler giữ một trách nhiệm nhỏ và quyết định stop/continue rõ ràng.

## Góc nhìn thực tế

Chain of Responsibility không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần hành vi đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Có pipeline ordered như middleware.
- Một bước có thể stop sớm.
- Muốn cấu hình chain khác nhau theo route/product.

## Khi không nên dùng

- Mọi bước luôn phải chạy.
- Order không có ý nghĩa.
- Pipeline function đơn giản đã đủ.

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
