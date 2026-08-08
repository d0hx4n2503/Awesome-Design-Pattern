---
title: "Observer"
slug: "observer"
group: "behavioral"
groupLabel: "Hành vi"
source: "patterns/behavioral/observer/README.md"
---

# Observer

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Observer defines a one-to-many dependency so that subscribers are notified when a subject changes.

## Vấn đề

When one object changes state, several other parts of the system may need to react. If the subject directly calls every dependent object, it becomes tightly coupled to all consumers and every new reaction requires editing the subject.

## Giải pháp

Let observers subscribe to a subject. The subject publishes events through a stable observer interface without knowing what each observer does with the update.

## Triển khai TypeScript

This implementation models order status updates:

- `OrderStatusSubject` owns the order state.
- `OrderObserver` defines the subscriber contract.
- `EmailNotifier` and `AnalyticsTracker` react independently.
- New observers can be added without changing the subject.

Run it from the repository root:

```bash
npm run observer
```

## Khi nên dùng

- Event notification.
- Pub/sub style workflows.
- UI state updates.
- Domain events where multiple reactions are expected.

## Khi không nên dùng

- There is only one known receiver.
- Ordering of side effects is critical but not controlled.
- Debugging event chains would become too difficult.

## Lợi ích

- Reduces coupling between subject and subscribers.
- Supports adding reactions without changing the subject.
- Keeps event producers focused on state changes.

## Đánh đổi

- Event flow can be harder to trace.
- Subscriber failures need explicit handling.
- Too many observers can create hidden side effects.

## Pattern liên quan

- Mediator
- Strategy
- Chain of Responsibility
