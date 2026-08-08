import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { CampaignPrototype } from "../../../patterns/creational/prototype/index.js";

describe("Prototype pattern", () => {
  it("clones with overrides", () => {
    const p = new CampaignPrototype({
      name: "Base",
      audience: "engineers",
      channels: ["email"],
      budgetUsd: 1000,
    });
    assert.deepEqual(p.clone({ name: "Variant" }), {
      name: "Variant",
      audience: "engineers",
      channels: ["email"],
      budgetUsd: 1000,
    });
  });
  it("copies mutable arrays", () => {
    const p = new CampaignPrototype({
      name: "Base",
      audience: "a",
      channels: ["email"],
      budgetUsd: 1,
    });
    const c = p.clone();
    c.channels.push("social");
    assert.deepEqual(p.clone().channels, ["email"]);
  });
});
