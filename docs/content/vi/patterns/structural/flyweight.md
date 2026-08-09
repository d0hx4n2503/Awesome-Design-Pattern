---
title: "Flyweight"
slug: "flyweight"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/flyweight/README.md"
---

# Flyweight

## Mục đích

Chia sẻ phần state bất biến giữa rất nhiều object nhỏ để giảm memory.

## Vấn đề

Hàng nghìn marker/glyph/tile lặp lại cùng style hoặc metadata gây tốn memory không cần thiết.

## Ý tưởng cốt lõi

Tách intrinsic state dùng chung khỏi extrinsic state riêng từng lần dùng.

## Góc nhìn thực tế

Flyweight không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần cấu trúc đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Có rất nhiều object giống nhau.
- Memory pressure đo được.
- Shared state immutable.

## Khi không nên dùng

- Số object nhỏ.
- Shared state mutable/user-specific.
- Chưa đo được lợi ích memory.

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
