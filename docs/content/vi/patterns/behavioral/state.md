---
title: "State"
slug: "state"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/state/README.md"
---

# State

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Intent

Allow an object to change behavior when its internal state changes.

## Problem

Lifecycle-heavy objects often collect large conditional blocks based on state.

## Solution

Represent each state as an object. The context delegates behavior to the current state and controls transitions.

## TypeScript Implementation

`Order` delegates `pay()` and `ship()` to explicit state objects.

```bash
npm run state
```

## Trade-offs

- Reduces state conditionals.
- Adds more objects.
- State transitions need careful tests.
