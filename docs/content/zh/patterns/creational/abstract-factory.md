---
title: "Abstract Factory"
slug: "abstract-factory"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/abstract-factory/README.md"
---

# Abstract Factory

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Create families of related objects without coupling clients to concrete classes.

## 问题

Applications often need compatible product families such as light/dark UI components or provider-specific clients.

## 解决方案

Expose a factory interface that creates a complete product family.

## TypeScript 实现

`ThemeFactory` creates matching buttons and checkboxes for light or dark themes.

```bash
npm run abstract-factory
```

## 权衡

- Enforces product compatibility.
- Adding a new product type changes all factories.
