---
title: "Interpreter"
slug: "interpreter"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/interpreter/README.md"
---

# Interpreter

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Represent a small grammar and evaluate sentences in that grammar.

## Vấn đề

Small rule systems can turn into rigid conditional logic when rules are hard-coded.

## Giải pháp

Represent grammar rules as expression objects that interpret themselves against a context.

## Triển khai TypeScript

Boolean feature rules are composed from variable, AND, and OR expressions.

```bash
npm run interpreter
```

## Đánh đổi

- Good for small DSLs.
- Complex grammars should use a parser library.

## Góc nhìn thực tế

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Interpreter, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Business rules that vary by tenant or product where Interpreter keeps responsibilities separated.
- Workflow orchestration where Interpreter keeps responsibilities separated.
- Event-driven UI or domain flows where Interpreter keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Interpreter keeps responsibilities separated.

## Câu hỏi ra quyết định

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it for small domain-specific rule languages or expression trees.
- Do not grow it into a full programming language accidentally.

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
