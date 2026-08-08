---
title: "Visitor"
slug: "visitor"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/visitor/README.md"
---

# Visitor

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Add operations to a stable object structure without changing the object classes.

## Vấn đề

Tree structures often need many operations; putting all operations on nodes bloats the node classes.

## Giải pháp

Nodes accept a visitor object, and each visitor implements operations for each node type.

## Triển khai TypeScript

`SizeVisitor` calculates total size for a file tree.

```bash
npm run visitor
```

## Đánh đổi

- Great when structure is stable and operations change.
- Adding new node types requires updating visitors.
