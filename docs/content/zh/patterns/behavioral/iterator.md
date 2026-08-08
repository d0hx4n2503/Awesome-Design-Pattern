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

## 实战视角

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Iterator, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## 真实场景

- Business rules that vary by tenant or product where Iterator keeps responsibilities separated.
- Workflow orchestration where Iterator keeps responsibilities separated.
- Event-driven UI or domain flows where Iterator keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Iterator keeps responsibilities separated.

## 决策问题

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it to hide traversal details such as pagination, cursors, or tree walking.
- Document whether iteration is lazy, eager, reusable, or one-shot.

## 设计检查清单

- Start with the client code: define the interface you want callers to depend on.
- Keep concrete classes small and named after one responsibility.
- Make creation, selection, delegation, or notification rules explicit instead of hidden in conditionals.
- Prefer composition roots for wiring objects together.
- Document the reason for using the pattern so future contributors do not cargo-cult it.

## 常见错误

- Adding the pattern before the code has a real variation point.
- Creating abstractions that only rename concrete classes.
- Hiding important runtime behavior so debugging becomes harder.
- Letting examples stay toy-sized without showing where the pattern boundary sits in real code.
- Forgetting tests for negative paths, invalid states, or fallback behavior.

## 测试指南

- Test through the public abstraction, not private implementation details.
- Use fakes or test doubles for collaborators so the pattern seam is verified.
- Add one integration-style test proving the objects are wired correctly.
- Cover edge cases that motivated the pattern: missing strategy, rejected state transition, failed handler, invalid factory family, stale proxy cache, or similar.
- Keep tests named after behavior and business outcome rather than pattern terminology.

## 重构信号

- The pattern is useful when adding a new variation no longer requires editing stable caller code.
- It is probably overdesigned when every new class has only one trivial method and no independent reason to exist.
- If contributors cannot explain the runtime flow quickly, simplify the wiring or improve names.
- If tests must mock too many layers, the abstraction boundary is likely in the wrong place.
