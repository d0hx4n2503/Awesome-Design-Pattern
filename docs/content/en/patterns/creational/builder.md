---
title: "Builder"
slug: "builder"
group: "creational"
groupLabel: "Creational"
source: "patterns/creational/builder/README.md"
---

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
