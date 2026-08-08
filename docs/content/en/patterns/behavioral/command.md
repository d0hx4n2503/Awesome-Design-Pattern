---
title: "Command"
slug: "command"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/command/README.md"
---

# Command

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

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Command, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where Command keeps responsibilities separated.
- Workflow orchestration where Command keeps responsibilities separated.
- Event-driven UI or domain flows where Command keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Command keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when actions need queuing, retrying, auditing, undo, or delayed execution.
- Keep command names aligned with business actions rather than technical methods.

## Design Checklist

- Start with the client code: define the interface you want callers to depend on.
- Keep concrete classes small and named after one responsibility.
- Make creation, selection, delegation, or notification rules explicit instead of hidden in conditionals.
- Prefer composition roots for wiring objects together.
- Document the reason for using the pattern so future contributors do not cargo-cult it.

## Common Mistakes

- Adding the pattern before the code has a real variation point.
- Creating abstractions that only rename concrete classes.
- Hiding important runtime behavior so debugging becomes harder.
- Letting examples stay toy-sized without showing where the pattern boundary sits in real code.
- Forgetting tests for negative paths, invalid states, or fallback behavior.

## Testing Guidance

- Test through the public abstraction, not private implementation details.
- Use fakes or test doubles for collaborators so the pattern seam is verified.
- Add one integration-style test proving the objects are wired correctly.
- Cover edge cases that motivated the pattern: missing strategy, rejected state transition, failed handler, invalid factory family, stale proxy cache, or similar.
- Keep tests named after behavior and business outcome rather than pattern terminology.

## Refactoring Signals

- The pattern is useful when adding a new variation no longer requires editing stable caller code.
- It is probably overdesigned when every new class has only one trivial method and no independent reason to exist.
- If contributors cannot explain the runtime flow quickly, simplify the wiring or improve names.
- If tests must mock too many layers, the abstraction boundary is likely in the wrong place.
