---
title: "Mediator"
slug: "mediator"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/mediator/README.md"
---

# Mediator

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Centralize communication between collaborating objects so they do not depend on each other directly.

## Problem

Many-to-many component communication creates tangled dependencies.

## Solution

Participants talk to a mediator, and the mediator coordinates delivery.

## TypeScript Implementation

`ChatRoom` routes messages between `ChatUser` instances.

```bash
npm run mediator
```

## Trade-offs

- Reduces direct coupling.
- Mediator complexity can grow quickly.
