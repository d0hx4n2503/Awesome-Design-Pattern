---
title: "State"
slug: "state"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/state/README.md"
---

# State

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Allow an object to change behavior when its internal state changes.

## 问题

Lifecycle-heavy objects often collect large conditional blocks based on state.

## 解决方案

Represent each state as an object. The context delegates behavior to the current state and controls transitions.

## TypeScript 实现

`Order` delegates `pay()` and `ship()` to explicit state objects.

```bash
npm run state
```

## 权衡

- Reduces state conditionals.
- Adds more objects.
- State transitions need careful tests.
