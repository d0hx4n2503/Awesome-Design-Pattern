# Security Policy

## Project Scope

TypeScript Design Patterns Handbook is currently a learning repository with documentation and small TypeScript pattern implementations. It does not ship production services, containers, or deployment artifacts.

Security risk is therefore limited primarily to repository content, contribution workflow, documentation integrity, development dependencies, and example implementation guidance.

## Supported Versions

This repository does not currently publish versioned releases.

Security guidance applies to the default branch and the latest repository content.

## Reporting a Vulnerability

If you identify a security issue related to this repository, please report it responsibly.

Examples include:

- Malicious content submitted through documentation or assets
- Unsafe commands proposed in scripts or documentation
- Suspicious links, downloads, or external references
- Supply-chain risk introduced by future tooling or dependencies
- Misleading implementation guidance that could create insecure code later

Please open a private report if the hosting platform supports private vulnerability reporting. If private reporting is unavailable, open an issue with a minimal description and avoid publishing exploit details.

## What Not To Report

The following are usually not security vulnerabilities for this project:

- Disagreement with pattern prioritization
- Documentation wording improvements
- Missing implementation examples
- Broken links without security impact
- General style or formatting issues

Use normal issues or pull requests for those cases.

## Handling Process

Security reports should be handled with the following priorities:

1. Confirm whether the report is in scope.
2. Remove or neutralize harmful content if necessary.
3. Review related documentation, scripts, workflows, or assets.
4. Add preventive validation when practical.
5. Document the fix in the commit or pull request.

## Implementation Security

As executable examples are added, this policy should be expanded to cover:

- Dependency scanning
- Static analysis
- Secret scanning
- Secure coding guidelines
- Language-specific vulnerability handling
- Supported release versions

The repository should avoid unnecessary dependencies and generated artifacts.
