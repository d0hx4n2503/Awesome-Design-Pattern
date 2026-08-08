---
title: "Strategy Pattern"
slug: "strategy"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/strategy/README.md"
---

# Strategy Pattern

## Intent

Encapsulate interchangeable algorithms or policies behind a shared interface so the calling code can switch behavior without changing its own workflow.

## Problem

Business logic often accumulates conditional branches such as `if paymentType === ...`, `if customerTier === ...`, or `if shippingMethod === ...`. As those branches grow, the calling class starts owning too many rules and becomes harder to test.

## Core Idea

Move the varying behavior into separate strategy objects. The context depends only on the strategy interface, while each strategy owns one focused algorithm.

## When To Use

Use Strategy when behavior must change at runtime, when multiple algorithms share the same input/output shape, or when conditionals are growing around pricing, validation, sorting, payment, or routing rules.

## When Not To Use

Avoid Strategy when there is only one algorithm, when the interface would be forced and unclear, or when a simple function parameter is enough.

## Recognition Signs

- A class has multiple branches for variations of the same behavior.
- Adding a new rule requires editing unrelated workflow code.
- Several algorithms share the same contract but differ in execution details.

## Advantages

- Keeps each algorithm isolated and testable.
- Reduces conditional complexity in the context.
- Makes runtime behavior explicit through composition.

## Trade-Offs

- Adds more objects or functions to navigate.
- Can make runtime flow less obvious if strategies are selected indirectly.
- Is easy to overuse for behavior that does not actually vary.

## Related Patterns

- State also changes behavior, but the object usually owns its state transitions.
- Command encapsulates an action rather than an interchangeable algorithm.
- Template Method keeps the workflow in a base class and varies selected steps.

## TypeScript Implementation

This folder contains a runnable TypeScript implementation in `index.ts`.

The example models shipping cost calculation. `CheckoutService` depends on a `ShippingStrategy` interface, while concrete strategies such as economy, express, and free shipping provide interchangeable algorithms.

Run it from the repository root:

```bash
npm run strategy
```
