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
