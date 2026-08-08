---
title: "Proxy"
slug: "proxy"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/proxy/README.md"
---

# Proxy

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Intent

Control access to another object through the same interface.

## Problem

Expensive or sensitive objects often need caching, authorization, or lazy access without leaking those concerns into callers.

## Solution

Put a proxy in front of the real subject and let the proxy decide when to delegate.

## TypeScript Implementation

`CachedDocumentProxy` caches reads and denies access to documents outside the allowed set.

```bash
npm run proxy
```

## Trade-offs

- Good for caching and access control.
- Adds indirection.
- Must preserve expected subject semantics.
