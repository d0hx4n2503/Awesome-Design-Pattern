---
title: "Facade"
slug: "facade"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/facade/README.md"
---

# Facade

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Facade provides a simple, stable interface over a more complex subsystem.

## 问题

Client code often needs to coordinate several services to complete one business workflow. If every caller knows the subsystem details, the workflow is duplicated and changes become risky.

## 解决方案

Create a facade that exposes a high-level operation. The facade orchestrates the subsystem internally while clients depend on one clear API.

## TypeScript 实现

This implementation models order placement:

- `InventoryService`, `PaymentService`, and `ShippingService` are subsystem services.
- `OrderFacade` coordinates the workflow.
- Callers place an order through one method instead of orchestrating every subsystem.

Run it from the repository root:

```bash
npm run facade
```

## 适用场景

- A workflow requires several subsystem calls.
- Client code is coupled to too many internal services.
- You want a clean module or service boundary.
- The subsystem is valid but too detailed for most callers.

## 不适用场景

- The facade becomes a god object.
- It hides important domain decisions from callers.
- The subsystem is already simple and stable.

## 优点

- Reduces coupling at module boundaries.
- Centralizes workflow orchestration.
- Makes common operations easier to use correctly.

## 权衡

- Can become too broad if not scoped carefully.
- May hide useful lower-level capabilities.
- Needs clear naming to avoid becoming a vague service layer.

## 相关模式

- Adapter
- Mediator
- Proxy
