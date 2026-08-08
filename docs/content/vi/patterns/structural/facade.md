---
title: "Facade"
slug: "facade"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/facade/README.md"
---

# Facade

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Facade provides a simple, stable interface over a more complex subsystem.

## Vấn đề

Client code often needs to coordinate several services to complete one business workflow. If every caller knows the subsystem details, the workflow is duplicated and changes become risky.

## Giải pháp

Create a facade that exposes a high-level operation. The facade orchestrates the subsystem internally while clients depend on one clear API.

## Triển khai TypeScript

This implementation models order placement:

- `InventoryService`, `PaymentService`, and `ShippingService` are subsystem services.
- `OrderFacade` coordinates the workflow.
- Callers place an order through one method instead of orchestrating every subsystem.

Run it from the repository root:

```bash
npm run facade
```

## Khi nên dùng

- A workflow requires several subsystem calls.
- Client code is coupled to too many internal services.
- You want a clean module or service boundary.
- The subsystem is valid but too detailed for most callers.

## Khi không nên dùng

- The facade becomes a god object.
- It hides important domain decisions from callers.
- The subsystem is already simple and stable.

## Lợi ích

- Reduces coupling at module boundaries.
- Centralizes workflow orchestration.
- Makes common operations easier to use correctly.

## Đánh đổi

- Can become too broad if not scoped carefully.
- May hide useful lower-level capabilities.
- Needs clear naming to avoid becoming a vague service layer.

## Pattern liên quan

- Adapter
- Mediator
- Proxy
