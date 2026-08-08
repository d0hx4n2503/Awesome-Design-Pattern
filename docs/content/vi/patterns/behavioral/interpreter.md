---
title: "Interpreter"
slug: "interpreter"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/interpreter/README.md"
---

# Interpreter

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

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
