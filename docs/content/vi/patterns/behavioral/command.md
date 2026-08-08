---
title: "Command"
slug: "command"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/command/README.md"
---

# Command

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Command encapsulates a request or action as an object.

## Vấn đề

Some systems need to queue, retry, log, audit, or undo actions. If callers directly invoke business operations, those capabilities become scattered and hard to standardize.

## Giải pháp

Represent each action as a command object with an `execute()` method. An invoker can run commands without knowing the receiver details.

## Triển khai TypeScript

This implementation models account operations:

- `Command` is the executable action interface.
- `DepositCommand` and `WithdrawCommand` encapsulate account actions.
- `CommandBus` executes commands and records an audit log.

Run it from the repository root:

```bash
npm run command
```

## Khi nên dùng

- Queueing or scheduling work.
- Auditing user actions.
- Retrying failed operations.
- Implementing undo/redo workflows.

## Khi không nên dùng

- The action is simple and never needs to be passed around.
- Command classes add ceremony without useful behavior.
- A plain function would be clearer.

## Lợi ích

- Decouples invoker from receiver.
- Makes actions easy to log, queue, and test.
- Gives behavior a first-class representation.

## Đánh đổi

- Can create many small classes.
- Flow may be less direct than method calls.
- Command payloads need careful validation.

## Pattern liên quan

- Memento
- Chain of Responsibility
- Strategy

## Góc nhìn thực tế

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Command, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Tình huống áp dụng thực tế

- Business rules that vary by tenant or product where Command keeps responsibilities separated.
- Workflow orchestration where Command keeps responsibilities separated.
- Event-driven UI or domain flows where Command keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Command keeps responsibilities separated.

## Câu hỏi ra quyết định

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when actions need queuing, retrying, auditing, undo, or delayed execution.
- Keep command names aligned with business actions rather than technical methods.

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
