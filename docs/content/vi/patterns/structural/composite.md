---
title: "Composite"
slug: "composite"
group: "structural"
groupLabel: "Structural"
source: "patterns/structural/composite/README.md"
---

# Composite

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

## Intent

Treat individual objects and groups through the same interface.

## Problem

Tree structures contain leaves and containers. Client code becomes noisy when it handles each kind separately.

## Solution

Define a common component interface. Leaves render directly; composites delegate to children recursively.

## TypeScript Implementation

`MenuItem` and `MenuGroup` both implement `MenuComponent`.

```bash
npm run composite
```

## Trade-offs

- Excellent for tree-like structures.
- Recursive behavior needs tests.
- Leaf and group behavior should stay compatible.
