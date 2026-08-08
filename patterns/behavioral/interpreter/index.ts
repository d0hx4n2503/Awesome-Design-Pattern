import { pathToFileURL } from "node:url";
export type RuleContext = Readonly<Record<string, boolean>>;
export interface Expression {
  interpret(context: RuleContext): boolean;
}
export class VariableExpression implements Expression {
  constructor(private readonly name: string) {}
  interpret(context: RuleContext): boolean {
    return Boolean(context[this.name]);
  }
}
export class AndExpression implements Expression {
  constructor(
    private readonly left: Expression,
    private readonly right: Expression,
  ) {}
  interpret(context: RuleContext): boolean {
    return this.left.interpret(context) && this.right.interpret(context);
  }
}
export class OrExpression implements Expression {
  constructor(
    private readonly left: Expression,
    private readonly right: Expression,
  ) {}
  interpret(context: RuleContext): boolean {
    return this.left.interpret(context) || this.right.interpret(context);
  }
}
export function runInterpreterExample(): void {
  const rule = new AndExpression(
    new VariableExpression("isAdmin"),
    new OrExpression(
      new VariableExpression("beta"),
      new VariableExpression("internal"),
    ),
  );
  console.log(rule.interpret({ isAdmin: true, beta: false, internal: true }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runInterpreterExample();
