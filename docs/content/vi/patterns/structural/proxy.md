---
title: "Proxy"
slug: "proxy"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/proxy/README.md"
---

# Proxy

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Control access to another object through the same interface.

## Vấn đề

Expensive or sensitive objects often need caching, authorization, or lazy access without leaking those concerns into callers.

## Giải pháp

Put a proxy in front of the real subject and let the proxy decide when to delegate.

## Triển khai TypeScript

`CachedDocumentProxy` caches reads and denies access to documents outside the allowed set.

```bash
npm run proxy
```

## Đánh đổi

- Good for caching and access control.
- Adds indirection.
- Must preserve expected subject semantics.
