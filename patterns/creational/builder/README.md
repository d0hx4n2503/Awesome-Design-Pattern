# Builder

## Intent

Builder constructs complex objects step by step while keeping creation readable and valid.

## Problem

Objects with many optional fields often lead to long constructors, unclear parameter order, and partially valid states. This gets worse for configuration, requests, reports, and test data.

## Solution

Move construction into a builder that exposes meaningful methods and validates the final object before returning it.

## TypeScript Implementation

This implementation builds a deployment configuration:

- `DeploymentConfig` is the final immutable object shape.
- `DeploymentConfigBuilder` provides expressive construction methods.
- `build()` validates required fields and returns a complete config.

Run it from the repository root:

```bash
npm run builder
```

## When To Use

- Object construction has many optional parameters.
- Valid object creation requires multiple steps.
- Constructor calls are hard to read.
- Test data setup needs readable defaults.

## When Not To Use

- The object has only a few required fields.
- A plain object literal is clearer.
- The builder only duplicates setters without adding validation or readability.

## Benefits

- Improves readability at call sites.
- Prevents invalid partially constructed objects.
- Makes defaults and validation explicit.

## Trade-offs

- Adds another abstraction.
- Can become verbose for simple objects.
- Needs discipline to avoid mutable builder leaks.

## Related Patterns

- Factory Method
- Abstract Factory
- Prototype

## Practical Perspective

Creational patterns are about controlling object creation so callers do not depend on concrete construction details.

For Builder, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Framework integration points where Builder keeps responsibilities separated.
- Configuration-driven runtime behavior where Builder keeps responsibilities separated.
- Test fixture creation where Builder keeps responsibilities separated.
- Infrastructure objects whose setup should be centralized where Builder keeps responsibilities separated.

## Decision Questions

- Who owns object creation?
- Which concrete type should callers be allowed to know?
- Can invalid combinations be prevented at construction time?
- Use it when construction has many options or invalid combinations.
- Make the final build step validate required fields and defaults.

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
