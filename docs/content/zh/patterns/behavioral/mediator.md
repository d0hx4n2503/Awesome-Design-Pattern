---
title: "Mediator"
slug: "mediator"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/mediator/README.md"
---

# Mediator

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Centralize communication between collaborating objects so they do not depend on each other directly.

## 问题

Many-to-many component communication creates tangled dependencies.

## 解决方案

Participants talk to a mediator, and the mediator coordinates delivery.

## TypeScript 实现

`ChatRoom` routes messages between `ChatUser` instances.

```bash
npm run mediator
```

## 权衡

- Reduces direct coupling.
- Mediator complexity can grow quickly.
