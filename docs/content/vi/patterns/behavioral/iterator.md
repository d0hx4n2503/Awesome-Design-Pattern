---
title: "Iterator"
slug: "iterator"
group: "behavioral"
groupLabel: "Behavioral"
source: "patterns/behavioral/iterator/README.md"
---

# Iterator

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

## Intent

Iterator provides a standard way to traverse a collection without exposing its internal representation.

## Problem

Client code often needs to traverse data, but it should not depend on whether that data is stored as an array, tree, page cursor, or custom structure. Exposing internal storage makes later changes expensive.

## Solution

Expose iteration through a stable iterator protocol. Clients consume values sequentially while the collection owns traversal details.

## TypeScript Implementation

This implementation models paginated search results:

- `PaginatedResults` stores items internally by pages.
- It implements `Iterable<T>` so callers can use `for...of`.
- Clients do not need to know how pages are stored.

Run it from the repository root:

```bash
npm run iterator
```

## When To Use

- Collection internals should remain hidden.
- You need a consistent traversal API.
- A collection supports custom ordering or pagination.
- Clients should not manage indexes manually.

## When Not To Use

- A plain array is already enough.
- Traversal requires highly specialized performance controls.
- The iterator hides important side effects such as network calls.

## Benefits

- Encapsulates traversal logic.
- Keeps client code simple.
- Allows collection internals to change later.

## Trade-offs

- Adds abstraction around simple loops.
- Lazy iteration can surprise callers if side effects are involved.
- Custom iterators need clear naming and tests.

## Related Patterns

- Composite
- Visitor
- Interpreter
