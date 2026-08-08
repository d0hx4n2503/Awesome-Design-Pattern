# Facade

## Intent

Facade provides a simple, stable interface over a more complex subsystem.

## Problem

Client code often needs to coordinate several services to complete one business workflow. If every caller knows the subsystem details, the workflow is duplicated and changes become risky.

## Solution

Create a facade that exposes a high-level operation. The facade orchestrates the subsystem internally while clients depend on one clear API.

## TypeScript Implementation

This implementation models order placement:

- `InventoryService`, `PaymentService`, and `ShippingService` are subsystem services.
- `OrderFacade` coordinates the workflow.
- Callers place an order through one method instead of orchestrating every subsystem.

Run it from the repository root:

```bash
npm run facade
```

## When To Use

- A workflow requires several subsystem calls.
- Client code is coupled to too many internal services.
- You want a clean module or service boundary.
- The subsystem is valid but too detailed for most callers.

## When Not To Use

- The facade becomes a god object.
- It hides important domain decisions from callers.
- The subsystem is already simple and stable.

## Benefits

- Reduces coupling at module boundaries.
- Centralizes workflow orchestration.
- Makes common operations easier to use correctly.

## Trade-offs

- Can become too broad if not scoped carefully.
- May hide useful lower-level capabilities.
- Needs clear naming to avoid becoming a vague service layer.

## Related Patterns

- Adapter
- Mediator
- Proxy
