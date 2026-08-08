# Awesome Design Pattern

**A production-minded TypeScript reference for the 23 Gang of Four design patterns.**

Awesome Design Pattern helps engineers learn design patterns as practical engineering tools, not as UML trivia. Each pattern includes readable TypeScript code, mirrored tests, and documentation that explains the trade-offs behind using the pattern in real projects.

The goal is simple: help you recognize when a pattern clarifies a design, when it is unnecessary ceremony, and how to apply it without over-engineering your codebase.

## Why This Repository Exists

Design patterns are useful only when they solve a real design pressure: changing business rules, unstable integrations, complex object creation, duplicated workflow logic, or growing conditional branches. Used well, they make systems easier to extend and test. Used too early, they create abstractions nobody needs.

This repository treats every pattern through a practical lens:

- **What problem does it solve?** The design pressure that makes the pattern valuable.
- **When should I use it?** Concrete situations where it improves maintainability.
- **When should I avoid it?** Signals that the pattern would be over-engineering.
- **How does it look in TypeScript?** Small implementations with focused tests.
- **How would this show up in production?** Real-world examples, pitfalls, and testing guidance.

## What You Get

- All **23 GoF design patterns** organized by category.
- TypeScript implementations placed directly inside `patterns/`.
- Tests mirrored under `test/` so each pattern has a clear validation home.
- Pattern READMEs with practical guidance, trade-offs, mistakes, and testing strategy.
- Astro documentation generated from the pattern READMEs.
- GitBook-style docs UI with search, light/dark theme, and English/Vietnamese/Chinese routes.
- CI workflows split by responsibility: docs, format, test, e2e smoke, CodeQL, and release.

## Quick Start

```bash
npm install
npm run validate
npm run docs:dev
```

Open the local docs site at:

```text
http://localhost:4321/Awesome-Design-Pattern/
```

Run an individual pattern example:

```bash
npm run strategy
```

## How To Study The Patterns

A good learning path is not alphabetical. Start with patterns that appear often in application code, then move toward framework-level and specialized patterns.

1. **Start with common variation points:** Strategy, Factory Method, Adapter, Observer, Decorator, Facade.
2. **Move into workflow and lifecycle design:** Command, Iterator, State, Template Method, Chain of Responsibility.
3. **Study object creation and structure:** Builder, Abstract Factory, Prototype, Composite, Proxy, Bridge.
4. **Finish with specialized tools:** Visitor, Memento, Flyweight, Interpreter, Mediator.

While reading a pattern, ask:

- What changes more often: the caller, the object, the algorithm, or the integration boundary?
- Does the pattern reduce coupling, or does it only add more files?
- Can I test the behavior more easily after introducing the abstraction?
- Would a plain function, object literal, or small module be clearer?

## Pattern Decision Guide

Use this table as a practical first pass. It is intentionally opinionated: patterns are not goals; they are tools for specific design pressure.

