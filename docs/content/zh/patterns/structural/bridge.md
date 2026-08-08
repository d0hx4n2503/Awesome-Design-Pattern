---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/bridge/README.md"
---

# Bridge

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Separate an abstraction from its implementation so both can evolve independently.

## 问题

Two independent dimensions of variation can create a subclass explosion.

## 解决方案

Keep one dimension as an abstraction and delegate the other to an implementation interface.

## TypeScript 实现

`CriticalAlert` can use different `DeliveryChannel` implementations.

```bash
npm run bridge
```

## 权衡

- Avoids subclass explosion.
- Adds composition and interfaces.
