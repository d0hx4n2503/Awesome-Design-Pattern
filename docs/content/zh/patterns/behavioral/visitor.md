---
title: "Visitor"
slug: "visitor"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/visitor/README.md"
---

# Visitor

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Add operations to a stable object structure without changing the object classes.

## Problem

Tree structures often need many operations; putting all operations on nodes bloats the node classes.

## Solution

Nodes accept a visitor object, and each visitor implements operations for each node type.

## TypeScript Implementation

`SizeVisitor` calculates total size for a file tree.

```bash
npm run visitor
```

## Trade-offs

- Great when structure is stable and operations change.
- Adding new node types requires updating visitors.
