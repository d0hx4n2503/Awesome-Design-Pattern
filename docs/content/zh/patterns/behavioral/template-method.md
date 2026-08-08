---
title: "Template Method"
slug: "template-method"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/template-method/README.md"
---

# Template Method

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Define the skeleton of an algorithm while allowing subclasses to customize selected steps.

## 问题

Several workflows share the same high-level sequence but differ in small details. Duplicating the full workflow makes ordering rules inconsistent.

## 解决方案

Keep the invariant workflow in a base class and defer variable steps to protected methods.

## TypeScript 实现

`DataImportJob` owns the import sequence. `CsvImportJob` customizes extraction and parsing while validation and persistence remain shared.

```bash
npm run template-method
```

## 权衡

- Great for stable workflows.
- Can become rigid because it relies on inheritance.
- Strategy may be better when runtime composition matters.
