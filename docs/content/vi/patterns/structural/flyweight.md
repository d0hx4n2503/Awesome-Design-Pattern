---
title: "Flyweight"
slug: "flyweight"
group: "structural"
groupLabel: "Structural"
source: "patterns/structural/flyweight/README.md"
---

# Flyweight

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

## Intent

Share common object state to reduce memory usage when many similar objects are needed.

## Problem

Large collections can waste memory by duplicating identical intrinsic data.

## Solution

Separate shared intrinsic state from per-use extrinsic state and reuse flyweights through a factory.

## TypeScript Implementation

`MarkerIconFactory` reuses map marker icons by type.

```bash
npm run flyweight
```

## Trade-offs

- Useful for large object counts.
- Premature use can overcomplicate code.
