const fs = require("node:fs");
const path = require("node:path");

const root = path.join(process.cwd(), "patterns");
const categoryContext = {
  creational: {
    lens: "Creational patterns are about controlling object creation so callers do not depend on concrete construction details.",
    questions: [
      "Who owns object creation?",
      "Which concrete type should callers be allowed to know?",
      "Can invalid combinations be prevented at construction time?",
    ],
    contexts: [
      "framework integration points",
      "configuration-driven runtime behavior",
      "test fixture creation",
      "infrastructure objects whose setup should be centralized",
    ],
  },
  structural: {
    lens: "Structural patterns are about shaping relationships between objects so systems can evolve without rewriting every caller.",
    questions: [
      "Which interface should client code depend on?",
      "Where should translation, composition, or access control live?",
      "Does this abstraction reduce coupling or just rename it?",
    ],
    contexts: [
      "third-party API boundaries",
      "legacy migration layers",
      "UI component composition",
      "cross-cutting wrappers such as caching, logging, or access checks",
    ],
  },
  behavioral: {
    lens: "Behavioral patterns are about distributing responsibilities between objects so workflows stay understandable as rules grow.",
    questions: [
      "Which object owns the decision?",
      "Can a rule change without editing stable workflow code?",
      "Is runtime behavior explicit enough to debug?",
    ],
    contexts: [
      "business rules that vary by tenant or product",
      "workflow orchestration",
      "event-driven UI or domain flows",
      "validation, authorization, pricing, routing, or lifecycle logic",
    ],
  },
};

const patternHints = {
  "abstract-factory": [
    "Use it when products must be created as compatible families.",
    "Watch for factory interfaces growing too large as the product family expands.",
  ],
  builder: [
    "Use it when construction has many options or invalid combinations.",
    "Make the final build step validate required fields and defaults.",
  ],
  "factory-method": [
    "Use it when a workflow should create products without knowing concrete classes.",
    "Avoid turning every constructor into a factory method by habit.",
  ],
  prototype: [
    "Use it when a configured baseline object should be copied with focused overrides.",
    "Be explicit about deep copy vs shallow copy semantics.",
  ],
  singleton: [
    "Use it only when one process-wide instance is a real invariant.",
    "Prefer dependency injection when global access would hide dependencies.",
  ],
  adapter: [
    "Use it to protect application code from third-party or legacy interfaces.",
    "Translate external errors and data shapes at the boundary.",
  ],
  bridge: [
    "Use it when two independent variation axes would otherwise create class explosion.",
    "Keep abstraction and implementation interfaces from leaking into each other.",
  ],
  composite: [
    "Use it for tree structures where leaf and group should be treated uniformly.",
    "Guard against meaningless operations on leaves and accidental cycles.",
  ],
  decorator: [
    "Use it to stack optional behavior while preserving the same interface.",
    "Make decorator ordering explicit because behavior can be order-sensitive.",
  ],
  facade: [
    "Use it to expose one task-focused operation over a complex subsystem.",
    "Avoid letting the facade become a dumping ground for unrelated workflows.",
  ],
  flyweight: [
    "Use it only when many objects share measurable immutable state.",
    "Keep intrinsic shared state immutable and extrinsic state outside the flyweight.",
  ],
  proxy: [
    "Use it when access to a subject needs control, caching, lazy loading, or security.",
    "Preserve the subject contract so clients can swap real subject and proxy safely.",
  ],
  "chain-of-responsibility": [
    "Use it when a request should pass through ordered handlers that may stop early.",
    "Make stop/continue behavior visible in the return type.",
  ],
  command: [
    "Use it when actions need queuing, retrying, auditing, undo, or delayed execution.",
    "Keep command names aligned with business actions rather than technical methods.",
  ],
  interpreter: [
    "Use it for small domain-specific rule languages or expression trees.",
    "Do not grow it into a full programming language accidentally.",
  ],
  iterator: [
    "Use it to hide traversal details such as pagination, cursors, or tree walking.",
    "Document whether iteration is lazy, eager, reusable, or one-shot.",
  ],
  mediator: [
    "Use it when many components coordinate through a shared collaboration policy.",
    "Split large mediators before they become god objects.",
  ],
  memento: [
    "Use it for undo, rollback, checkpoints, and draft recovery.",
    "Limit snapshot size and retention to avoid memory issues.",
  ],
  observer: [
    "Use it when many subscribers react independently to one subject event.",
    "Always provide unsubscribe behavior to prevent leaks.",
  ],
  state: [
    "Use it when behavior depends on lifecycle state and transitions matter.",
    "Keep allowed and forbidden transitions explicit.",
  ],
  strategy: [
    "Use it when interchangeable algorithms share the same input/output contract.",
    "Select strategies outside the context so workflow code stays stable.",
  ],
  "template-method": [
    "Use it when workflow order is fixed but selected steps vary.",
    "Prefer composition if the number of hooks keeps growing.",
  ],
  visitor: [
    "Use it when object structures are stable but operations change often.",
    "Avoid it when element types change frequently.",
  ],
};

