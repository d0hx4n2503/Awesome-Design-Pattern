---
title: "Factory Method"
slug: "factory-method"
group: "creational"
groupLabel: "创建型"
source: "patterns/creational/factory-method/README.md"
---

# Factory Method

> 本中文文档与源 README 保持同步，并保留关键技术术语，方便与 TypeScript 实现对照阅读。

## 意图

Factory Method defines a creation method that returns objects through a common interface while allowing subclasses or concrete factories to decide which class to instantiate.

## 问题

Client code often needs a product by behavior, not by concrete class. If it directly creates every implementation with `new`, creation decisions spread across the codebase and each new product type requires editing multiple callers.

## 解决方案

Move object creation behind a factory method. Client code works with the product interface, while the factory encapsulates the concrete selection logic.

## TypeScript 实现

This implementation models notification delivery:

- `NotificationSender` is the product interface.
- `EmailNotificationSender` and `SmsNotificationSender` are concrete products.
- `NotificationFactory` exposes a factory method for creating the correct sender.
- `NotificationService` depends on the factory and product abstraction.

Run it from the repository root:

```bash
npm run factory-method
```

## 适用场景

- Object creation depends on runtime input.
- Client code should not know concrete classes.
- New product types should be added with minimal caller changes.
- Framework or domain code needs an extension point for creation.

## 不适用场景

- There is only one concrete class and creation is trivial.
- A simple constructor call is clearer.
- The factory becomes a large conditional dumping ground.

## 优点

- Reduces coupling to concrete classes.
- Centralizes creation rules.
- Makes product selection easier to test.

## 权衡

- Adds indirection around object creation.
- Can hide dependencies if the factory grows too much.
- May be overkill for small object graphs.

## 相关模式

- Abstract Factory
- Template Method
- Builder
