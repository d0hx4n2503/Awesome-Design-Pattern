---
title: "Factory Method"
slug: "factory-method"
group: "creational"
groupLabel: "Creational"
source: "patterns/creational/factory-method/README.md"
---

# Factory Method

## Intent

Factory Method defines a creation method that returns objects through a common interface while allowing subclasses or concrete factories to decide which class to instantiate.

## Problem

Client code often needs a product by behavior, not by concrete class. If it directly creates every implementation with `new`, creation decisions spread across the codebase and each new product type requires editing multiple callers.

## Solution

Move object creation behind a factory method. Client code works with the product interface, while the factory encapsulates the concrete selection logic.

## TypeScript Implementation

This implementation models notification delivery:

- `NotificationSender` is the product interface.
- `EmailNotificationSender` and `SmsNotificationSender` are concrete products.
- `NotificationFactory` exposes a factory method for creating the correct sender.
- `NotificationService` depends on the factory and product abstraction.

Run it from the repository root:

```bash
npm run factory-method
```

## When To Use

- Object creation depends on runtime input.
- Client code should not know concrete classes.
- New product types should be added with minimal caller changes.
- Framework or domain code needs an extension point for creation.

## When Not To Use

- There is only one concrete class and creation is trivial.
- A simple constructor call is clearer.
- The factory becomes a large conditional dumping ground.

## Benefits

- Reduces coupling to concrete classes.
- Centralizes creation rules.
- Makes product selection easier to test.

## Trade-offs

- Adds indirection around object creation.
- Can hide dependencies if the factory grows too much.
- May be overkill for small object graphs.

## Related Patterns

- Abstract Factory
- Template Method
- Builder

## Practical Perspective

Creational patterns are about controlling object creation so callers do not depend on concrete construction details.

For Factory Method, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Framework integration points where Factory Method keeps responsibilities separated.
- Configuration-driven runtime behavior where Factory Method keeps responsibilities separated.
- Test fixture creation where Factory Method keeps responsibilities separated.
- Infrastructure objects whose setup should be centralized where Factory Method keeps responsibilities separated.

## Decision Questions

- Who owns object creation?
- Which concrete type should callers be allowed to know?
- Can invalid combinations be prevented at construction time?
- Use it when a workflow should create products without knowing concrete classes.
- Avoid turning every constructor into a factory method by habit.

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
