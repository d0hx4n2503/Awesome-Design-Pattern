---
title: "Factory Method"
slug: "factory-method"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/factory-method/README.md"
---

# Factory Method

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Factory Method defines a creation method that returns objects through a common interface while allowing subclasses or concrete factories to decide which class to instantiate.

## Vấn đề

Client code often needs a product by behavior, not by concrete class. If it directly creates every implementation with `new`, creation decisions spread across the codebase and each new product type requires editing multiple callers.

## Giải pháp

Move object creation behind a factory method. Client code works with the product interface, while the factory encapsulates the concrete selection logic.

## Triển khai TypeScript

This implementation models notification delivery:

- `NotificationSender` is the product interface.
- `EmailNotificationSender` and `SmsNotificationSender` are concrete products.
- `NotificationFactory` exposes a factory method for creating the correct sender.
- `NotificationService` depends on the factory and product abstraction.

Run it from the repository root:

```bash
npm run factory-method
```

## Khi nên dùng

- Object creation depends on runtime input.
- Client code should not know concrete classes.
- New product types should be added with minimal caller changes.
- Framework or domain code needs an extension point for creation.

## Khi không nên dùng

- There is only one concrete class and creation is trivial.
- A simple constructor call is clearer.
- The factory becomes a large conditional dumping ground.

## Lợi ích

- Reduces coupling to concrete classes.
- Centralizes creation rules.
- Makes product selection easier to test.

## Đánh đổi

- Adds indirection around object creation.
- Can hide dependencies if the factory grows too much.
- May be overkill for small object graphs.

## Pattern liên quan

- Abstract Factory
- Template Method
- Builder
