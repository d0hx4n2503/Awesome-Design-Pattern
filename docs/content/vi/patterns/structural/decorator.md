---
title: "Decorator"
slug: "decorator"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/decorator/README.md"
---

# Decorator

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Decorator adds behavior to an object by wrapping it with another object that follows the same interface.

## Vấn đề

Feature combinations can explode when modeled with inheritance. For example, logging, caching, retrying, metrics, and authorization can be combined in many ways. Creating a subclass for every combination quickly becomes unmaintainable.

## Giải pháp

Keep the core object focused and wrap it with decorators that add one behavior at a time. Because decorators implement the same interface as the wrapped object, they can be stacked.

## Triển khai TypeScript

This implementation models report generation:

- `ReportGenerator` is the common interface.
- `SalesReportGenerator` produces the base report.
- `TimestampReportDecorator` adds generated-at metadata.
- `SignatureReportDecorator` adds an approval signature.

Run it from the repository root:

```bash
npm run decorator
```

## Khi nên dùng

- Behavior needs to be composed dynamically.
- Inheritance would create too many subclasses.
- You want to add cross-cutting behavior without modifying the core object.

## Khi không nên dùng

- The wrapping order is unclear or fragile.
- Debugging nested wrappers would be more expensive than the flexibility gained.
- A simple function composition would be enough.

## Lợi ích

- Supports open/closed extension.
- Keeps each behavior small and focused.
- Allows runtime composition.

## Đánh đổi

- Adds object nesting.
- Ordering can affect behavior.
- Stack traces and debugging can become less direct.

## Pattern liên quan

- Proxy
- Composite
- Strategy

## Góc nhìn thực tế

Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.

For Decorator, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Third-party API boundaries where Decorator keeps responsibilities separated.
- Legacy migration layers where Decorator keeps responsibilities separated.
- UI component composition where Decorator keeps responsibilities separated.
- Cross-cutting wrappers such as caching, logging, or access checks where Decorator keeps responsibilities separated.

## Câu hỏi ra quyết định

- Which interface should client code depend on?
- Where should translation, composition, or access control live?
- Does this abstraction reduce coupling or just rename it?
- Use it to stack optional behavior while preserving the same interface.
- Make decorator ordering explicit because behavior can be order-sensitive.

## Checklist thiết kế

- Start with the client code: define the interface you want callers to depend on.
- Keep concrete classes small and named after one responsibility.
- Make creation, selection, delegation, or notification rules explicit instead of hidden in conditionals.
- Prefer composition roots for wiring objects together.
- Document the reason for using the pattern so future contributors do not cargo-cult it.

## Lỗi thường gặp

- Adding the pattern before the code has a real variation point.
- Creating abstractions that only rename concrete classes.
- Hiding important runtime behavior so debugging becomes harder.
- Letting examples stay toy-sized without showing where the pattern boundary sits in real code.
- Forgetting tests for negative paths, invalid states, or fallback behavior.

## Hướng dẫn kiểm thử

- Test through the public abstraction, not private implementation details.
- Use fakes or test doubles for collaborators so the pattern seam is verified.
- Add one integration-style test proving the objects are wired correctly.
- Cover edge cases that motivated the pattern: missing strategy, rejected state transition, failed handler, invalid factory family, stale proxy cache, or similar.
- Keep tests named after behavior and business outcome rather than pattern terminology.

## Dấu hiệu refactor

- The pattern is useful when adding a new variation no longer requires editing stable caller code.
- It is probably overdesigned when every new class has only one trivial method and no independent reason to exist.
- If contributors cannot explain the runtime flow quickly, simplify the wiring or improve names.
- If tests must mock too many layers, the abstraction boundary is likely in the wrong place.
