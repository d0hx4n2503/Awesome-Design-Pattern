# State

## Intent

Allow an object to change behavior when its internal state changes.

## Problem

Lifecycle-heavy objects often collect large conditional blocks based on state.

## Solution

Represent each state as an object. The context delegates behavior to the current state and controls transitions.

## TypeScript Implementation

`Order` delegates `pay()` and `ship()` to explicit state objects.

```bash
npm run state
```

## Trade-offs

- Reduces state conditionals.
- Adds more objects.
- State transitions need careful tests.

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For State, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where State keeps responsibilities separated.
- Workflow orchestration where State keeps responsibilities separated.
- Event-driven UI or domain flows where State keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where State keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when behavior depends on lifecycle state and transitions matter.
- Keep allowed and forbidden transitions explicit.

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
