---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/prototype/README.md"
---

# Prototype

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

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
