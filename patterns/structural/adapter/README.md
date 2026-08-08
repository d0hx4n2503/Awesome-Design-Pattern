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

## Practical Perspective

Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.

For Adapter, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.

## Real-World Use Cases

- Third-party API boundaries where Adapter keeps responsibilities separated.
- Legacy migration layers where Adapter keeps responsibilities separated.
- UI component composition where Adapter keeps responsibilities separated.
- Cross-cutting wrappers such as caching, logging, or access checks where Adapter keeps responsibilities separated.

## Decision Questions

- Which interface should client code depend on?
- Where should translation, composition, or access control live?
- Does this abstraction reduce coupling or just rename it?
- Use it to protect application code from third-party or legacy interfaces.
- Translate external errors and data shapes at the boundary.

## Design Checklist

- Start with the client code: define the interface you want callers to depend on.
- Keep concrete classes small and named after one responsibility.
- Make creation, selection, delegation, or notification rules explicit instead of hidden in conditionals.
- Prefer composition roots for wiring objects together.
- Document the reason for using the pattern so future contributors do not cargo-cult it.

## Common Mistakes

- Adding the pattern before the code has a real variation point.
- Creating abstractions that only rename concrete classes.
- Hiding important runtime behavior so debugging becomes harder.
- Letting examples stay toy-sized without showing where the pattern boundary sits in real code.
- Forgetting tests for negative paths, invalid states, or fallback behavior.

## Testing Guidance

- Test through the public abstraction, not private implementation details.
- Use fakes or test doubles for collaborators so the pattern seam is verified.
- Add one integration-style test proving the objects are wired correctly.
- Cover edge cases that motivated the pattern: missing strategy, rejected state transition, failed handler, invalid factory family, stale proxy cache, or similar.
- Keep tests named after behavior and business outcome rather than pattern terminology.

## Refactoring Signals

- The pattern is useful when adding a new variation no longer requires editing stable caller code.
- It is probably overdesigned when every new class has only one trivial method and no independent reason to exist.
- If contributors cannot explain the runtime flow quickly, simplify the wiring or improve names.
- If tests must mock too many layers, the abstraction boundary is likely in the wrong place.
