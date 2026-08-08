# Singleton

## Intent

Ensure one controlled instance exists for a class and expose a single access point to it.

## Problem

Shared runtime services such as configuration can become inconsistent when multiple instances are created independently.

## Solution

Hide construction behind a static accessor. Keep the shared object small, explicit, and test-resettable.

## TypeScript Implementation

`AppConfig` stores process-wide settings. `getInstance()` always returns the same object, while `resetForTest()` keeps tests isolated.

```bash
npm run singleton
```

## When To Use

- One shared process-level object is required.
- Multiple instances would create inconsistent state.
- Central lifecycle control is valuable.

## Trade-offs

- Can hide dependencies.
- Mutable global state can make tests fragile.
- Dependency injection is often cleaner for application services.

## Related Patterns

- Factory Method
- Facade
- Flyweight

## Practical Perspective

Creational patterns are about controlling object creation so callers do not depend on concrete construction details.

For Singleton, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Framework integration points where Singleton keeps responsibilities separated.
- Configuration-driven runtime behavior where Singleton keeps responsibilities separated.
- Test fixture creation where Singleton keeps responsibilities separated.
- Infrastructure objects whose setup should be centralized where Singleton keeps responsibilities separated.

## Decision Questions

- Who owns object creation?
- Which concrete type should callers be allowed to know?
- Can invalid combinations be prevented at construction time?
- Use it only when one process-wide instance is a real invariant.
- Prefer dependency injection when global access would hide dependencies.

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
