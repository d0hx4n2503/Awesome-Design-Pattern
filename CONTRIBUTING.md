# Contributing

Thank you for contributing to **Awe Design Pattern**.

This repository is designed to be a professional, documentation-first reference for the 23 Gang of Four design patterns. Contributions should make the material clearer, more accurate, easier to navigate, or more useful in real engineering contexts.

## Contribution Principles

- Explain the problem before explaining the pattern.
- Prefer practical engineering language over abstract textbook phrasing.
- Include trade-offs, not only benefits.
- Keep each change focused and reviewable.
- Preserve the documentation-first scope until implementation work is explicitly started.
- Do not add source code under `patterns/` during the current phase.

## Repository Scope

The repository currently contains:

- Root-level project documentation
- A learning roadmap
- A pattern index
- One folder for each of the 23 GoF patterns
- README documentation for each pattern
- GitHub templates and validation workflow

The repository does not currently contain implementation examples.

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
- Pattern folders remain documentation-only.
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

## Future Implementation Phase

Code examples will be added later as explicit implementation modules. Until then, avoid adding language-specific source files, package managers, build systems, or generated code.

This keeps the documentation baseline stable before the repository grows into executable examples.
