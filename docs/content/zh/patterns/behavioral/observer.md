---
title: "Observer"
slug: "observer"
group: "behavioral"
groupLabel: "行为型"
source: "patterns/behavioral/observer/README.md"
---

# Observer

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Observer defines a one-to-many dependency so that subscribers are notified when a subject changes.

## 问题

When one object changes state, several other parts of the system may need to react. If the subject directly calls every dependent object, it becomes tightly coupled to all consumers and every new reaction requires editing the subject.

## 解决方案

Let observers subscribe to a subject. The subject publishes events through a stable observer interface without knowing what each observer does with the update.

## TypeScript 实现

This implementation models order status updates:

- `OrderStatusSubject` owns the order state.
- `OrderObserver` defines the subscriber contract.
- `EmailNotifier` and `AnalyticsTracker` react independently.
- New observers can be added without changing the subject.

Run it from the repository root:

```bash
npm run observer
```

## 适用场景

- Event notification.
- Pub/sub style workflows.
- UI state updates.
- Domain events where multiple reactions are expected.

## 不适用场景

- There is only one known receiver.
- Ordering of side effects is critical but not controlled.
- Debugging event chains would become too difficult.

## 优点

- Reduces coupling between subject and subscribers.
- Supports adding reactions without changing the subject.
- Keeps event producers focused on state changes.

## 权衡

- Event flow can be harder to trace.
- Subscriber failures need explicit handling.
- Too many observers can create hidden side effects.

## 相关模式

- Mediator
- Strategy
- Chain of Responsibility
