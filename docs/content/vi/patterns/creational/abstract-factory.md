---
title: "Abstract Factory"
slug: "abstract-factory"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/abstract-factory/README.md"
---

# Abstract Factory

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

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
