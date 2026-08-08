---
title: "Memento"
slug: "memento"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/memento/README.md"
---

# Memento

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Capture and restore object state without exposing internal representation.

## 问题

Undo and snapshot features need previous state without letting outside code mutate internals.

## 解决方案

The originator creates immutable snapshots and restores from them later.

## TypeScript 实现

`TextEditor` creates and restores text snapshots.

```bash
npm run memento
```

## 权衡

- Preserves encapsulation.
- Snapshots can consume memory.
