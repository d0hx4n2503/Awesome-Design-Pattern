# Adapter

## Intent

Adapter converts an existing interface into the interface a client expects.

## Problem

Real systems rarely integrate with perfectly shaped APIs. A payment provider, legacy service, SDK, or vendor client may expose names, data shapes, and semantics that do not match your domain model. If client code calls that external interface directly, vendor details leak everywhere and future migration becomes expensive.

## Solution

Create an adapter that implements the interface your application owns. The adapter translates calls and data between your domain-facing contract and the incompatible external service.

## TypeScript Implementation

This implementation models checkout payment processing:

- `PaymentProcessor` is the application-owned interface.
- `LegacyPaymentGateway` is an incompatible external API.
- `LegacyPaymentAdapter` translates application requests into legacy gateway calls.
- `CheckoutService` depends only on `PaymentProcessor`.

Run it from the repository root:

```bash
npm run adapter
```

## When To Use

- Integrating third-party SDKs or vendor APIs.
- Wrapping legacy systems during migration.
- Keeping domain code independent from infrastructure details.
- Normalizing multiple providers behind one application interface.

## When Not To Use

- The external interface already matches the client contract.
- You control both sides and can safely change the original interface.
- The adapter only hides a deeper design issue without reducing coupling.

## Benefits

- Keeps vendor-specific details out of business logic.
- Makes provider replacement easier.
- Improves testability by targeting an application-owned interface.

## Trade-offs

- Adds one more layer to maintain.
- Poorly named adapters can hide important behavior.
- Translation logic can become complex if provider semantics differ greatly.

## Related Patterns

- Facade
- Proxy
- Bridge
