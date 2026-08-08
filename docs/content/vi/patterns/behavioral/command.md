---
title: "Command"
slug: "command"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/command/README.md"
---

# Command

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

## Intent

Command encapsulates a request or action as an object.

## Problem

Some systems need to queue, retry, log, audit, or undo actions. If callers directly invoke business operations, those capabilities become scattered and hard to standardize.

## Solution

Represent each action as a command object with an `execute()` method. An invoker can run commands without knowing the receiver details.

## TypeScript Implementation

This implementation models account operations:

- `Command` is the executable action interface.
- `DepositCommand` and `WithdrawCommand` encapsulate account actions.
- `CommandBus` executes commands and records an audit log.

Run it from the repository root:

```bash
npm run command
```

## When To Use

- Queueing or scheduling work.
- Auditing user actions.
- Retrying failed operations.
- Implementing undo/redo workflows.

## When Not To Use

- The action is simple and never needs to be passed around.
- Command classes add ceremony without useful behavior.
- A plain function would be clearer.

## Benefits

- Decouples invoker from receiver.
- Makes actions easy to log, queue, and test.
- Gives behavior a first-class representation.

## Trade-offs

- Can create many small classes.
- Flow may be less direct than method calls.
- Command payloads need careful validation.

## Related Patterns

- Memento
- Chain of Responsibility
- Strategy
