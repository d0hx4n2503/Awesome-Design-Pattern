---
title: "Singleton"
slug: "singleton"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/singleton/README.md"
---

# Singleton

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Ensure one controlled instance exists for a class and expose a single access point to it.

## Problem

Shared runtime services such as configuration can become inconsistent when multiple instances are created independently.

## Solution

Hide construction behind a static accessor. Keep the shared object small, explicit, and test-resettable.

## TypeScript Implementation

`AppConfig` stores process-wide settings. `getInstance()` always returns the same object, while `resetForTest()` keeps tests isolated.

```bash
npm run singleton
```

## When To Use

- One shared process-level object is required.
- Multiple instances would create inconsistent state.
- Central lifecycle control is valuable.

## Trade-offs

- Can hide dependencies.
- Mutable global state can make tests fragile.
- Dependency injection is often cleaner for application services.

## Related Patterns

- Factory Method
- Facade
- Flyweight
