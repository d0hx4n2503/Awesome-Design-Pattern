---
title: "Prototype"
slug: "prototype"
group: "creational"
groupLabel: "Creational"
source: "patterns/creational/prototype/README.md"
---

# Prototype

> This localized route is synced from the source pattern README and keeps technical terminology aligned with the TypeScript implementation.

## Intent

Create new objects by cloning an existing object instead of constructing from scratch.

## Problem

Repeatedly setting up similar objects duplicates configuration and risks inconsistent defaults.

## Solution

Use a configured prototype as a template and clone it with explicit overrides.

## TypeScript Implementation

`CampaignPrototype` clones campaign templates while copying mutable arrays safely.

```bash
npm run prototype
```

## Trade-offs

- Reduces repetitive setup.
- Clone semantics must be explicit.
