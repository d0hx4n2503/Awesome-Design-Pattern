import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CriticalAlert,
  EmailChannel,
  SlackChannel,
} from "../../../patterns/structural/bridge/index.js";

describe("Bridge pattern", () => {
  it("combines one abstraction with different implementations", () => {
    assert.equal(
      new CriticalAlert(new EmailChannel()).send("down"),
      "email:[critical] down",
    );
    assert.equal(
      new CriticalAlert(new SlackChannel()).send("down"),
      "slack:[critical] down",
    );
  });
});
