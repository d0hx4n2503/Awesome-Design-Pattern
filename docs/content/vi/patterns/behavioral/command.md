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
