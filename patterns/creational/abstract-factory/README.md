# Abstract Factory

## Intent

Create families of related objects without coupling clients to concrete classes.

## Problem

Applications often need compatible product families such as light/dark UI components or provider-specific clients.

## Solution

Expose a factory interface that creates a complete product family.

## TypeScript Implementation

`ThemeFactory` creates matching buttons and checkboxes for light or dark themes.

```bash
npm run abstract-factory
```

## Trade-offs

- Enforces product compatibility.
- Adding a new product type changes all factories.

## Practical Perspective

Creational patterns are about controlling object creation so callers do not depend on concrete construction details.

For Abstract Factory, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Framework integration points where Abstract Factory keeps responsibilities separated.
- Configuration-driven runtime behavior where Abstract Factory keeps responsibilities separated.
- Test fixture creation where Abstract Factory keeps responsibilities separated.
- Infrastructure objects whose setup should be centralized where Abstract Factory keeps responsibilities separated.

## Decision Questions

- Who owns object creation?
- Which concrete type should callers be allowed to know?
- Can invalid combinations be prevented at construction time?
- Use it when products must be created as compatible families.
- Watch for factory interfaces growing too large as the product family expands.

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
