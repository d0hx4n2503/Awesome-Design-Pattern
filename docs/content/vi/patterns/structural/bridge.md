---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/bridge/README.md"
---

# Bridge

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Separate an abstraction from its implementation so both can evolve independently.

## Vấn đề

Two independent dimensions of variation can create a subclass explosion.

## Giải pháp

Keep one dimension as an abstraction and delegate the other to an implementation interface.

## Triển khai TypeScript

`CriticalAlert` can use different `DeliveryChannel` implementations.

```bash
npm run bridge
```

## Đánh đổi

- Avoids subclass explosion.
- Adds composition and interfaces.

## Góc nhìn thực tế

Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.

For Bridge, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Third-party API boundaries where Bridge keeps responsibilities separated.
- Legacy migration layers where Bridge keeps responsibilities separated.
- UI component composition where Bridge keeps responsibilities separated.
- Cross-cutting wrappers such as caching, logging, or access checks where Bridge keeps responsibilities separated.

## Câu hỏi ra quyết định

- Which interface should client code depend on?
- Where should translation, composition, or access control live?
- Does this abstraction reduce coupling or just rename it?
- Use it when two independent variation axes would otherwise create class explosion.
- Keep abstraction and implementation interfaces from leaking into each other.

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
