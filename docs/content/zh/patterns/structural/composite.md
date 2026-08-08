---
title: "Composite"
slug: "composite"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/composite/README.md"
---

# Composite

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

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
