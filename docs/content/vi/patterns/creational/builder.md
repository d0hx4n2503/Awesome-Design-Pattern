---
title: "Builder"
slug: "builder"
group: "creational"
groupLabel: "Khởi tạo"
source: "patterns/creational/builder/README.md"
---

# Builder

> Tài liệu tiếng Việt này được đồng bộ từ README gốc và giữ các thuật ngữ kỹ thuật quan trọng để dễ đối chiếu với code TypeScript.

## Mục đích

Builder constructs complex objects step by step while keeping creation readable and valid.

## Vấn đề

Objects with many optional fields often lead to long constructors, unclear parameter order, and partially valid states. This gets worse for configuration, requests, reports, and test data.

## Giải pháp

Move construction into a builder that exposes meaningful methods and validates the final object before returning it.

## Triển khai TypeScript

This implementation builds a deployment configuration:

- `DeploymentConfig` is the final immutable object shape.
- `DeploymentConfigBuilder` provides expressive construction methods.
- `build()` validates required fields and returns a complete config.

Run it from the repository root:

```bash
npm run builder
```

## Khi nên dùng

- Object construction has many optional parameters.
- Valid object creation requires multiple steps.
- Constructor calls are hard to read.
- Test data setup needs readable defaults.

## Khi không nên dùng

- The object has only a few required fields.
- A plain object literal is clearer.
- The builder only duplicates setters without adding validation or readability.

## Lợi ích

- Improves readability at call sites.
- Prevents invalid partially constructed objects.
- Makes defaults and validation explicit.

## Đánh đổi

- Adds another abstraction.
- Can become verbose for simple objects.
- Needs discipline to avoid mutable builder leaks.

## Pattern liên quan

- Factory Method
- Abstract Factory
- Prototype
