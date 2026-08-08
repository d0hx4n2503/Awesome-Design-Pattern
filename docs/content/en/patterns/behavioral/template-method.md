---
title: "Template Method"
slug: "template-method"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/template-method/README.md"
---

# Template Method

## Intent

Define the skeleton of an algorithm while allowing subclasses to customize selected steps.

## Problem

Several workflows share the same high-level sequence but differ in small details. Duplicating the full workflow makes ordering rules inconsistent.

## Solution

Keep the invariant workflow in a base class and defer variable steps to protected methods.

## TypeScript Implementation

`DataImportJob` owns the import sequence. `CsvImportJob` customizes extraction and parsing while validation and persistence remain shared.

```bash
npm run template-method
```

## Trade-offs

- Great for stable workflows.
- Can become rigid because it relies on inheritance.
- Strategy may be better when runtime composition matters.

## Practical Perspective

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Template Method, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Business rules that vary by tenant or product where Template Method keeps responsibilities separated.
- Workflow orchestration where Template Method keeps responsibilities separated.
- Event-driven UI or domain flows where Template Method keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Template Method keeps responsibilities separated.

## Decision Questions

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when workflow order is fixed but selected steps vary.
- Prefer composition if the number of hooks keeps growing.

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
