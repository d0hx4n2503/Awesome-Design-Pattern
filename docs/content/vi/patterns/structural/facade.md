---
title: "Facade"
slug: "facade"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/facade/README.md"
---

# Facade

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Facade provides a simple, stable interface over a more complex subsystem.

## Vấn đề

Client code often needs to coordinate several services to complete one business workflow. If every caller knows the subsystem details, the workflow is duplicated and changes become risky.

## Giải pháp

Create a facade that exposes a high-level operation. The facade orchestrates the subsystem internally while clients depend on one clear API.

## Triển khai TypeScript

This implementation models order placement:

- `InventoryService`, `PaymentService`, and `ShippingService` are subsystem services.
- `OrderFacade` coordinates the workflow.
- Callers place an order through one method instead of orchestrating every subsystem.

Run it from the repository root:

```bash
npm run facade
```

## Khi nên dùng

- A workflow requires several subsystem calls.
- Client code is coupled to too many internal services.
- You want a clean module or service boundary.
- The subsystem is valid but too detailed for most callers.

## Khi không nên dùng

- The facade becomes a god object.
- It hides important domain decisions from callers.
- The subsystem is already simple and stable.

## Lợi ích

- Reduces coupling at module boundaries.
- Centralizes workflow orchestration.
- Makes common operations easier to use correctly.

## Đánh đổi

- Can become too broad if not scoped carefully.
- May hide useful lower-level capabilities.
- Needs clear naming to avoid becoming a vague service layer.

## Pattern liên quan

- Adapter
- Mediator
- Proxy

## Góc nhìn thực tế

Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.

For Facade, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Third-party API boundaries where Facade keeps responsibilities separated.
- Legacy migration layers where Facade keeps responsibilities separated.
- UI component composition where Facade keeps responsibilities separated.
- Cross-cutting wrappers such as caching, logging, or access checks where Facade keeps responsibilities separated.

## Câu hỏi ra quyết định

- Which interface should client code depend on?
- Where should translation, composition, or access control live?
- Does this abstraction reduce coupling or just rename it?
- Use it to expose one task-focused operation over a complex subsystem.
- Avoid letting the facade become a dumping ground for unrelated workflows.

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
