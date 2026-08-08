# Composite

## Intent

Treat individual objects and groups through the same interface.

## Problem

Tree structures contain leaves and containers. Client code becomes noisy when it handles each kind separately.

## Solution

Define a common component interface. Leaves render directly; composites delegate to children recursively.

## TypeScript Implementation

`MenuItem` and `MenuGroup` both implement `MenuComponent`.

```bash
npm run composite
```

## Trade-offs

- Excellent for tree-like structures.
- Recursive behavior needs tests.
- Leaf and group behavior should stay compatible.

## Practical Perspective

Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.

For Composite, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Third-party API boundaries where Composite keeps responsibilities separated.
- Legacy migration layers where Composite keeps responsibilities separated.
- UI component composition where Composite keeps responsibilities separated.
- Cross-cutting wrappers such as caching, logging, or access checks where Composite keeps responsibilities separated.

## Decision Questions

- Which interface should client code depend on?
- Where should translation, composition, or access control live?
- Does this abstraction reduce coupling or just rename it?
- Use it for tree structures where leaf and group should be treated uniformly.
- Guard against meaningless operations on leaves and accidental cycles.

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
