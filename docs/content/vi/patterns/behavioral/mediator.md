---
title: "Mediator"
slug: "mediator"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/mediator/README.md"
---

# Mediator

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Centralize communication between collaborating objects so they do not depend on each other directly.

## Vấn đề

Many-to-many component communication creates tangled dependencies.

## Giải pháp

Participants talk to a mediator, and the mediator coordinates delivery.

## Triển khai TypeScript

`ChatRoom` routes messages between `ChatUser` instances.

```bash
npm run mediator
```

## Đánh đổi

- Reduces direct coupling.
- Mediator complexity can grow quickly.
