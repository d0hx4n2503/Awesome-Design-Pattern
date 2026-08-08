---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/prototype/README.md"
---

# Prototype

> 本中文文档与英文原文保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## Intent

Create new objects by cloning an existing object instead of constructing from scratch.

## Problem

Repeatedly setting up similar objects duplicates configuration and risks inconsistent defaults.

## Solution

Use a configured prototype as a template and clone it with explicit overrides.

## TypeScript Implementation

`CampaignPrototype` clones campaign templates while copying mutable arrays safely.

```bash
npm run prototype
```

## Trade-offs

- Reduces repetitive setup.
- Clone semantics must be explicit.
