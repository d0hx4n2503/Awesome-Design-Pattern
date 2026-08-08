---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/bridge/README.md"
---

# Bridge

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

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
