---
title: "Builder"
slug: "builder"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/builder/README.md"
---

# Builder

## Mục đích

Tạo object phức tạp từng bước với tên method rõ nghĩa và validation ở bước build.

## Vấn đề

Constructor nhiều tham số hoặc object config lớn dễ sai thứ tự, thiếu field bắt buộc, hoặc tạo trạng thái không hợp lệ.

## Ý tưởng cốt lõi

Builder gom lựa chọn cấu hình, đặt default rõ ràng và chỉ trả object khi dữ liệu hợp lệ.

## Góc nhìn thực tế

Builder không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần khởi tạo đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Có nhiều option/default/combination.
- Muốn code tạo object đọc như mô tả nghiệp vụ.
- Test fixture cần setup dễ hiểu.

## Khi không nên dùng

- Object chỉ có vài field đơn giản.
- Object literal + validation đã đủ.
- Builder cho phép state sai thoát ra ngoài.

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
