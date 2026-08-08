---
title: "Chain of Responsibility"
slug: "chain-of-responsibility"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/chain-of-responsibility/README.md"
---

# Chain of Responsibility

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Pass a request through a sequence of handlers until one rejects it or the chain completes.

## Vấn đề

Validation and middleware often require reusable steps. One giant function makes ordering and reuse difficult.

## Giải pháp

Represent each step as a handler linked to the next handler.

## Triển khai TypeScript

Support tickets pass through authentication, title, and priority handlers.

```bash
npm run chain-of-responsibility
```

## Đánh đổi

- Great for middleware pipelines.
- Runtime flow is indirect.
- Missing or misordered handlers can change behavior.
