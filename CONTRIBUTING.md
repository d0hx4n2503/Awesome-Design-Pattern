# Contributing

Thank you for contributing to **TypeScript Design Patterns Handbook**.

This repository is designed to be a professional, documentation-first reference for the 23 Gang of Four design patterns. Contributions should make the material clearer, more accurate, easier to navigate, or more useful in real engineering contexts.

## Contribution Principles

- Explain the problem before explaining the pattern.
- Prefer practical engineering language over abstract textbook phrasing.
- Include trade-offs, not only benefits.
- Keep each change focused and reviewable.
- Keep implementation work focused on one pattern at a time.
- Place source code directly inside the matching folder under `patterns/`.

## Repository Scope

The repository currently contains:

- Root-level project documentation
- A learning roadmap
- A pattern index
- One folder for each of the 23 GoF patterns
- README documentation for each pattern
- A mirrored `test/` tree for implementation tests
- GitHub templates and validation workflow

The repository contains TypeScript implementations directly inside pattern folders as they are added.

## Pattern Documentation Format

Each pattern README should include:

- Purpose
- Problem
- Core idea
- When to use it
- When not to use it
- Recognition signals
- Benefits
- Drawbacks
- Related patterns

Use concise, direct explanations. A reader should understand not only what the pattern is, but why it exists and what it costs.

## Documentation Style

- Use English for root-level documentation.
- Keep headings consistent across pattern documents.
- Avoid unnecessary jargon.
- Avoid claiming that a pattern is universally good.
- Prefer concrete examples such as payments, validation, workflows, middleware, UI trees, queues, and integrations.
- Keep tables readable on GitHub.

## Commit Guidelines

Use clear, scoped commit messages:

- `docs: update repository overview`
- `docs: improve strategy pattern notes`
- `docs: add structural pattern comparisons`
- `ci: validate documentation structure`
- `chore: update repository metadata`

When possible, commit by module or topic instead of batching unrelated changes together.

## Pull Request Checklist

Before opening a pull request, verify that:

- The change fits the repository scope.
- `patterns/` still contains exactly the 23 GoF pattern folders.
- Implementation files live inside the matching pattern folder.
- Tests live in the matching path under `test/`.
- Required documentation files are not empty.
- The writing is clear, practical, and consistent.
- Trade-offs are included where relevant.

## Review Expectations

Reviewers should check:

- Accuracy of pattern descriptions
- Practical usefulness of examples and explanations
- Consistency with the repository structure
- Whether the change introduces unnecessary complexity
- Whether documentation remains approachable for learners

## Implementation Guidelines

Implementation examples should be added as focused TypeScript modules inside the relevant pattern folder.

Avoid adding broad build systems, generated code, or unrelated dependencies unless they support the current pattern implementation.
