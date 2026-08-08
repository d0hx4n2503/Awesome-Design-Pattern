---
name: design-pattern-advisor
description: Help an agent analyze a software design problem, choose suitable Gang of Four design patterns, and avoid over-engineering by grounding recommendations in project context, constraints, and real change pressure.
---

# Design Pattern Advisor

Use this skill when a user asks which design pattern to use, how to refactor a design, how to reduce conditionals/coupling, or how to apply the 23 Gang of Four patterns in a real project.

The goal is not to force patterns into code. The goal is to identify the smallest design move that makes the system easier to change, test, and understand.

## Core Principle

A design pattern is justified only when it solves a real design pressure.

Before recommending a pattern, verify at least one of these pressures exists:

- A new variation requires editing stable, unrelated code.
- Business rules are growing as conditionals inside one class/function.
- Object creation is duplicated, inconsistent, or leaking concrete classes.
- Integration details from external systems leak into application/domain logic.
- A lifecycle has invalid transitions that are easy to trigger accidentally.
- Many components depend directly on each other and coordination is hard to trace.
- Tests are difficult because behavior selection, construction, or side effects are tangled.

If none of these pressures exists, recommend a simpler solution first.

## Required Workflow

Follow this workflow before suggesting a pattern.

### 1. Understand the Change Pressure

Ask or infer:

- What is changing often?
- What is hard to test?
- Which code is becoming coupled?
- Is the problem about creation, structure, behavior, lifecycle, traversal, or integration?
- Are there at least two real variations today, or only a hypothetical future variation?

If the context is incomplete, state assumptions instead of pretending certainty.

### 2. Start With the Simplest Viable Design

Consider these before any formal pattern:

- A plain function.
- A small module.
- A discriminated union.
- A configuration object.
- Dependency injection.
- A map/dictionary of handlers.
- A direct class with clear methods.

Only move to a pattern when the simpler option makes change harder or hides important ownership.

### 3. Classify the Problem

Use this classification:

| Problem Type                                         | Consider These Patterns |
| ---------------------------------------------------- | ----------------------- |
| Interchangeable algorithms or policies               | Strategy                |
| Object creation varies by type                       | Factory Method, Builder |
| Families of related objects                          | Abstract Factory        |
| Copying configured baselines                         | Prototype               |
| One shared process-level infrastructure instance     | Singleton               |
| External/legacy interface mismatch                   | Adapter                 |
| Optional wrappers around the same interface          | Decorator               |
| Simplifying a complex subsystem                      | Facade                  |
| Access control, caching, lazy loading, remote access | Proxy                   |
| Tree-like object structures                          | Composite               |
| Two independent variation axes                       | Bridge                  |
| Ordered request processing                           | Chain of Responsibility |
| Actions as first-class objects                       | Command                 |
| One-to-many notifications                            | Observer                |
| Lifecycle-dependent behavior                         | State                   |
| Fixed workflow with customizable steps               | Template Method         |
| Traversal without exposing representation            | Iterator                |
| Complex peer coordination                            | Mediator                |
| Undo/rollback snapshots                              | Memento                 |
| Stable structures with changing operations           | Visitor                 |
| Large-scale shared immutable intrinsic state         | Flyweight               |
| Small DSL or rule expression tree                    | Interpreter             |

### 4. Recommend With Trade-Offs

Every recommendation must include:

- The pattern name.
- Why it fits the current pressure.
- Why simpler alternatives may or may not be enough.
- What new abstraction boundary it creates.
- How to test it.
- When to avoid or remove it.

Never answer with only "use Strategy" or "use Factory". Explain the design reason.

## Pattern Selection Guide

Use this guide for concrete recommendations.

### Strategy

Use when multiple algorithms or policies share the same input/output contract.

Good examples:

- Pricing rules by customer tier.
- Shipping calculators by method.
- Validation policy by product type.
- Ranking or matching algorithms selected by configuration.

Avoid when:

- There is only one algorithm.
- A callback or plain function parameter is clearer.
- Strategies need incompatible inputs and the shared interface becomes fake.

Testing advice:

- Test each strategy independently.
- Test the context with a fake strategy.
- Test strategy selection separately from execution.

### Factory Method

Use when a workflow needs to create objects without depending on concrete classes.

Good examples:

- Creating notification senders by channel.
- Creating parsers by file type.
- Creating payment processors by provider.

Avoid when:

- Direct construction is simple and stable.
- You need to create multiple related products together; consider Abstract Factory.

Testing advice:

- Test the creator returns the expected product contract.
- Test workflow behavior through the product interface.

### Abstract Factory

Use when families of related objects must be created consistently.

Good examples:

- Light/dark UI component families.
- Cloud provider client families.
- Platform-specific widgets.

