---
title: "Flyweight"
slug: "flyweight"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/flyweight/README.md"
---

# Flyweight

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Share common object state to reduce memory usage when many similar objects are needed.

## 问题

Large collections can waste memory by duplicating identical intrinsic data.

## 解决方案

Separate shared intrinsic state from per-use extrinsic state and reuse flyweights through a factory.

## TypeScript 实现

`MarkerIconFactory` reuses map marker icons by type.

```bash
npm run flyweight
```

## 权衡

- Useful for large object counts.
- Premature use can overcomplicate code.
