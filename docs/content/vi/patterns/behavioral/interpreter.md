---
title: "Interpreter"
slug: "interpreter"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/interpreter/README.md"
---

# Interpreter

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Represent a small grammar and evaluate sentences in that grammar.

## Vấn đề

Small rule systems can turn into rigid conditional logic when rules are hard-coded.

## Giải pháp

Represent grammar rules as expression objects that interpret themselves against a context.

## Triển khai TypeScript

Boolean feature rules are composed from variable, AND, and OR expressions.

```bash
npm run interpreter
```

## Đánh đổi

- Good for small DSLs.
- Complex grammars should use a parser library.
