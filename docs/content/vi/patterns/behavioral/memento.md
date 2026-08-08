---
title: "Memento"
slug: "memento"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/memento/README.md"
---

# Memento

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Capture and restore object state without exposing internal representation.

## Vấn đề

Undo and snapshot features need previous state without letting outside code mutate internals.

## Giải pháp

The originator creates immutable snapshots and restores from them later.

## Triển khai TypeScript

`TextEditor` creates and restores text snapshots.

```bash
npm run memento
```

## Đánh đổi

- Preserves encapsulation.
- Snapshots can consume memory.
