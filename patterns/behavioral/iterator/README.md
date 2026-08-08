# Iterator

## Intent

Iterator provides a standard way to traverse a collection without exposing its internal representation.

## Problem

Client code often needs to traverse data, but it should not depend on whether that data is stored as an array, tree, page cursor, or custom structure. Exposing internal storage makes later changes expensive.

## Solution

Expose iteration through a stable iterator protocol. Clients consume values sequentially while the collection owns traversal details.

## TypeScript Implementation

This implementation models paginated search results:

- `PaginatedResults` stores items internally by pages.
- It implements `Iterable<T>` so callers can use `for...of`.
- Clients do not need to know how pages are stored.

Run it from the repository root:

```bash
npm run iterator
```

## When To Use

- Collection internals should remain hidden.
- You need a consistent traversal API.
- A collection supports custom ordering or pagination.
- Clients should not manage indexes manually.

## When Not To Use

- A plain array is already enough.
- Traversal requires highly specialized performance controls.
- The iterator hides important side effects such as network calls.

## Benefits

- Encapsulates traversal logic.
- Keeps client code simple.
- Allows collection internals to change later.

## Trade-offs

- Adds abstraction around simple loops.
- Lazy iteration can surprise callers if side effects are involved.
- Custom iterators need clear naming and tests.

## Related Patterns

- Composite
- Visitor
- Interpreter

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Iterator, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where Iterator keeps responsibilities separated.
- Workflow orchestration where Iterator keeps responsibilities separated.
- Event-driven UI or domain flows where Iterator keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Iterator keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it to hide traversal details such as pagination, cursors, or tree walking.
- Document whether iteration is lazy, eager, reusable, or one-shot.

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
