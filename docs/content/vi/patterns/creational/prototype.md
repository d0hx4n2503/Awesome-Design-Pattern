---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/prototype/README.md"
---

# Prototype

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Create new objects by cloning an existing object instead of constructing from scratch.

## Vấn đề

Repeatedly setting up similar objects duplicates configuration and risks inconsistent defaults.

## Giải pháp

Use a configured prototype as a template and clone it with explicit overrides.

## Triển khai TypeScript

`CampaignPrototype` clones campaign templates while copying mutable arrays safely.

```bash
npm run prototype
```

## Đánh đổi

- Reduces repetitive setup.
- Clone semantics must be explicit.
