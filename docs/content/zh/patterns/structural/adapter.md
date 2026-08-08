---
title: "Adapter"
slug: "adapter"
group: "structural"
groupLabel: "结构型"
source: "patterns/structural/adapter/README.md"
---

# Adapter

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Adapter converts an existing interface into the interface a client expects.

## 问题

Real systems rarely integrate with perfectly shaped APIs. A payment provider, legacy service, SDK, or vendor client may expose names, data shapes, and semantics that do not match your domain model. If client code calls that external interface directly, vendor details leak everywhere and future migration becomes expensive.

## 解决方案

Create an adapter that implements the interface your application owns. The adapter translates calls and data between your domain-facing contract and the incompatible external service.

## TypeScript 实现

This implementation models checkout payment processing:

- `PaymentProcessor` is the application-owned interface.
- `LegacyPaymentGateway` is an incompatible external API.
- `LegacyPaymentAdapter` translates application requests into legacy gateway calls.
- `CheckoutService` depends only on `PaymentProcessor`.

Run it from the repository root:

```bash
npm run adapter
```

## 适用场景

- Integrating third-party SDKs or vendor APIs.
- Wrapping legacy systems during migration.
- Keeping domain code independent from infrastructure details.
- Normalizing multiple providers behind one application interface.

## 不适用场景

- The external interface already matches the client contract.
- You control both sides and can safely change the original interface.
- The adapter only hides a deeper design issue without reducing coupling.

## 优点

- Keeps vendor-specific details out of business logic.
- Makes provider replacement easier.
- Improves testability by targeting an application-owned interface.

## 权衡

- Adds one more layer to maintain.
- Poorly named adapters can hide important behavior.
- Translation logic can become complex if provider semantics differ greatly.

## 相关模式

- Facade
- Proxy
- Bridge