Avoid when:

- Only one product varies.
- The family concept is weak or artificial.

Testing advice:

- Run shared contract tests for every factory family.
- Test that products from one factory collaborate correctly.

### Builder

Use when constructing an object requires many options, defaults, ordered steps, or validation.

Good examples:

- Deployment configuration.
- Query builders.
- Test data builders.
- HTTP request construction.

Avoid when:

- A constructor or object literal is already clear.
- The builder becomes a second mutable model with weak validation.

Testing advice:

- Test required fields, defaults, invalid combinations, and successful build output.

### Prototype

Use when new objects should be cloned from configured baselines.

Good examples:

- Email templates.
- Game object archetypes.
- Default configuration profiles.

Avoid when:

- Copy semantics are unclear.
- IDs, connections, timestamps, or external resources might be copied incorrectly.

Testing advice:

- Verify clones do not mutate the prototype.
- Verify mutable nested fields are copied safely.

### Singleton

Use only when one process-wide instance is a real invariant.

Good examples:

- Process configuration.
- Logger adapter.
- Shared connection pool manager.

Avoid when:

- It is being used as a global variable.
- The object stores request-specific or user-specific state.
- Tests become polluted by shared mutable state.

Testing advice:

- Prefer injecting the singleton behind an interface.
- Provide explicit reset only when safe.

### Adapter

Use when application code must depend on its own interface while integrating an incompatible external or legacy interface.

Good examples:

- Payment provider SDKs.
- Email vendors.
- Legacy APIs.
- Browser/platform differences.

Avoid when:

- You own both interfaces and can refactor directly.
- The adapter only renames methods without reducing coupling.

Testing advice:

- Test data translation and error mapping.
- Keep vendor-specific types out of client tests.

### Bridge

Use when two independent dimensions of variation would otherwise create many subclasses.

Good examples:

- Notification type vs delivery channel.
- Report workflow vs export format.
- UI control vs rendering platform.

Avoid when:

- There is only one variation axis.
- Strategy or simple composition is enough.

Testing advice:

- Test abstraction behavior with fake implementations.
- Test each implementation against its contract.

### Composite

Use when leaves and groups should be treated uniformly in a tree structure.

Good examples:

- File/folder trees.
- Menus.
- UI component trees.
- Product bundles.

Avoid when:

- Leaves and groups have very different operations.
- Recursion hides important performance or cycle risks.

Testing advice:

- Test leaves, empty composites, nested composites, and deep trees.

### Decorator

Use when optional behavior should wrap an object while preserving the same interface.

Good examples:

- Logging.
- Caching.
- Retry.
- Authorization checks.
- Response formatting.

Avoid when:

- Behavior changes the public contract.
- Decorator order is hard to reason about.

Testing advice:

- Test each decorator with a fake wrapped object.
- Test common decorator combinations and ordering-sensitive behavior.

### Facade

Use when callers need a simple task-focused API over a complex subsystem.

Good examples:

- Checkout orchestration.
- Deployment orchestration.
- Media processing pipelines.
- SDK convenience clients.

Avoid when:

- The facade becomes a dumping ground for unrelated operations.
- Callers need fine-grained subsystem control.

Testing advice:

- Test orchestration order and failure handling with fake subsystems.

### Flyweight

Use when many objects share immutable intrinsic state and memory usage matters.

Good examples:

- Map markers with shared style.
- Text glyphs.
- Game particles or tiles.

Avoid when:

- Object count is small.
- Shared state is mutable.
- Memory savings are not measured or meaningful.

Testing advice:

- Test shared intrinsic state and independent extrinsic state.

### Proxy

Use when access to an object needs control while preserving the same interface.

Good examples:

- Lazy loading.
- Access control.
- Caching.
- Remote service calls.
- Rate limiting.

Avoid when:

- The interface must change; use Adapter.
- Optional behavior should stack; consider Decorator.

Testing advice:

- Test proxy and real subject against shared contract expectations.
- Test cache hit/miss, denied access, and delegation behavior.

### Chain of Responsibility

Use when a request passes through ordered handlers and any handler may stop the flow.

Good examples:

- HTTP middleware.
- Validation chains.
- Approval flows.
- Security checks.

Avoid when:

- Every step must always run.
- Order does not matter.
- A simple pipeline is clearer.

Testing advice:

- Test each handler independently.
- Test ordering and early-stop behavior.

### Command

Use when an action should be represented as an object.

Good examples:

- Job queues.
- Undo/redo.
- CLI commands.
- Audited application use cases.

Avoid when:

- The action is a simple direct call.
- Command objects only duplicate method names without lifecycle value.

Testing advice:

- Test command execution, validation, idempotency, and retry behavior.

### Interpreter

