---
title: "Proxy"
slug: "proxy"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/proxy/README.md"
---

# Proxy

## Mục đích

Đứng thay object thật để kiểm soát access nhưng giữ cùng interface.

## Vấn đề

Caching, auth, lazy loading hoặc remote call nếu nhét vào subject sẽ trộn infrastructure concern với logic lõi.

## Ý tưởng cốt lõi

Proxy implement cùng interface, quyết định khi nào delegate cho subject thật.

## Góc nhìn thực tế

Proxy không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần cấu trúc đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Cần cache/lazy/auth/rate limit.
- Client không cần biết đang gọi proxy hay object thật.
- Muốn cô lập cross-cutting concern.

## Khi không nên dùng

- Interface cần đổi; dùng Adapter.
- Behavior tùy chọn cần stack; cân nhắc Decorator.
- Proxy che giấu latency/security quá nhiều.

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
