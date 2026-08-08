# Decorator

## Intent

Decorator adds behavior to an object by wrapping it with another object that follows the same interface.

## Problem

Feature combinations can explode when modeled with inheritance. For example, logging, caching, retrying, metrics, and authorization can be combined in many ways. Creating a subclass for every combination quickly becomes unmaintainable.

## Solution

Keep the core object focused and wrap it with decorators that add one behavior at a time. Because decorators implement the same interface as the wrapped object, they can be stacked.

## TypeScript Implementation

This implementation models report generation:

- `ReportGenerator` is the common interface.
- `SalesReportGenerator` produces the base report.
- `TimestampReportDecorator` adds generated-at metadata.
- `SignatureReportDecorator` adds an approval signature.

Run it from the repository root:

```bash
npm run decorator
```

## When To Use

- Behavior needs to be composed dynamically.
- Inheritance would create too many subclasses.
- You want to add cross-cutting behavior without modifying the core object.

## When Not To Use

- The wrapping order is unclear or fragile.
- Debugging nested wrappers would be more expensive than the flexibility gained.
- A simple function composition would be enough.

## Benefits

- Supports open/closed extension.
- Keeps each behavior small and focused.
- Allows runtime composition.

## Trade-offs

- Adds object nesting.
- Ordering can affect behavior.
- Stack traces and debugging can become less direct.

## Related Patterns

- Proxy
- Composite
- Strategy
