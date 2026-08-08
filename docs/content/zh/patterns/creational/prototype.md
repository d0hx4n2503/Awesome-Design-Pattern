---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/prototype/README.md"
---

# Prototype

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Create new objects by cloning an existing object instead of constructing from scratch.

## 问题

Repeatedly setting up similar objects duplicates configuration and risks inconsistent defaults.

## 解决方案

Use a configured prototype as a template and clone it with explicit overrides.

## TypeScript 实现

`CampaignPrototype` clones campaign templates while copying mutable arrays safely.

```bash
npm run prototype
```

## 权衡

- Reduces repetitive setup.
- Clone semantics must be explicit.
