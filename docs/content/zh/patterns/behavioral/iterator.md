---
title: "Iterator"
slug: "iterator"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/iterator/README.md"
---

# Iterator

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Iterator provides a standard way to traverse a collection without exposing its internal representation.

## 问题

Client code often needs to traverse data, but it should not depend on whether that data is stored as an array, tree, page cursor, or custom structure. Exposing internal storage makes later changes expensive.

## 解决方案

Expose iteration through a stable iterator protocol. Clients consume values sequentially while the collection owns traversal details.

## TypeScript 实现

This implementation models paginated search results:

- `PaginatedResults` stores items internally by pages.
- It implements `Iterable<T>` so callers can use `for...of`.
- Clients do not need to know how pages are stored.

Run it from the repository root:

```bash
npm run iterator
```

## 适用场景

- Collection internals should remain hidden.
- You need a consistent traversal API.
- A collection supports custom ordering or pagination.
- Clients should not manage indexes manually.

## 不适用场景

- A plain array is already enough.
- Traversal requires highly specialized performance controls.
- The iterator hides important side effects such as network calls.

## 优点

- Encapsulates traversal logic.
- Keeps client code simple.
- Allows collection internals to change later.

## 权衡

- Adds abstraction around simple loops.
- Lazy iteration can surprise callers if side effects are involved.
- Custom iterators need clear naming and tests.

## 相关模式

- Composite
- Visitor
- Interpreter
