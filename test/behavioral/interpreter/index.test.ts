import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  AndExpression,
  OrExpression,
  VariableExpression,
} from "../../../patterns/behavioral/interpreter/index.js";

describe("Interpreter pattern", () => {
  it("evaluates composed boolean expressions", () => {
    const rule = new AndExpression(
      new VariableExpression("loggedIn"),
      new OrExpression(
        new VariableExpression("admin"),
        new VariableExpression("owner"),
      ),
    );
    assert.equal(
      rule.interpret({ loggedIn: true, admin: false, owner: true }),
      true,
    );
    assert.equal(
      rule.interpret({ loggedIn: true, admin: false, owner: false }),
      false,
    );
  });
});
