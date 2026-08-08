---
title: "Adapter"
slug: "adapter"
group: "structural"
groupLabel: "Cấu trúc"
source: "patterns/structural/adapter/README.md"
---

# Adapter

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Adapter converts an existing interface into the interface a client expects.

## Vấn đề

Real systems rarely integrate with perfectly shaped APIs. A payment provider, legacy service, SDK, or vendor client may expose names, data shapes, and semantics that do not match your domain model. If client code calls that external interface directly, vendor details leak everywhere and future migration becomes expensive.

## Giải pháp

Create an adapter that implements the interface your application owns. The adapter translates calls and data between your domain-facing contract and the incompatible external service.

## Triển khai TypeScript

This implementation models checkout payment processing:

- `PaymentProcessor` is the application-owned interface.
- `LegacyPaymentGateway` is an incompatible external API.
- `LegacyPaymentAdapter` translates application requests into legacy gateway calls.
- `CheckoutService` depends only on `PaymentProcessor`.

Run it from the repository root:

```bash
npm run adapter
```

## Khi nên dùng

- Integrating third-party SDKs or vendor APIs.
- Wrapping legacy systems during migration.
- Keeping domain code independent from infrastructure details.
- Normalizing multiple providers behind one application interface.

## Khi không nên dùng

- The external interface already matches the client contract.
- You control both sides and can safely change the original interface.
- The adapter only hides a deeper design issue without reducing coupling.

## Lợi ích

- Keeps vendor-specific details out of business logic.
- Makes provider replacement easier.
- Improves testability by targeting an application-owned interface.

## Đánh đổi

- Adds one more layer to maintain.
- Poorly named adapters can hide important behavior.
- Translation logic can become complex if provider semantics differ greatly.

## Pattern liên quan

- Facade
- Proxy
- Bridge
