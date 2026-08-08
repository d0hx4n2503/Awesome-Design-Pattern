# Contributing

Cảm ơn bạn muốn đóng góp cho **Awe Design Pattern**. Repo này ưu tiên học rõ bản chất pattern, tránh biến design pattern thành “nghi thức gọi tên”.

## Nguyên Tắc Chung

- Giữ ví dụ nhỏ, đọc được, và bám sát một vấn đề cụ thể.
- Không thêm code vào `patterns/` trong giai đoạn documentation-first.
- Mỗi pattern nên được cập nhật độc lập để commit history dễ theo dõi.
- Tránh over-engineering: pattern chỉ có giá trị khi nó làm thiết kế dễ hiểu hơn.

## Format README Cho Pattern

Mỗi pattern README nên có các phần:

- Vấn đề pattern giải quyết
- Ý tưởng cốt lõi
- Khi nào nên dùng
- Khi không nên dùng
- Ví dụ thực tế
- Ưu điểm
- Nhược điểm
- Pattern liên quan

## Commit Convention

Gợi ý message:

- `docs: update root overview`
- `docs: add creational pattern notes`
- `docs: add structural pattern notes`
- `docs: add behavioral pattern notes`

## Review Checklist

- Nội dung có giúp người mới hiểu “vì sao cần pattern” không?
- Có nêu trade-off thay vì chỉ nói ưu điểm không?
- Có tránh thêm code khi chưa tới giai đoạn implementation không?
- Có giữ đúng 23 GoF patterns không?
