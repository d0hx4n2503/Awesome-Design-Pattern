---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "Structural"
source: "patterns/structural/bridge/README.md"
---

# Bridge

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

## Intent

Separate an abstraction from its implementation so both can evolve independently.

## Problem

Two independent dimensions of variation can create a subclass explosion.

## Solution

Keep one dimension as an abstraction and delegate the other to an implementation interface.

## TypeScript Implementation

`CriticalAlert` can use different `DeliveryChannel` implementations.

```bash
npm run bridge
```

## Trade-offs

- Avoids subclass explosion.
- Adds composition and interfaces.
