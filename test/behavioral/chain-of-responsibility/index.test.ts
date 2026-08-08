import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { buildTicketValidationChain } from "../../../patterns/behavioral/chain-of-responsibility/index.js";

describe("Chain of Responsibility pattern", () => {
  it("passes a valid request through the chain", () => {
    assert.deepEqual(
      buildTicketValidationChain().handle({
        userId: "u1",
        title: "urgent payment outage",
        priority: "high",
      }),
      { accepted: true },
    );
  });
  it("stops at the first failing handler", () => {
    assert.deepEqual(
      buildTicketValidationChain().handle({
        title: "urgent payment outage",
        priority: "high",
      }),
      { accepted: false, reason: "user must be authenticated" },
    );
  });
});
