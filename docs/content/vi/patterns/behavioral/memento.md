---
title: "Memento"
slug: "memento"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/memento/README.md"
---

# Memento

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

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