function list(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function section(title, body) {
  return `## ${title}\n\n${body.trim()}\n`;
}

function hasSection(readme, title) {
  return new RegExp(
    `^##\\s+${title.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\s*$`,
    "m",
  ).test(readme);
}

for (const group of fs.readdirSync(root)) {
  const groupDir = path.join(root, group);
  if (!fs.statSync(groupDir).isDirectory()) continue;
  for (const slug of fs.readdirSync(groupDir)) {
    const file = path.join(groupDir, slug, "README.md");
    if (!fs.existsSync(file)) continue;
    let readme = fs.readFileSync(file, "utf8").trim();
    const title = readme.match(/^#\s+(.+)$/m)?.[1] ?? slug;
    const context = categoryContext[group];
    const hints = patternHints[slug] ?? [];
    const add = [];

    if (!hasSection(readme, "Practical Perspective")) {
      add.push(
        section(
          "Practical Perspective",
          `${context.lens}\n\nFor ${title}, the important question is not “can I draw the UML diagram?” but “what dependency or decision becomes easier to change after I introduce this pattern?” In production code, the pattern should make ownership clearer, reduce accidental coupling, and give tests a natural seam.`,
        ),
      );
    }
    if (!hasSection(readme, "Real-World Use Cases")) {
      add.push(
        section(
          "Real-World Use Cases",
          list(
            context.contexts.map(
              (item) =>
                `${item.charAt(0).toUpperCase()}${item.slice(1)} where ${title.replace(/ Pattern$/, "")} keeps responsibilities separated.`,
            ),
          ),
        ),
      );
    }
    if (!hasSection(readme, "Decision Questions")) {
      add.push(
        section(
          "Decision Questions",
          list([...context.questions, ...hints.slice(0, 2)]),
        ),
      );
    }
    if (!hasSection(readme, "Design Checklist")) {
      add.push(
        section(
          "Design Checklist",
          list([
            "Start with the client code: define the interface you want callers to depend on.",
            "Keep concrete classes small and named after one responsibility.",
            "Make creation, selection, delegation, or notification rules explicit instead of hidden in conditionals.",
            "Prefer composition roots for wiring objects together.",
            "Document the reason for using the pattern so future contributors do not cargo-cult it.",
          ]),
        ),
      );
    }
    if (!hasSection(readme, "Common Mistakes")) {
      add.push(
        section(
          "Common Mistakes",
          list([
            "Adding the pattern before the code has a real variation point.",
            "Creating abstractions that only rename concrete classes.",
            "Hiding important runtime behavior so debugging becomes harder.",
            "Letting examples stay toy-sized without showing where the pattern boundary sits in real code.",
            "Forgetting tests for negative paths, invalid states, or fallback behavior.",
          ]),
        ),
      );
    }
    if (!hasSection(readme, "Testing Guidance")) {
      add.push(
        section(
          "Testing Guidance",
          list([
            "Test through the public abstraction, not private implementation details.",
            "Use fakes or test doubles for collaborators so the pattern seam is verified.",
            "Add one integration-style test proving the objects are wired correctly.",
            "Cover edge cases that motivated the pattern: missing strategy, rejected state transition, failed handler, invalid factory family, stale proxy cache, or similar.",
            "Keep tests named after behavior and business outcome rather than pattern terminology.",
          ]),
        ),
      );
    }
    if (!hasSection(readme, "Refactoring Signals")) {
      add.push(
        section(
          "Refactoring Signals",
          list([
            "The pattern is useful when adding a new variation no longer requires editing stable caller code.",
            "It is probably overdesigned when every new class has only one trivial method and no independent reason to exist.",
            "If contributors cannot explain the runtime flow quickly, simplify the wiring or improve names.",
            "If tests must mock too many layers, the abstraction boundary is likely in the wrong place.",
          ]),
        ),
      );
    }

    if (add.length > 0) {
      readme = `${readme}\n\n${add.join("\n")}`.trim() + "\n";
      fs.writeFileSync(file, readme, "utf8");
    }
  }
}
