# Template Method

## Intent

Define the skeleton of an algorithm while allowing subclasses to customize selected steps.

## Problem

Several workflows share the same high-level sequence but differ in small details. Duplicating the full workflow makes ordering rules inconsistent.

## Solution

Keep the invariant workflow in a base class and defer variable steps to protected methods.

## TypeScript Implementation

`DataImportJob` owns the import sequence. `CsvImportJob` customizes extraction and parsing while validation and persistence remain shared.

```bash
npm run template-method
```

## Trade-offs

- Great for stable workflows.
- Can become rigid because it relies on inheritance.
- Strategy may be better when runtime composition matters.
