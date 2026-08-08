---
title: "Memento"
slug: "memento"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/memento/README.md"
---

# Memento

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Capture and restore object state without exposing internal representation.

## Problem

Undo and snapshot features need previous state without letting outside code mutate internals.

## Solution

The originator creates immutable snapshots and restores from them later.

## TypeScript Implementation

`TextEditor` creates and restores text snapshots.

```bash
npm run memento
```

## Trade-offs

- Preserves encapsulation.
- Snapshots can consume memory.
