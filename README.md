# Awe Design Pattern

Repo học và triển khai đầy đủ **23 Gang of Four Design Patterns** theo hướng thực chiến: hiểu vấn đề, biết khi nào dùng, đọc ví dụ minh họa, và so sánh trade-off.

## Mục Tiêu

- Xây dựng ví dụ rõ ràng cho toàn bộ 23 design patterns.
- Sắp xếp pattern theo **mức độ ưu tiên học** và **độ phổ biến khi đi làm**.
- Mỗi pattern có tài liệu riêng trong `patterns/`, chưa viết code cho đến khi repo bước sang giai đoạn implementation.
- Ưu tiên giải thích bằng ngữ cảnh thực tế thay vì chỉ chép định nghĩa sách vở.

## Trạng Thái Repo

- Giai đoạn hiện tại: **documentation-first**.
- Thư mục `patterns/` chỉ chứa đúng 23 thư mục pattern và README mô tả, chưa có source code.
- Khi bắt đầu code, mỗi pattern sẽ được triển khai thành module riêng để dễ review và học từng phần.

## Thứ Tự Ưu Tiên Học

### Priority 1 — Rất Phổ Biến, Nên Học Trước

| Pattern | Nhóm | Độ phổ biến | Vì sao nên ưu tiên |
|---|---|---:|---|
| Strategy | Behavioral | Rất cao | Thay đổi thuật toán/hành vi linh hoạt, dùng nhiều trong service, validation, pricing, payment. |
| Factory Method | Creational | Rất cao | Tạo object qua abstraction, thường gặp trong framework và clean architecture. |
| Adapter | Structural | Rất cao | Kết nối interface không tương thích, cực hữu ích khi tích hợp API/thư viện bên ngoài. |
| Observer | Behavioral | Rất cao | Nền tảng của event, pub/sub, notification, UI state, reactive programming. |
| Decorator | Structural | Cao | Mở rộng hành vi mà không sửa class gốc, gặp nhiều trong middleware, stream, wrapper. |
| Facade | Structural | Cao | Che giấu hệ thống phức tạp sau API đơn giản, rất hợp với service layer/module boundary. |
| Builder | Creational | Cao | Tạo object phức tạp dễ đọc, hay dùng với config, query, request, test data. |
| Command | Behavioral | Cao | Đóng gói action, hữu ích cho queue, undo/redo, job, transaction script. |
| Iterator | Behavioral | Cao | Duyệt collection mà không lộ cấu trúc bên trong, gặp trong hầu hết ngôn ngữ/framework. |

### Priority 2 — Phổ Biến Theo Ngữ Cảnh

| Pattern | Nhóm | Độ phổ biến | Khi thường gặp |
|---|---|---:|---|
| Singleton | Creational | Cao | Config, logger, connection manager; cần học cả rủi ro global state/test khó. |
| Template Method | Behavioral | Trung bình cao | Chuẩn hóa workflow nhưng cho subclass tùy biến từng bước. |
| Proxy | Structural | Trung bình cao | Lazy loading, cache, access control, remote object, logging wrapper. |
| Composite | Structural | Trung bình | Cấu trúc cây như menu, folder, UI component, organization chart. |
| State | Behavioral | Trung bình | Object đổi hành vi theo trạng thái: order, workflow, document, game character. |
| Chain of Responsibility | Behavioral | Trung bình | Pipeline xử lý request: middleware, validation chain, approval flow. |
| Abstract Factory | Creational | Trung bình | Tạo họ object liên quan, hữu ích với nhiều platform/theme/provider. |
| Prototype | Creational | Trung bình | Clone object/template khi tạo mới tốn kém hoặc cần copy cấu hình mẫu. |

### Priority 3 — Ít Gặp Hơn Nhưng Quan Trọng

| Pattern | Nhóm | Độ phổ biến | Khi nên học kỹ |
|---|---|---:|---|
| Mediator | Behavioral | Trung bình thấp | Giảm phụ thuộc chéo giữa nhiều object/component. |
| Bridge | Structural | Trung bình thấp | Tách abstraction khỏi implementation khi cả hai cùng thay đổi độc lập. |
| Visitor | Behavioral | Trung bình thấp | Thêm operation mới cho cấu trúc object ổn định, hay gặp trong AST/compiler/tooling. |
| Memento | Behavioral | Thấp | Lưu/khôi phục trạng thái, undo snapshot, editor/history. |
| Flyweight | Structural | Thấp | Tối ưu bộ nhớ khi có rất nhiều object giống nhau, ví dụ text editor/game/map. |
| Interpreter | Behavioral | Thấp | Xử lý grammar/DSL đơn giản; ít dùng trực tiếp vì thường có parser/library thay thế. |

## Danh Sách Đầy Đủ 23 Patterns

### Creational Patterns

1. Abstract Factory
2. Builder
3. Factory Method
4. Prototype
5. Singleton

### Structural Patterns

1. Adapter
2. Bridge
3. Composite
4. Decorator
5. Facade
6. Flyweight
7. Proxy

### Behavioral Patterns

1. Chain of Responsibility
2. Command
3. Interpreter
4. Iterator
5. Mediator
6. Memento
7. Observer
8. State
9. Strategy
10. Template Method
11. Visitor

## Pattern Bị Thiếu Trong README Cũ

README ban đầu có 21 pattern. Bộ GoF chuẩn có 23 pattern, còn thiếu:

- `Interpreter`
- `Iterator`

## Cấu Trúc Repo

```text
Awe-Design-Pattern/
├── docs/
│   ├── learning-roadmap.md
│   └── pattern-index.md
├── creational/
│   ├── abstract-factory/
│   ├── builder/
│   ├── factory-method/
│   ├── prototype/
│   └── singleton/
├── structural/
│   ├── adapter/
│   ├── bridge/
│   ├── composite/
│   ├── decorator/
│   ├── facade/
│   ├── flyweight/
│   └── proxy/
├── behavioral/
│   ├── chain-of-responsibility/
│   ├── command/
│   ├── interpreter/
│   ├── iterator/
│   ├── mediator/
│   ├── memento/
│   ├── observer/
│   ├── state/
│   ├── strategy/
│   ├── template-method/
│   └── visitor/
└── README.md
```

## Template Cho Mỗi Pattern

Mỗi thư mục pattern nên có README riêng theo format:

```md
# Pattern Name

## Vấn Đề

Pattern này giải quyết vấn đề gì?

## Ý Tưởng

Cách pattern tổ chức object/class.

## Khi Nào Dùng

- Use case 1
- Use case 2

## Khi Không Nên Dùng

- Trường hợp dễ over-engineering

## Ví Dụ Code

Ví dụ tối giản, dễ chạy.

## Ưu / Nhược Điểm

Trade-off thực tế.
```

## Lộ Trình Học Khuyến Nghị

1. Học nhóm **Priority 1** trước để dùng được ngay trong dự án thật.
2. Sau đó học **Priority 2** để nhận ra pattern trong framework và kiến trúc backend/frontend.
3. Cuối cùng học **Priority 3** để hoàn thiện tư duy thiết kế và hiểu các tình huống đặc thù.

Xem thêm:

- `docs/learning-roadmap.md`
- `docs/pattern-index.md`
