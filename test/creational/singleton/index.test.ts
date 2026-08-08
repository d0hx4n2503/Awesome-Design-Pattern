import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { AppConfig } from "../../../patterns/creational/singleton/index.js";

describe("Singleton pattern", () => {
  it("returns the same shared instance", () => {
    AppConfig.resetForTest();

    const first = AppConfig.getInstance();
    const second = AppConfig.getInstance();

    first.set("region", "us-east-1");

    assert.equal(first, second);
    assert.equal(second.get("region"), "us-east-1");
  });
});
