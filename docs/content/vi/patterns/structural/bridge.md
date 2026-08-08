---
title: "Bridge"
slug: "bridge"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/bridge/README.md"
---

# Bridge

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Separate an abstraction from its implementation so both can evolve independently.

## Vấn đề

Two independent dimensions of variation can create a subclass explosion.

## Giải pháp

Keep one dimension as an abstraction and delegate the other to an implementation interface.

## Triển khai TypeScript

`CriticalAlert` can use different `DeliveryChannel` implementations.

```bash
npm run bridge
```

## Đánh đổi

- Avoids subclass explosion.
- Adds composition and interfaces.
