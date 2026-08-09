---
title: "Abstract Factory"
slug: "abstract-factory"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/abstract-factory/README.md"
---

# Abstract Factory

## Mục đích

Tạo các họ object liên quan sao cho chúng luôn tương thích với nhau.

## Vấn đề

Client tự chọn từng concrete product có thể vô tình trộn light button với dark modal hoặc AWS storage với GCP queue.

## Ý tưởng cốt lõi

Abstract factory tạo nhiều product interface thuộc cùng một family; concrete factory đảm bảo consistency.

## Góc nhìn thực tế

Abstract Factory không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần khởi tạo đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Cần family theo theme/provider/platform.
- Muốn chặn tổ hợp product không hợp lệ.
- Runtime environment quyết định family.

## Khi không nên dùng

- Chỉ có một product thay đổi.
- Family không thật sự liên quan.
- Factory interface phình quá nhanh.

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
