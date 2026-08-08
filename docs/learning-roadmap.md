# Learning Roadmap

This roadmap teaches the 23 GoF design patterns in a practical order: start with patterns engineers meet often, then move into architectural patterns, and finish with specialized patterns.

## Phase 1 - Immediately Useful

Goal: recognize and apply common patterns in real projects without over-engineering.

1. Strategy
2. Factory Method
3. Adapter
4. Observer
5. Decorator
6. Facade
7. Builder
8. Command
9. Iterator

Focus question: where would the code become rigid, repetitive, or conditional-heavy without this pattern?

## Phase 2 - Framework and Architecture Fluency

Goal: read framework and library code more effectively, and understand why many APIs are designed around extension points.

1. Singleton
2. Template Method
3. Proxy
4. Composite
5. State
6. Chain of Responsibility
7. Abstract Factory
8. Prototype

Focus question: does the pattern make the system easier to extend, or does it add unnecessary indirection?

## Phase 3 - Specialized Design Tools

Goal: round out design vocabulary for compilers, editors, workflow engines, UI trees, and memory-sensitive systems.

1. Mediator
2. Bridge
3. Visitor
4. Memento
5. Flyweight
6. Interpreter

These patterns are best learned through concrete scenarios rather than abstract class diagrams.

## How To Study One Pattern

1. Read the problem before reading the solution.
2. Sketch how the code would look without the pattern.
3. Compare that sketch with the pattern implementation.
4. Identify when the pattern helps and when it is overkill.
5. Run the tests and inspect the public API.
