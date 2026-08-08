---
title: "Composite"
slug: "composite"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/composite/README.md"
---

# Composite

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Treat individual objects and groups through the same interface.

## 问题

Tree structures contain leaves and containers. Client code becomes noisy when it handles each kind separately.

## 解决方案

Define a common component interface. Leaves render directly; composites delegate to children recursively.

## TypeScript 实现

`MenuItem` and `MenuGroup` both implement `MenuComponent`.

```bash
npm run composite
```

## 权衡

- Excellent for tree-like structures.
- Recursive behavior needs tests.
- Leaf and group behavior should stay compatible.
