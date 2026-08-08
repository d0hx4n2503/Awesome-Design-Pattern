---
title: "Strategy Pattern"
slug: "strategy"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/strategy/README.md"
---

# Strategy Pattern

## Intent

Encapsulate interchangeable algorithms or policies behind a shared interface so the calling code can switch behavior without changing its own workflow.

## Problem

Business logic often accumulates conditional branches such as `if paymentType === ...`, `if customerTier === ...`, or `if shippingMethod === ...`. As those branches grow, the calling class starts owning too many rules and becomes harder to test.

## Core Idea

Move the varying behavior into separate strategy objects. The context depends only on the strategy interface, while each strategy owns one focused algorithm.

## When To Use

Use Strategy when behavior must change at runtime, when multiple algorithms share the same input/output shape, or when conditionals are growing around pricing, validation, sorting, payment, or routing rules.

## When Not To Use

Avoid Strategy when there is only one algorithm, when the interface would be forced and unclear, or when a simple function parameter is enough.

## Recognition Signs

- A class has multiple branches for variations of the same behavior.
- Adding a new rule requires editing unrelated workflow code.
- Several algorithms share the same contract but differ in execution details.

## Advantages

- Keeps each algorithm isolated and testable.
- Reduces conditional complexity in the context.
- Makes runtime behavior explicit through composition.

## Trade-Offs

- Adds more objects or functions to navigate.
- Can make runtime flow less obvious if strategies are selected indirectly.
- Is easy to overuse for behavior that does not actually vary.

## Related Patterns

- State also changes behavior, but the object usually owns its state transitions.
- Command encapsulates an action rather than an interchangeable algorithm.
- Template Method keeps the workflow in a base class and varies selected steps.

## TypeScript Implementation

This folder contains a runnable TypeScript implementation in `index.ts`.

The example models shipping cost calculation. `CheckoutService` depends on a `ShippingStrategy` interface, while concrete strategies such as economy, express, and free shipping provide interchangeable algorithms.

Run it from the repository root:

```bash
npm run strategy
```

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Strategy Pattern, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where Strategy keeps responsibilities separated.
- Workflow orchestration where Strategy keeps responsibilities separated.
- Event-driven UI or domain flows where Strategy keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Strategy keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when interchangeable algorithms share the same input/output contract.
- Select strategies outside the context so workflow code stays stable.

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
