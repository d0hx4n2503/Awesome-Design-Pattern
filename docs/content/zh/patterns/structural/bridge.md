---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/bridge/README.md"
---

# Bridge

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

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
