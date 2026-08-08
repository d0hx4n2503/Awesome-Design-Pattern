---
title: "Mediator"
slug: "mediator"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/mediator/README.md"
---

# Mediator

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Centralize communication between collaborating objects so they do not depend on each other directly.

## Vấn đề

Many-to-many component communication creates tangled dependencies.

## Giải pháp

Participants talk to a mediator, and the mediator coordinates delivery.

## Triển khai TypeScript

`ChatRoom` routes messages between `ChatUser` instances.

```bash
npm run mediator
```

## Đánh đổi

- Reduces direct coupling.
- Mediator complexity can grow quickly.

## Góc nhìn thực tế

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Mediator, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Business rules that vary by tenant or product where Mediator keeps responsibilities separated.
- Workflow orchestration where Mediator keeps responsibilities separated.
- Event-driven UI or domain flows where Mediator keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Mediator keeps responsibilities separated.

## Câu hỏi ra quyết định

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when many components coordinate through a shared collaboration policy.
- Split large mediators before they become god objects.

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
