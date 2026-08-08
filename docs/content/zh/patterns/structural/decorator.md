---
title: "Decorator"
slug: "decorator"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/decorator/README.md"
---

# Decorator

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Decorator adds behavior to an object by wrapping it with another object that follows the same interface.

## 问题

Feature combinations can explode when modeled with inheritance. For example, logging, caching, retrying, metrics, and authorization can be combined in many ways. Creating a subclass for every combination quickly becomes unmaintainable.

## 解决方案

Keep the core object focused and wrap it with decorators that add one behavior at a time. Because decorators implement the same interface as the wrapped object, they can be stacked.

## TypeScript 实现

This implementation models report generation:

- `ReportGenerator` is the common interface.
- `SalesReportGenerator` produces the base report.
- `TimestampReportDecorator` adds generated-at metadata.
- `SignatureReportDecorator` adds an approval signature.

Run it from the repository root:

```bash
npm run decorator
```

## 适用场景

- Behavior needs to be composed dynamically.
- Inheritance would create too many subclasses.
- You want to add cross-cutting behavior without modifying the core object.

## 不适用场景

- The wrapping order is unclear or fragile.
- Debugging nested wrappers would be more expensive than the flexibility gained.
- A simple function composition would be enough.

## 优点

- Supports open/closed extension.
- Keeps each behavior small and focused.
- Allows runtime composition.

## 权衡

- Adds object nesting.
- Ordering can affect behavior.
- Stack traces and debugging can become less direct.

## 相关模式

- Proxy
- Composite
- Strategy
