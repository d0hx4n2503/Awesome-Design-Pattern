---
title: "Composite"
slug: "composite"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/composite/README.md"
---

# Composite

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

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
