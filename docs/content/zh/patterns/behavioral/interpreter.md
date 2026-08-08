---
title: "Interpreter"
slug: "interpreter"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/interpreter/README.md"
---

# Interpreter

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Represent a small grammar and evaluate sentences in that grammar.

## Problem

Small rule systems can turn into rigid conditional logic when rules are hard-coded.

## Solution

Represent grammar rules as expression objects that interpret themselves against a context.

## TypeScript Implementation

Boolean feature rules are composed from variable, AND, and OR expressions.

```bash
npm run interpreter
```

## Trade-offs

- Good for small DSLs.
- Complex grammars should use a parser library.