| Pattern                 | Use When                                                                                                             | Avoid When                                                                                     |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Strategy                | Multiple algorithms or policies share the same contract and must vary by runtime, tenant, product, or configuration. | There is only one behavior, or a simple function parameter communicates the variation clearly. |
| Factory Method          | A workflow needs objects but should not know concrete classes or construction rules.                                 | You only need direct construction, or product families must be created together.               |
| Adapter                 | Application code must work with a third-party, legacy, or incompatible interface.                                    | You own both interfaces and can refactor them directly.                                        |
| Observer                | Many independent subscribers need to react to one state change or event.                                             | Reaction order is business-critical or failures must be transactional with the publisher.      |
| Decorator               | Optional behaviors such as caching, logging, retry, or formatting should be stacked without subclass explosion.      | The behavior changes the public contract or ordering is too hard to reason about.              |
| Facade                  | A common use case coordinates multiple subsystem calls and callers need a simpler entry point.                       | The facade becomes a dumping ground for unrelated workflows.                                   |
| Builder                 | Object construction has many options, defaults, or invalid combinations that need readable setup.                    | A plain object literal or constructor is already clear.                                        |
| Command                 | Actions need queuing, retry, audit, undo, permissions, or delayed execution.                                         | The action is just a direct call with no lifecycle or metadata.                                |
| Iterator                | Callers need to traverse data without knowing whether it is stored as arrays, pages, cursors, trees, or streams.     | A normal array loop is clearer and storage details are already public.                         |
| Singleton               | One process-wide instance is a real invariant, such as configuration, logging, or a shared infrastructure manager.   | It is only being used as a convenient global variable or it holds request/user-specific state. |
| Template Method         | A workflow order must stay fixed while subclasses customize selected steps.                                          | Composition would be clearer or subclasses need to change the workflow freely.                 |
| Proxy                   | Access to an object needs control: authorization, caching, lazy loading, remote access, or rate limiting.            | The interface must change; use Adapter, or optional behavior should stack; use Decorator.      |
| Composite               | Leaves and groups should be treated uniformly in a tree-like structure.                                              | Leaves and groups have very different operations or the structure is not naturally recursive.  |
| State                   | Behavior depends on lifecycle state and invalid transitions must be explicit.                                        | State is just passive data with no behavior.                                                   |
| Chain of Responsibility | A request moves through ordered handlers that may stop early, such as middleware or validation chains.               | Every step must always run or the order is not meaningful.                                     |
| Abstract Factory        | A family of related products must be created consistently, such as themes, providers, or platform components.        | Only one product type varies; use Factory Method or a simple factory.                          |
| Prototype               | New objects should be cloned from configured templates or expensive baselines.                                       | Copy semantics are unclear, or unique resources/identities would be cloned accidentally.       |
| Mediator                | Many components coordinate through complex interaction rules and direct references are becoming a mesh.              | Only a few objects communicate clearly, or the mediator would become a god object.             |
| Bridge                  | Two independent dimensions of variation would otherwise create a class explosion.                                    | There is only one variation axis; Strategy or simple composition is enough.                    |
| Visitor                 | Object structures are stable but new operations over those structures are added often.                               | Element types change frequently, because every visitor must be updated.                        |
| Memento                 | Undo, rollback, draft recovery, or checkpoint behavior needs state snapshots without exposing internals.             | State is huge, snapshot retention is risky, or event sourcing is the better model.             |
| Flyweight               | A large number of objects share measurable immutable state and memory usage matters.                                 | Object count is small or the shared state is mutable/user-specific.                            |
| Interpreter             | A small domain-specific language or expression tree needs to be represented and evaluated.                           | The grammar is large or rapidly changing; use a parser/rules engine instead.                   |

## Avoiding Over-Engineering

Design patterns should pay rent. Introduce one only when it makes a future change cheaper or the current code easier to reason about.

Good signals:

- Adding a new variation currently requires editing stable, unrelated code.
- Tests are hard because creation, selection, or side effects are tangled together.
- Integration details leak into domain or application logic.
- A lifecycle or workflow has enough rules that invalid states are easy to create.
- You can name the abstraction in business terms, not only pattern terms.

Bad signals:

- The pattern is added before there are at least two real variations.
- The abstraction only renames a concrete class.
- The code becomes harder to trace at runtime.
- Tests require mocking many layers just to verify one behavior.
- A simple function, module, object literal, or dependency injection setup would be clearer.

A practical rule: **start simple, wait for pressure, then refactor toward a pattern when the pattern describes the shape the code is already asking for.**

## Repository Structure

```text
Awesome-Design-Pattern/
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   |-- PULL_REQUEST_TEMPLATE/
|   `-- workflows/
|-- docs/
|   |-- content/
|   |   |-- en/
|   |   |-- vi/
|   |   `-- zh/
|   |-- public/
|   `-- src/
|-- img/
|-- patterns/
|   |-- creational/
|   |-- structural/
|   `-- behavioral/
|-- scripts/
|-- test/
|   |-- creational/
|   |-- structural/
|   `-- behavioral/
|-- CONTEXT.md
|-- CONTRIBUTING.md
|-- LICENSE
|-- README.md
`-- SECURITY.md
```

## Implementation Model

Pattern source code belongs inside the matching pattern folder:

```text
patterns/behavioral/strategy/index.ts
```

Tests use the same path under `test/`:

```text
test/behavioral/strategy/index.test.ts
```

Pattern documentation starts in the pattern README and is synced into the Astro docs site:

```text
patterns/behavioral/strategy/README.md
docs/content/en/patterns/behavioral/strategy.md
```

This keeps code, tests, and documentation easy to find, review, and extend.

## Pattern Priority

Implementation follows practical adoption order: common patterns first, specialized patterns later.

### Priority 1 - Highest Practical Value

