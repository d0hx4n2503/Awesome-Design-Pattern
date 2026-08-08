---
title: "Chain of Responsibility"
slug: "chain-of-responsibility"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/chain-of-responsibility/README.md"
---

# Chain of Responsibility

## Intent

Pass a request through a sequence of handlers until one rejects it or the chain completes.

## Problem

Validation and middleware often require reusable steps. One giant function makes ordering and reuse difficult.

## Solution

Represent each step as a handler linked to the next handler.

## TypeScript Implementation

Support tickets pass through authentication, title, and priority handlers.

```bash
npm run chain-of-responsibility
```

## Trade-offs

- Great for middleware pipelines.
- Runtime flow is indirect.
- Missing or misordered handlers can change behavior.

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Chain of Responsibility, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where Chain of Responsibility keeps responsibilities separated.
- Workflow orchestration where Chain of Responsibility keeps responsibilities separated.
- Event-driven UI or domain flows where Chain of Responsibility keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Chain of Responsibility keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when a request should pass through ordered handlers that may stop early.
- Make stop/continue behavior visible in the return type.

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
