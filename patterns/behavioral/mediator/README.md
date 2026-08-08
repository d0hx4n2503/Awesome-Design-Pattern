# Mediator

## Intent

Centralize communication between collaborating objects so they do not depend on each other directly.

## Problem

Many-to-many component communication creates tangled dependencies.

## Solution

Participants talk to a mediator, and the mediator coordinates delivery.

## TypeScript Implementation

`ChatRoom` routes messages between `ChatUser` instances.

```bash
npm run mediator
```

## Trade-offs

- Reduces direct coupling.
- Mediator complexity can grow quickly.
