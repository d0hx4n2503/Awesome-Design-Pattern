# Awesome Design Pattern

**Production-minded TypeScript implementations of the 23 Gang of Four design patterns.**

Awesome Design Pattern is a learning and reference repository for engineers who want to understand design patterns through practical, readable TypeScript code. Each pattern lives in its own folder, includes focused documentation, and is tested through a mirrored test structure.

This repository is intentionally built like a professional engineering project: predictable layout, automated checks, formatting, tests, CodeQL analysis, release workflow, and pre-commit validation.

## What You Get

- All **23 GoF design patterns** organized by category.
- TypeScript implementations placed directly inside `patterns/`.
- Tests mirrored under `test/` so each pattern has a clear validation home.
- Astro documentation generated from pattern READMEs.
- Light/dark docs UI with English, Vietnamese, and Chinese locale routes.
- CI workflows split by responsibility: docs, format, test, e2e smoke, CodeQL, and release.

## Quick Start

```bash
npm install
npm run validate
npm run docs:dev
```

Run any pattern directly with its script:

| Pattern  | Run Command        | Source                                  | Test                                     |
| -------- | ------------------ | --------------------------------------- | ---------------------------------------- |
| Strategy | `npm run strategy` | `patterns/behavioral/strategy/index.ts` | `test/behavioral/strategy/index.test.ts` |

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

This keeps every pattern easy to find, review, and extend.

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

The docs UI supports light/dark theme switching and three locale routes: English (`/en/`), Vietnamese (`/vi/`), and Chinese (`/zh/`).

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

| Workflow            | Responsibility                                      |
| ------------------- | --------------------------------------------------- |
| `validate-docs.yml` | Validate required docs, folders, and docs app shape |
| `format.yml`        | Enforce Prettier formatting                         |
| `test.yml`          | Type-check and unit test TypeScript                 |
| `e2e.yml`           | Run smoke checks for executable examples            |
| `codeql.yml`        | Run CodeQL security analysis                        |
| `release.yml`       | Publish tagged releases                             |
| `docs_build.yml`    | Build Astro docs on main and pull requests          |
| `docs_deploy.yml`   | Deploy Astro docs to GitHub Pages                   |

Husky runs `npm run validate` before commits.

## Engineering Principles

- Keep examples small, explicit, and realistic.
- Prefer composition and interfaces where they clarify the pattern.
- Avoid cleverness that hides the point of the pattern.
- Export only what tests and future examples need.
- Keep pattern docs close to implementation and sync them into the docs site.
- Keep tests close to the pattern structure.

## Contributing

Read `CONTRIBUTING.md` before opening a pull request. The short version: keep changes focused, write clear English, include tests for implementation changes, and preserve the 23-pattern structure.

## Security

Security reporting guidance is available in `SECURITY.md`.

## License

This project is licensed under the Apache License 2.0. See `LICENSE`.
