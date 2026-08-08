---
title: "Observer"
slug: "observer"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/observer/README.md"
---

# Observer

## Intent

Observer defines a one-to-many dependency so that subscribers are notified when a subject changes.

## Problem

When one object changes state, several other parts of the system may need to react. If the subject directly calls every dependent object, it becomes tightly coupled to all consumers and every new reaction requires editing the subject.

## Solution

Let observers subscribe to a subject. The subject publishes events through a stable observer interface without knowing what each observer does with the update.

## TypeScript Implementation

This implementation models order status updates:

- `OrderStatusSubject` owns the order state.
- `OrderObserver` defines the subscriber contract.
- `EmailNotifier` and `AnalyticsTracker` react independently.
- New observers can be added without changing the subject.

Run it from the repository root:

```bash
npm run observer
```

## When To Use

- Event notification.
- Pub/sub style workflows.
- UI state updates.
- Domain events where multiple reactions are expected.

## When Not To Use

- There is only one known receiver.
- Ordering of side effects is critical but not controlled.
- Debugging event chains would become too difficult.

## Benefits

- Reduces coupling between subject and subscribers.
- Supports adding reactions without changing the subject.
- Keeps event producers focused on state changes.

## Trade-offs

- Event flow can be harder to trace.
- Subscriber failures need explicit handling.
- Too many observers can create hidden side effects.

## Related Patterns

- Mediator
- Strategy
- Chain of Responsibility

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Observer, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where Observer keeps responsibilities separated.
- Workflow orchestration where Observer keeps responsibilities separated.
- Event-driven UI or domain flows where Observer keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Observer keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when many subscribers react independently to one subject event.
- Always provide unsubscribe behavior to prevent leaks.

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
