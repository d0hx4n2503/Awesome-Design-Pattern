---
title: "Command"
slug: "command"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/command/README.md"
---

# Command

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Command encapsulates a request or action as an object.

## 问题

Some systems need to queue, retry, log, audit, or undo actions. If callers directly invoke business operations, those capabilities become scattered and hard to standardize.

## 解决方案

Represent each action as a command object with an `execute()` method. An invoker can run commands without knowing the receiver details.

## TypeScript 实现

This implementation models account operations:

- `Command` is the executable action interface.
- `DepositCommand` and `WithdrawCommand` encapsulate account actions.
- `CommandBus` executes commands and records an audit log.

Run it from the repository root:

```bash
npm run command
```

## 适用场景

- Queueing or scheduling work.
- Auditing user actions.
- Retrying failed operations.
- Implementing undo/redo workflows.

## 不适用场景

- The action is simple and never needs to be passed around.
- Command classes add ceremony without useful behavior.
- A plain function would be clearer.

## 优点

- Decouples invoker from receiver.
- Makes actions easy to log, queue, and test.
- Gives behavior a first-class representation.

## 权衡

- Can create many small classes.
- Flow may be less direct than method calls.
- Command payloads need careful validation.

## 相关模式

- Memento
- Chain of Responsibility
- Strategy
