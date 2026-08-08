---
title: "Iterator"
slug: "iterator"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/iterator/README.md"
---

# Iterator

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Iterator provides a standard way to traverse a collection without exposing its internal representation.

## Vấn đề

Client code often needs to traverse data, but it should not depend on whether that data is stored as an array, tree, page cursor, or custom structure. Exposing internal storage makes later changes expensive.

## Giải pháp

Expose iteration through a stable iterator protocol. Clients consume values sequentially while the collection owns traversal details.

## Triển khai TypeScript

This implementation models paginated search results:

- `PaginatedResults` stores items internally by pages.
- It implements `Iterable<T>` so callers can use `for...of`.
- Clients do not need to know how pages are stored.

Run it from the repository root:

```bash
npm run iterator
```

## Khi nên dùng

- Collection internals should remain hidden.
- You need a consistent traversal API.
- A collection supports custom ordering or pagination.
- Clients should not manage indexes manually.

## Khi không nên dùng

- A plain array is already enough.
- Traversal requires highly specialized performance controls.
- The iterator hides important side effects such as network calls.

## Lợi ích

- Encapsulates traversal logic.
- Keeps client code simple.
- Allows collection internals to change later.

## Đánh đổi

- Adds abstraction around simple loops.
- Lazy iteration can surprise callers if side effects are involved.
- Custom iterators need clear naming and tests.

## Pattern liên quan

- Composite
- Visitor
- Interpreter
