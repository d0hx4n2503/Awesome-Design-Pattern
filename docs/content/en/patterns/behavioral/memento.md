---
title: "Memento"
slug: "memento"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/memento/README.md"
---

# Memento

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
