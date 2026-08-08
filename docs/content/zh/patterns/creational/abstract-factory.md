---
title: "Abstract Factory"
slug: "abstract-factory"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/abstract-factory/README.md"
---

# Abstract Factory

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Create families of related objects without coupling clients to concrete classes.

## 问题

Applications often need compatible product families such as light/dark UI components or provider-specific clients.

## 解决方案

Expose a factory interface that creates a complete product family.

## TypeScript 实现

`ThemeFactory` creates matching buttons and checkboxes for light or dark themes.

```bash
npm run abstract-factory
```

## 权衡

- Enforces product compatibility.
- Adding a new product type changes all factories.

## 实战视角

Creational patterns are about controlling object creation so callers do not depend on concrete construction details.

For Abstract Factory, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## 真实场景

- Framework integration points where Abstract Factory keeps responsibilities separated.
- Configuration-driven runtime behavior where Abstract Factory keeps responsibilities separated.
- Test fixture creation where Abstract Factory keeps responsibilities separated.
- Infrastructure objects whose setup should be centralized where Abstract Factory keeps responsibilities separated.

## 决策问题

- Who owns object creation?
- Which concrete type should callers be allowed to know?
- Can invalid combinations be prevented at construction time?
- Use it when products must be created as compatible families.
- Watch for factory interfaces growing too large as the product family expands.

## 设计检查清单

- Start with the client code: define the interface you want callers to depend on.
- Keep concrete classes small and named after one responsibility.
- Make creation, selection, delegation, or notification rules explicit instead of hidden in conditionals.
- Prefer composition roots for wiring objects together.
- Document the reason for using the pattern so future contributors do not cargo-cult it.

## 常见错误

- Adding the pattern before the code has a real variation point.
- Creating abstractions that only rename concrete classes.
- Hiding important runtime behavior so debugging becomes harder.
- Letting examples stay toy-sized without showing where the pattern boundary sits in real code.
- Forgetting tests for negative paths, invalid states, or fallback behavior.

## 测试指南

- Test through the public abstraction, not private implementation details.
- Use fakes or test doubles for collaborators so the pattern seam is verified.
- Add one integration-style test proving the objects are wired correctly.
- Cover edge cases that motivated the pattern: missing strategy, rejected state transition, failed handler, invalid factory family, stale proxy cache, or similar.
- Keep tests named after behavior and business outcome rather than pattern terminology.

## 重构信号

- The pattern is useful when adding a new variation no longer requires editing stable caller code.
- It is probably overdesigned when every new class has only one trivial method and no independent reason to exist.
- If contributors cannot explain the runtime flow quickly, simplify the wiring or improve names.
- If tests must mock too many layers, the abstraction boundary is likely in the wrong place.