Use for small domain-specific languages or expression trees.

Good examples:

- Feature flag targeting rules.
- Search filters.
- Discount eligibility expressions.
- Form validation rules.

Avoid when:

- The grammar is large.
- A parser generator or existing rule engine would be safer.

Testing advice:

- Test individual expressions, composed expressions, and invalid grammar input.

### Iterator

Use when traversal should not expose internal representation.

Good examples:

- Paginated APIs.
- Database cursors.
- Tree traversal.
- Lazy data processing.

Avoid when:

- A normal array loop is clearer.
- Consumers need random access rather than sequential traversal.

Testing advice:

- Test empty, single-item, multi-page, and exhausted iterator behavior.

### Mediator

Use when many components coordinate through complex interaction rules.

Good examples:

- Dialog/form coordination.
- Chat room routing.
- Workflow coordinators.
- Application command/event routing.

Avoid when:

- Only two objects communicate directly and clearly.
- The mediator becomes a god object or service locator.

Testing advice:

- Test components with a fake mediator.
- Test mediator routing rules independently.

### Memento

Use when state snapshots are needed without exposing object internals.

Good examples:

- Undo/redo.
- Draft recovery.
- Workflow checkpoints.
- Configuration rollback.

Avoid when:

- State is huge.
- Snapshot retention creates memory or security risk.
- Event sourcing is needed for audit and replay.

Testing advice:

- Test snapshot immutability, restore behavior, and history limits.

### Observer

Use when many subscribers react independently to one event or state change.

Good examples:

- UI state subscriptions.
- Domain events.
- Cache invalidation.
- Notification hooks.

Avoid when:

- Reaction order is business-critical.
- Observer failure must roll back the publisher.

Testing advice:

- Test subscribe, notify, unsubscribe, and observer failure strategy.

### State

Use when behavior depends on lifecycle state and transitions matter.

Good examples:

- Orders.
- Payments.
- Subscriptions.
- Tickets.
- Connection states.

Avoid when:

- State is just a data flag.
- A small conditional is clearer.

Testing advice:

- Test behavior in every state.
- Test allowed and forbidden transitions.

### Template Method

Use when workflow order is fixed but selected steps vary.

Good examples:

- Import/export pipelines.
- Framework lifecycle hooks.
- Report generation.
- Test setup flows.

Avoid when:

- Composition is clearer.
- Subclasses need to change the workflow order freely.

Testing advice:

- Test workflow order using a test subclass.
- Test hook failure behavior.

### Visitor

Use when object structures are stable but operations over them change often.

Good examples:

- AST compilers and linters.
- Document export.
- Tree validation.
- Reporting over object graphs.

Avoid when:

- Element types change frequently.
- A discriminated union or pattern matching is clearer.

Testing advice:

- Test each visitor against representative object structures.
- Test every element dispatches to the correct visitor method.

## Recommendation Output Format

When advising a user, respond with this structure:

```markdown
## Recommendation

Use <Pattern> because <specific pressure>.

## Why It Fits

- <reason tied to current code/project>
- <reason tied to future change/testability>

## Simpler Alternative

Before using the pattern, consider <function/module/config/DI/etc>. It is enough if <condition>.

## When Not To Use It

- <over-engineering signal>
- <wrong-direction signal>

## Implementation Sketch

- Define <interface/contract>.
- Move <variation/responsibility> into <concrete implementation>.
- Keep <caller/context> dependent only on <abstraction>.
- Add tests for <important paths>.

## Testing Plan

- <unit tests>
- <integration/contract tests>
- <negative/edge cases>
```

## Refactoring Guidance

When applying a pattern to existing code:

1. Identify the stable caller and unstable variation.
2. Extract the smallest interface that the caller actually needs.
3. Move one real variation behind the interface.
4. Add tests before adding more variants.
5. Stop as soon as the next change becomes easy.

Do not introduce all possible abstractions at once.

## Anti-Overengineering Checklist

Before finalizing a recommendation, check:

- Are there at least two real variants, states, products, handlers, or operations?
- Can the user explain the runtime flow after the pattern is applied?
- Does the pattern reduce edits to stable code?
- Does it create a better test seam?
- Is the abstraction named after the domain, not only the pattern?
- Would a simpler TypeScript feature solve the problem more clearly?

If the answer is mostly "no", recommend the simpler design.

## Tone For Agent Responses

Be practical, direct, and skeptical of unnecessary abstraction.

Do not shame the user for considering a pattern. Instead, explain the trade-off:

- "This is a good fit if the variation is real."
- "If you only have one implementation today, start with a function and refactor later."
- "The pattern becomes useful once adding another provider/rule/state would otherwise modify stable workflow code."

Design patterns should make code easier to change, not harder to read.
