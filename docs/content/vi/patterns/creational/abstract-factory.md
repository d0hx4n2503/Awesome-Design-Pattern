---
title: "Abstract Factory"
slug: "abstract-factory"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/abstract-factory/README.md"
---

# Abstract Factory

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Create families of related objects without coupling clients to concrete classes.

## Vấn đề

Applications often need compatible product families such as light/dark UI components or provider-specific clients.

## Giải pháp

Expose a factory interface that creates a complete product family.

## Triển khai TypeScript

`ThemeFactory` creates matching buttons and checkboxes for light or dark themes.

```bash
npm run abstract-factory
```

## Đánh đổi

- Enforces product compatibility.
- Adding a new product type changes all factories.
