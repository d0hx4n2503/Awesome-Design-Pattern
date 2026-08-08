---
title: "Flyweight"
slug: "flyweight"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/flyweight/README.md"
---

# Flyweight

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Share common object state to reduce memory usage when many similar objects are needed.

## Vấn đề

Large collections can waste memory by duplicating identical intrinsic data.

## Giải pháp

Separate shared intrinsic state from per-use extrinsic state and reuse flyweights through a factory.

## Triển khai TypeScript

`MarkerIconFactory` reuses map marker icons by type.

```bash
npm run flyweight
```

## Đánh đổi

- Useful for large object counts.
- Premature use can overcomplicate code.
