---
title: "Interpreter"
slug: "interpreter"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/interpreter/README.md"
---

# Interpreter

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Represent a small grammar and evaluate sentences in that grammar.

## 问题

Small rule systems can turn into rigid conditional logic when rules are hard-coded.

## 解决方案

Represent grammar rules as expression objects that interpret themselves against a context.

## TypeScript 实现

Boolean feature rules are composed from variable, AND, and OR expressions.

```bash
npm run interpreter
```

## 权衡

- Good for small DSLs.
- Complex grammars should use a parser library.
