---
title: "Memento"
slug: "memento"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/memento/README.md"
---

# Memento

## Mục đích

Lưu và khôi phục state snapshot mà không expose internals của object.

## Vấn đề

Undo/rollback/draft recovery cần state cũ; nếu caller copy field private sẽ phá encapsulation.

## Ý tưởng cốt lõi

Originator tạo memento immutable; caretaker chỉ lưu giữ; originator tự restore từ snapshot.

## Góc nhìn thực tế

Memento không nên được dùng chỉ vì tên pattern nghe "xịn". Nó chỉ đáng dùng khi giúp code bớt phụ thuộc sai chỗ, làm thay đổi trong tương lai rẻ hơn, và tạo seam rõ ràng để test.

## Tình huống áp dụng thực tế

- Dự án TypeScript có phần hành vi đang tăng biến thể.
- Code bắt đầu có nhiều nhánh điều kiện quanh cùng một quyết định.
- Team cần một cấu trúc đủ rõ để người mới đọc vẫn hiểu runtime flow.

## Khi nên dùng

- Cần undo/redo.
- Cần checkpoint trước thao tác rủi ro.
- State restore phải atomic.

## Khi không nên dùng

- State quá lớn.
- Snapshot chứa dữ liệu nhạy cảm khó kiểm soát.
- Event sourcing phù hợp hơn.

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
