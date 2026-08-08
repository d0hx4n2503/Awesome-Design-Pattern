---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/prototype/README.md"
---

# Prototype

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Create new objects by cloning an existing object instead of constructing from scratch.

## Vấn đề

Repeatedly setting up similar objects duplicates configuration and risks inconsistent defaults.

## Giải pháp

Use a configured prototype as a template and clone it with explicit overrides.

## Triển khai TypeScript

`CampaignPrototype` clones campaign templates while copying mutable arrays safely.

```bash
npm run prototype
```

## Đánh đổi

- Reduces repetitive setup.
- Clone semantics must be explicit.

## Góc nhìn thực tế

Creational patterns are about controlling object creation so callers do not depend on concrete construction details.

For Prototype, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Framework integration points where Prototype keeps responsibilities separated.
- Configuration-driven runtime behavior where Prototype keeps responsibilities separated.
- Test fixture creation where Prototype keeps responsibilities separated.
- Infrastructure objects whose setup should be centralized where Prototype keeps responsibilities separated.

## Câu hỏi ra quyết định

- Who owns object creation?
- Which concrete type should callers be allowed to know?
- Can invalid combinations be prevented at construction time?
- Use it when a configured baseline object should be copied with focused overrides.
- Be explicit about deep copy vs shallow copy semantics.

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
