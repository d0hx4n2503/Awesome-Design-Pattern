---
title: "Singleton"
slug: "singleton"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/singleton/README.md"
---

# Singleton

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Ensure one controlled instance exists for a class and expose a single access point to it.

## Vấn đề

Shared runtime services such as configuration can become inconsistent when multiple instances are created independently.

## Giải pháp

Hide construction behind a static accessor. Keep the shared object small, explicit, and test-resettable.

## Triển khai TypeScript

`AppConfig` stores process-wide settings. `getInstance()` always returns the same object, while `resetForTest()` keeps tests isolated.

```bash
npm run singleton
```

## Khi nên dùng

- One shared process-level object is required.
- Multiple instances would create inconsistent state.
- Central lifecycle control is valuable.

## Đánh đổi

- Can hide dependencies.
- Mutable global state can make tests fragile.
- Dependency injection is often cleaner for application services.

## Pattern liên quan

- Factory Method
- Facade
- Flyweight
