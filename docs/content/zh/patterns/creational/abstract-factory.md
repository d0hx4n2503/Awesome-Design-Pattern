---
title: "Abstract Factory"
slug: "abstract-factory"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/abstract-factory/README.md"
---

# Abstract Factory

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Create families of related objects without coupling clients to concrete classes.

## Problem

Applications often need compatible product families such as light/dark UI components or provider-specific clients.

## Solution

Expose a factory interface that creates a complete product family.

## TypeScript Implementation

`ThemeFactory` creates matching buttons and checkboxes for light or dark themes.

```bash
npm run abstract-factory
```

## Trade-offs

- Enforces product compatibility.
- Adding a new product type changes all factories.
