import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { Order } from "../../../patterns/behavioral/state/index.js";

describe("State pattern", () => {
  it("changes behavior through explicit states", () => {
    const order = new Order();
    assert.equal(order.getStateName(), "draft");
    order.pay();
    assert.equal(order.getStateName(), "paid");
    order.ship();
    assert.equal(order.getStateName(), "shipped");
  });
  it("rejects actions invalid for the current state", () => {
    assert.throws(() => new Order().ship(), /draft order/);
  });
});
