# Observer

## Intent

Observer defines a one-to-many dependency so that subscribers are notified when a subject changes.

## Problem

When one object changes state, several other parts of the system may need to react. If the subject directly calls every dependent object, it becomes tightly coupled to all consumers and every new reaction requires editing the subject.

## Solution

Let observers subscribe to a subject. The subject publishes events through a stable observer interface without knowing what each observer does with the update.

## TypeScript Implementation

This implementation models order status updates:

- `OrderStatusSubject` owns the order state.
- `OrderObserver` defines the subscriber contract.
- `EmailNotifier` and `AnalyticsTracker` react independently.
- New observers can be added without changing the subject.

Run it from the repository root:

```bash
npm run observer
```

## When To Use

- Event notification.
- Pub/sub style workflows.
- UI state updates.
- Domain events where multiple reactions are expected.

## When Not To Use

- There is only one known receiver.
- Ordering of side effects is critical but not controlled.
- Debugging event chains would become too difficult.

## Benefits

- Reduces coupling between subject and subscribers.
- Supports adding reactions without changing the subject.
- Keeps event producers focused on state changes.

## Trade-offs

- Event flow can be harder to trace.
- Subscriber failures need explicit handling.
- Too many observers can create hidden side effects.

## Related Patterns

- Mediator
- Strategy
- Chain of Responsibility
