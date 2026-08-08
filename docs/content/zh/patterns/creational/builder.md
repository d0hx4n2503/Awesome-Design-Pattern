---
title: "Builder"
slug: "builder"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/builder/README.md"
---

# Builder

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Builder constructs complex objects step by step while keeping creation readable and valid.

## 问题

Objects with many optional fields often lead to long constructors, unclear parameter order, and partially valid states. This gets worse for configuration, requests, reports, and test data.

## 解决方案

Move construction into a builder that exposes meaningful methods and validates the final object before returning it.

## TypeScript 实现

This implementation builds a deployment configuration:

- `DeploymentConfig` is the final immutable object shape.
- `DeploymentConfigBuilder` provides expressive construction methods.
- `build()` validates required fields and returns a complete config.

Run it from the repository root:

```bash
npm run builder
```

## 适用场景

- Object construction has many optional parameters.
- Valid object creation requires multiple steps.
- Constructor calls are hard to read.
- Test data setup needs readable defaults.

## 不适用场景

- The object has only a few required fields.
- A plain object literal is clearer.
- The builder only duplicates setters without adding validation or readability.

## 优点

- Improves readability at call sites.
- Prevents invalid partially constructed objects.
- Makes defaults and validation explicit.

## 权衡

- Adds another abstraction.
- Can become verbose for simple objects.
- Needs discipline to avoid mutable builder leaks.

## 相关模式

- Factory Method
- Abstract Factory
- Prototype
