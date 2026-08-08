---
title: "State"
slug: "state"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/state/README.md"
---

# State

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Allow an object to change behavior when its internal state changes.

## Vấn đề

Lifecycle-heavy objects often collect large conditional blocks based on state.

## Giải pháp

Represent each state as an object. The context delegates behavior to the current state and controls transitions.

## Triển khai TypeScript

`Order` delegates `pay()` and `ship()` to explicit state objects.

```bash
npm run state
```

## Đánh đổi

- Reduces state conditionals.
- Adds more objects.
- State transitions need careful tests.
