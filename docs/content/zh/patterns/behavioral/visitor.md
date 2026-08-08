---
title: "Visitor"
slug: "visitor"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/visitor/README.md"
---

# Visitor

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Add operations to a stable object structure without changing the object classes.

## 问题

Tree structures often need many operations; putting all operations on nodes bloats the node classes.

## 解决方案

Nodes accept a visitor object, and each visitor implements operations for each node type.

## TypeScript 实现

`SizeVisitor` calculates total size for a file tree. `NameListVisitor` adds a second operation over the same nodes without changing `FileNode` or `FolderNode`.

```bash
npm run visitor
```

## 权衡

- Great when structure is stable and operations change.
- Adding new node types requires updating visitors.

## 实战视角

Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.

For Visitor, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## 真实场景

- Business rules that vary by tenant or product where Visitor keeps responsibilities separated.
- Workflow orchestration where Visitor keeps responsibilities separated.
- Event-driven UI or domain flows where Visitor keeps responsibilities separated.
- Validation, authorization, pricing, routing, or lifecycle logic where Visitor keeps responsibilities separated.

## 决策问题

- Which object owns the decision?
- Can a rule change without editing stable workflow code?
- Is runtime behavior explicit enough to debug?
- Use it when object structures are stable but operations change often.
- Avoid it when element types change frequently.

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
