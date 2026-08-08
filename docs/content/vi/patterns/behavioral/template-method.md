---
title: "Template Method"
slug: "template-method"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/template-method/README.md"
---

# Template Method

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Define the skeleton of an algorithm while allowing subclasses to customize selected steps.

## Vấn đề

Several workflows share the same high-level sequence but differ in small details. Duplicating the full workflow makes ordering rules inconsistent.

## Giải pháp

Keep the invariant workflow in a base class and defer variable steps to protected methods.

## Triển khai TypeScript

`DataImportJob` owns the import sequence. `CsvImportJob` customizes extraction and parsing while validation and persistence remain shared.

```bash
npm run template-method
```

## Đánh đổi

- Great for stable workflows.
- Can become rigid because it relies on inheritance.
- Strategy may be better when runtime composition matters.
