---
title: "Decorator"
slug: "decorator"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/decorator/README.md"
---

# Decorator

## Mục đích

Bọc object để thêm behavior tùy chọn nhưng vẫn giữ nguyên interface.

## Vấn đề

Logging, caching, retry, auth nếu nhét vào core class sẽ làm class phình to; nếu dùng subclass cho mọi tổ hợp sẽ nổ số lượng class.

## Ý tưởng cốt lõi

Decorator implement cùng interface với object gốc, làm thêm việc trước/sau khi delegate.

## Góc nhìn thực tế

Decorator không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần cấu trúc đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Cần stack behavior như cache + log + retry.
- Muốn bật/tắt behavior bằng composition.
- Không muốn sửa class lõi.

## Khi không nên dùng

- Behavior làm đổi contract public.
- Thứ tự decorator quá khó hiểu.
- Function composition đơn giản đã đủ.

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
