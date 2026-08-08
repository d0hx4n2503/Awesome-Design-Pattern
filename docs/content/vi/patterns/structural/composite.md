---
title: "Composite"
slug: "composite"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/composite/README.md"
---

# Composite

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Treat individual objects and groups through the same interface.

## Vấn đề

Tree structures contain leaves and containers. Client code becomes noisy when it handles each kind separately.

## Giải pháp

Define a common component interface. Leaves render directly; composites delegate to children recursively.

## Triển khai TypeScript

`MenuItem` and `MenuGroup` both implement `MenuComponent`.

```bash
npm run composite
```

## Đánh đổi

- Excellent for tree-like structures.
- Recursive behavior needs tests.
- Leaf and group behavior should stay compatible.