| Order | Pattern        | Group      | Why It Comes Early                                |
| ----: | -------------- | ---------- | ------------------------------------------------- |
|     1 | Strategy       | Behavioral | Replaces conditional algorithms and policy logic. |
|     2 | Factory Method | Creational | Creates clean object creation boundaries.         |
|     3 | Adapter        | Structural | Makes third-party and legacy integrations clean.  |
|     4 | Observer       | Behavioral | Powers events, state changes, and pub/sub flows.  |
|     5 | Decorator      | Structural | Adds behavior without subclass explosion.         |
|     6 | Facade         | Structural | Simplifies complex subsystems behind stable APIs. |
|     7 | Builder        | Creational | Makes complex object construction readable.       |
|     8 | Command        | Behavioral | Encapsulates actions for queues, jobs, and undo.  |
|     9 | Iterator       | Behavioral | Standardizes traversal without exposing storage.  |

### Priority 2 - Common in Architecture and Frameworks

| Pattern                 | Group      | Typical Usage                                  |
| ----------------------- | ---------- | ---------------------------------------------- |
| Singleton               | Creational | Config, logging, shared infrastructure.        |
| Template Method         | Behavioral | Framework-defined workflows.                   |
| Proxy                   | Structural | Caching, lazy loading, authorization.          |
| Composite               | Structural | Trees, menus, folders, UI components.          |
| State                   | Behavioral | Lifecycles, workflows, stateful domain models. |
| Chain of Responsibility | Behavioral | Middleware, validation, approval flows.        |
| Abstract Factory        | Creational | Product families, themes, providers.           |
| Prototype               | Creational | Cloning templates or expensive objects.        |

### Priority 3 - Specialized but Important

| Pattern     | Group      | Typical Usage                              |
| ----------- | ---------- | ------------------------------------------ |
| Mediator    | Behavioral | Complex component coordination.            |
| Bridge      | Structural | Independent abstraction/implementation.    |
| Visitor     | Behavioral | ASTs, static analysis, tree operations.    |
| Memento     | Behavioral | Undo snapshots and state checkpoints.      |
| Flyweight   | Structural | Memory-sensitive object sharing.           |
| Interpreter | Behavioral | Small DSLs, rules, and expression parsing. |

## Documentation Site

The repository includes an Astro-powered documentation site under `docs/`. Pattern READMEs remain close to the source code, while `npm run docs:sync` mirrors them into localized documentation content for the site.

| Command                | Purpose                                                  |
| ---------------------- | -------------------------------------------------------- |
| `npm run docs:sync`    | Sync pattern READMEs into `docs/content/`.               |
| `npm run docs:dev`     | Run the Astro documentation site locally.                |
| `npm run docs:build`   | Sync content and build the static site into `dist/site`. |
| `npm run docs:preview` | Preview the production documentation build.              |

The docs UI supports search, light/dark theme switching, and three locale routes: English (`/en/`), Vietnamese (`/vi/`), and Chinese (`/zh/`).

## Available Scripts

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `npm run format`       | Format the repository with Prettier.         |
| `npm run format:check` | Check formatting without writing changes.    |
| `npm run check`        | Run TypeScript type-checking.                |
| `npm test`             | Run Node's built-in test runner through TSX. |
| `npm run validate`     | Run format check, type-check, and tests.     |
| `npm run docs:build`   | Build the Astro documentation site.          |
| `npm run strategy`     | Execute the Strategy pattern example.        |

## Quality Gates

The repository uses separate workflows for separate responsibilities:

| Workflow            | Responsibility                                       |
| ------------------- | ---------------------------------------------------- |
| `validate-docs.yml` | Validate required docs, folders, and docs app shape. |
| `format.yml`        | Enforce Prettier formatting.                         |
| `test.yml`          | Type-check and unit test TypeScript.                 |
| `e2e.yml`           | Run smoke checks for executable examples.            |
| `codeql.yml`        | Run CodeQL security analysis.                        |
| `release.yml`       | Publish tagged releases.                             |
| `docs_build.yml`    | Build Astro docs on main and pull requests.          |
| `docs_deploy.yml`   | Deploy Astro docs to GitHub Pages.                   |

Husky runs `npm run validate` before commits.

## Engineering Principles

- Use a pattern to solve a visible design pressure, not to make code look advanced.
- Keep examples small enough to learn from but realistic enough to transfer to production code.
- Prefer composition and interfaces where they clarify ownership.
- Keep business rules close to the object that owns them.
- Avoid clever wiring that hides runtime behavior.
- Export only what tests and future examples need.
- Keep pattern docs close to implementation and sync them into the docs site.
- Keep tests close to the pattern structure.

## Contributing

Read `CONTRIBUTING.md` before opening a pull request. The short version: keep changes focused, write clear English, include tests for implementation changes, and preserve the 23-pattern structure.

## Security

Security reporting guidance is available in `SECURITY.md`.

## License

This project is licensed under the Apache License 2.0. See `LICENSE`.
