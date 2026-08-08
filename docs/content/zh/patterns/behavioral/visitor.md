---
title: "Visitor"
slug: "visitor"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/visitor/README.md"
---

# Visitor

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Add operations to a stable object structure without changing the object classes.

## 问题

Tree structures often need many operations; putting all operations on nodes bloats the node classes.

## 解决方案

Nodes accept a visitor object, and each visitor implements operations for each node type.

## TypeScript 实现

`SizeVisitor` calculates total size for a file tree.

```bash
npm run visitor
```

## 权衡

- Great when structure is stable and operations change.
- Adding new node types requires updating visitors.
