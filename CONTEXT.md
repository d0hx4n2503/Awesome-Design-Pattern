# Project Context

## Summary

Awe Design Pattern is a documentation-first repository for the 23 Gang of Four design patterns. The repository is intended to become a professional learning and reference resource before it becomes an implementation catalog.

The project emphasizes practical engineering judgment: when a pattern helps, when it creates unnecessary complexity, and how patterns relate to real software design decisions.

## Current Phase

The repository is currently in the **documentation baseline** phase.

This means:

- All 23 GoF patterns must exist as folders under `patterns/`.
- Each pattern folder should contain documentation only.
- No source code should be added under `patterns/` yet.
- Root-level documentation should be polished and professional.
- CI should validate repository structure and documentation expectations.

## Design Principles

### Documentation Before Implementation

The repository should establish a strong conceptual foundation before adding code examples. This prevents implementation details from distracting from the purpose and trade-offs of each pattern.

### Practical Over Theoretical

Pattern explanations should be grounded in real engineering scenarios such as integrations, middleware, workflows, validation, UI trees, queues, and stateful domain objects.

### Small, Reviewable Modules

Changes should be committed by module or topic. For example, root documentation, creational patterns, structural patterns, behavioral patterns, CI configuration, and repository policy should be separate commits when possible.

### No Pattern Worship

The repository should not present design patterns as rules to apply everywhere. Each pattern should include situations where it is useful and situations where it may be unnecessary or harmful.

## Repository Areas

| Path | Purpose |
|---|---|
| `.github/` | GitHub templates, workflow validation, and repository automation metadata |
| `docs/` | Roadmaps, indexes, and supporting documentation |
| `img/` | Future diagrams and visual assets |
| `patterns/` | Documentation for the 23 GoF patterns |
| `scripts/` | Future helper scripts for validation or generation |
| `README.md` | Primary public-facing project overview |
| `CONTRIBUTING.md` | Contribution rules and review expectations |
| `SECURITY.md` | Security reporting and scope |

## Pattern Folder Rules

The `patterns/` directory is intentionally constrained.

Expected groups:

- `patterns/creational/`
- `patterns/structural/`
- `patterns/behavioral/`

Expected leaf pattern folder count:

- Creational: 5
- Structural: 7
- Behavioral: 11
- Total: 23

Each leaf pattern folder should contain a `README.md`.

During the current phase, source code files should not be added to these folders.

## Documentation Tone

Root-level documentation should feel like a mature open-source or company-maintained repository:

- Clear
- Direct
- Polished
- Practical
- Consistent
- Easy to scan

Pattern-level documentation may be more educational, but should still avoid vague explanations.

## Future Direction

After the documentation baseline is stable, the repository can grow in stages:

1. Add diagrams for selected patterns.
2. Improve pattern comparisons and anti-pattern sections.
3. Add implementation examples in a planned language or set of languages.
4. Add tests and tooling for executable examples.
5. Expand CI to validate code quality once code exists.

## Maintainer Notes

When making changes:

- Keep commits focused.
- Preserve the 23-pattern structure.
- Avoid adding dependencies without a clear reason.
- Update CI when repository rules change.
- Keep `README.md` professional and suitable as the first page a reviewer sees.
