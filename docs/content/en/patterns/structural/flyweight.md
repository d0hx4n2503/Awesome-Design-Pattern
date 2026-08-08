---
title: "Flyweight"
slug: "flyweight"
group: "structural"
groupLabel: "Structural"
source: "patterns/structural/flyweight/README.md"
---

# Flyweight

## Intent

Share common object state to reduce memory usage when many similar objects are needed.

## Problem

Large collections can waste memory by duplicating identical intrinsic data.

## Solution

Separate shared intrinsic state from per-use extrinsic state and reuse flyweights through a factory.

## TypeScript Implementation

`MarkerIconFactory` reuses map marker icons by type.

```bash
npm run flyweight
```

## Trade-offs

- Useful for large object counts.
- Premature use can overcomplicate code.

## Practical Perspective

Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.

For Flyweight, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Third-party API boundaries where Flyweight keeps responsibilities separated.
- Legacy migration layers where Flyweight keeps responsibilities separated.
- UI component composition where Flyweight keeps responsibilities separated.
- Cross-cutting wrappers such as caching, logging, or access checks where Flyweight keeps responsibilities separated.

## Decision Questions

- Which interface should client code depend on?
- Where should translation, composition, or access control live?
- Does this abstraction reduce coupling or just rename it?
- Use it only when many objects share measurable immutable state.
- Keep intrinsic shared state immutable and extrinsic state outside the flyweight.

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
