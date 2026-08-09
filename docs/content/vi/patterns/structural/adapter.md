---
title: "Adapter"
slug: "adapter"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/adapter/README.md"
---

# Adapter

## Mục đích

Chuyển interface bên ngoài hoặc legacy sang interface mà application thật sự muốn dùng.

## Vấn đề

SDK bên thứ ba thường có data shape, error model và naming khác domain. Nếu dùng trực tiếp, chi tiết vendor lan khắp codebase.

## Ý tưởng cốt lõi

Application sở hữu target interface. Adapter đứng ở boundary, chuyển đổi input/output/error giữa domain và hệ thống ngoài.

## Góc nhìn thực tế

Adapter không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần cấu trúc đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Tích hợp payment, email, storage, analytics SDK.
- Migration từ legacy API.
- Muốn cô lập vendor lock-in.

## Khi không nên dùng

- Bạn sở hữu cả hai interface và có thể refactor thẳng.
- Adapter chỉ đổi tên method mà không bảo vệ domain.
- Boundary quá lớn cần anti-corruption layer đầy đủ.

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
