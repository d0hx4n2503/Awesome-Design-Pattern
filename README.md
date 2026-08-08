# Awe Design Pattern

**A documentation-first reference for the 23 Gang of Four design patterns.**

Awe Design Pattern is a structured learning repository for understanding, comparing, and eventually implementing the classic GoF design patterns. The project is intentionally organized like a production-grade engineering knowledge base: clear scope, predictable structure, explicit contribution rules, and automated validation.

The current phase is focused on high-quality documentation plus small TypeScript implementations added one pattern at a time.

## Why This Repository Exists

Design patterns are often taught as names to memorize. This repository takes a different approach: each pattern is explained through the problem it solves, the trade-offs it introduces, and the practical situations where it is worth using.

The goal is not to force patterns into every design. The goal is to build judgment.

## Project Status

| Area | Status |
|---|---|
| Pattern catalog | Complete: 23 GoF patterns |
| Pattern documentation | In progress |
| Source code examples | Started: TypeScript |
| CI validation | Active |
| Contribution guidelines | Active |

Each implementation lives directly inside its own pattern folder, next to the pattern README. Tests live under `test/` using the same group and pattern structure as `patterns/`.

## Repository Structure

```text
Awe-Design-Pattern/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE/
│   └── workflows/
├── docs/
│   ├── learning-roadmap.md
│   └── pattern-index.md
├── img/
├── patterns/
│   ├── creational/
│   ├── structural/
│   └── behavioral/
├── scripts/
├── test/
│   ├── creational/
│   ├── structural/
│   └── behavioral/
├── CONTEXT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── SECURITY.md
```

## Pattern Groups

### Creational Patterns

Creational patterns focus on object creation, lifecycle control, and reducing coupling between client code and concrete classes.

| Pattern | Purpose |
|---|---|
| Abstract Factory | Create families of related objects without depending on concrete classes. |
| Builder | Construct complex objects step by step with readable configuration. |
| Factory Method | Delegate object creation to a factory method or subclass. |
| Prototype | Create new objects by cloning existing prototypes. |
| Singleton | Ensure a single shared instance with controlled access. |

### Structural Patterns

Structural patterns focus on composition, object relationships, and stable boundaries between parts of a system.

| Pattern | Purpose |
|---|---|
| Adapter | Convert one interface into another expected by the client. |
| Bridge | Separate abstraction from implementation so both can evolve independently. |
| Composite | Represent individual objects and groups through the same interface. |
| Decorator | Add behavior by wrapping an object without modifying its class. |
| Facade | Provide a simplified interface to a complex subsystem. |
| Flyweight | Share common state to reduce memory usage across many objects. |
| Proxy | Control access to another object through a representative object. |

### Behavioral Patterns

Behavioral patterns focus on communication, responsibility distribution, workflows, and runtime behavior changes.

| Pattern | Purpose |
|---|---|
| Chain of Responsibility | Pass a request through a chain of handlers. |
| Command | Encapsulate an action or request as an object. |
| Interpreter | Represent and evaluate a simple grammar or DSL. |
| Iterator | Traverse a collection without exposing its internal structure. |
| Mediator | Centralize communication between collaborating objects. |
| Memento | Capture and restore object state without breaking encapsulation. |
| Observer | Notify dependent subscribers when a subject changes. |
| State | Change object behavior when its internal state changes. |
| Strategy | Swap algorithms or behaviors behind a common interface. |
| Template Method | Define a workflow skeleton while allowing selected steps to vary. |
| Visitor | Add operations to a stable object structure without changing the structure. |

## Learning Priority

Patterns are prioritized by practical frequency and learning value.

### Priority 1: Learn First

These patterns appear frequently in application code, frameworks, integrations, and service design.

| Pattern | Group | Common Use Cases |
|---|---|---|
| Strategy | Behavioral | Validation, pricing, sorting, payment flows |
| Factory Method | Creational | Framework extension points, object creation boundaries |
| Adapter | Structural | Third-party integrations, legacy system compatibility |
| Observer | Behavioral | Events, notifications, UI state, pub/sub |
| Decorator | Structural | Middleware, wrappers, streams, composable behavior |
| Facade | Structural | Service layer boundaries, simplified module APIs |
| Builder | Creational | Complex configuration, test data, request construction |
| Command | Behavioral | Jobs, queues, undo/redo, auditable actions |
| Iterator | Behavioral | Collection traversal and custom iteration rules |

### Priority 2: Learn Next

These patterns are common in specific architectural or framework contexts.

| Pattern | Group | Common Use Cases |
|---|---|---|
| Singleton | Creational | Configuration, logging, shared infrastructure |
| Template Method | Behavioral | Framework-controlled workflows |
| Proxy | Structural | Lazy loading, caching, access control |
| Composite | Structural | Trees, UI components, menus, folders |
| State | Behavioral | Workflows, lifecycle-heavy domain objects |
| Chain of Responsibility | Behavioral | Middleware, validation chains, approval flows |
| Abstract Factory | Creational | Product families, themes, providers, platforms |
| Prototype | Creational | Object templates, expensive initialization, cloning |

### Priority 3: Learn for Depth

These patterns are less common in everyday application code, but important for specialized systems.

| Pattern | Group | Common Use Cases |
|---|---|---|
| Mediator | Behavioral | Complex UI coordination, workflow orchestration |
| Bridge | Structural | Independent abstraction and implementation hierarchies |
| Visitor | Behavioral | ASTs, compilers, static analysis, tree operations |
| Memento | Behavioral | Undo history, snapshots, checkpoints |
| Flyweight | Structural | Memory-sensitive systems, editors, games, maps |
| Interpreter | Behavioral | Small DSLs, expression evaluation, rule engines |

## Documentation Standard

Each pattern document should explain:

- The problem the pattern solves
- The core idea behind the solution
- When the pattern is appropriate
- When the pattern is not appropriate
- Practical signals that suggest the pattern may help
- Benefits, trade-offs, and related patterns

This structure keeps the repository useful for both beginners and experienced engineers reviewing design options.

## Quality Gates

The repository includes a GitHub Actions workflow that validates:

- Exactly 23 pattern folders exist under `patterns/`
- Each pattern folder contains a `README.md`
- TypeScript implementations are allowed inside their own pattern folders
- Required repository documents are present and non-empty
- TypeScript code passes type-checking and tests

Local validation runs through:

```bash
npm run validate
```

Husky runs the same validation before commits.

See `.github/workflows/validate-docs.yml` for the validation rules.

## Roadmap

1. Complete concise documentation for all 23 patterns.
2. Improve cross-pattern comparisons and anti-pattern notes.
3. Add TypeScript implementations one pattern at a time.
4. Add diagrams for selected patterns.
5. Expand CI to validate implementations.

## Contributing

Please read `CONTRIBUTING.md` before opening a pull request. Contributions should improve clarity, accuracy, structure, or practical usefulness.

Keep implementation code inside the matching pattern folder.

## Security

This repository is currently documentation-focused and does not ship executable application code. Security reporting guidance is available in `SECURITY.md`.

## License

This project is licensed under the Apache License 2.0. See `LICENSE` for details.
