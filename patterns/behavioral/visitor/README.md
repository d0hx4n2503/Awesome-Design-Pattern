# Visitor

## Intent

Add operations to a stable object structure without changing the object classes.

## Problem

Tree structures often need many operations; putting all operations on nodes bloats the node classes.

## Solution

Nodes accept a visitor object, and each visitor implements operations for each node type.

## TypeScript Implementation

`SizeVisitor` calculates total size for a file tree.

```bash
npm run visitor
```

## Trade-offs

- Great when structure is stable and operations change.
- Adding new node types requires updating visitors.
