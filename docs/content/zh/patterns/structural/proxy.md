---
title: "Proxy"
slug: "proxy"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/proxy/README.md"
---

# Proxy

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Control access to another object through the same interface.

## 问题

Expensive or sensitive objects often need caching, authorization, or lazy access without leaking those concerns into callers.

## 解决方案

Put a proxy in front of the real subject and let the proxy decide when to delegate.

## TypeScript 实现

`CachedDocumentProxy` caches reads and denies access to documents outside the allowed set.

```bash
npm run proxy
```

## 权衡

- Good for caching and access control.
- Adds indirection.
- Must preserve expected subject semantics.
