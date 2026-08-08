# GitHub Configuration

Thư mục này chứa cấu hình vận hành repo trên GitHub.

## Nội Dung

- `ISSUE_TEMPLATE/bug_report.yml`: template báo lỗi tài liệu hoặc pattern.
- `PULL_REQUEST_TEMPLATE/pattern-docs.md`: checklist cho PR cập nhật docs.
- `workflows/validate-docs.yml`: workflow kiểm tra cấu trúc documentation-first.

## Nguyên Tắc

- Giữ `patterns/` chỉ có 23 pattern folders.
- Không thêm source code vào `patterns/` khi repo còn ở giai đoạn documentation-first.
- Mọi automation GitHub nên đặt trong `.github/`, không tạo folder `github/` ở root.
