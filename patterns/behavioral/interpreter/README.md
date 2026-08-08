# Interpreter

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
