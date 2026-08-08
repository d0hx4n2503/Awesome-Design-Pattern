---
title: "Factory Method"
slug: "factory-method"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/factory-method/README.md"
---

# Factory Method

> Tài liệu tiếng Việt cho pattern này được đồng bộ từ nội dung gốc và giữ nguyên thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Intent

Factory Method defines a creation method that returns objects through a common interface while allowing subclasses or concrete factories to decide which class to instantiate.

## Problem

Client code often needs a product by behavior, not by concrete class. If it directly creates every implementation with `new`, creation decisions spread across the codebase and each new product type requires editing multiple callers.

## Solution

Move object creation behind a factory method. Client code works with the product interface, while the factory encapsulates the concrete selection logic.

## TypeScript Implementation

This implementation models notification delivery:

- `NotificationSender` is the product interface.
- `EmailNotificationSender` and `SmsNotificationSender` are concrete products.
- `NotificationFactory` exposes a factory method for creating the correct sender.
- `NotificationService` depends on the factory and product abstraction.

Run it from the repository root:

```bash
npm run factory-method
```

## When To Use

- Object creation depends on runtime input.
- Client code should not know concrete classes.
- New product types should be added with minimal caller changes.
- Framework or domain code needs an extension point for creation.

## When Not To Use

- There is only one concrete class and creation is trivial.
- A simple constructor call is clearer.
- The factory becomes a large conditional dumping ground.

## Benefits

- Reduces coupling to concrete classes.
- Centralizes creation rules.
- Makes product selection easier to test.

## Trade-offs

- Adds indirection around object creation.
- Can hide dependencies if the factory grows too much.
- May be overkill for small object graphs.

## Related Patterns

- Abstract Factory
- Template Method
- Builder
