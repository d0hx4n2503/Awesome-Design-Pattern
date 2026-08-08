import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CriticalAlert,
  EmailChannel,
  InfoAlert,
  SlackChannel,
} from "../../../patterns/structural/bridge/index.js";

describe("Bridge pattern", () => {
  it("varies alert abstractions independently from delivery channels", () => {
    assert.equal(
      new CriticalAlert(new EmailChannel()).send("down"),
      "email:[critical] down",
    );
    assert.equal(
      new CriticalAlert(new SlackChannel()).send("down"),
      "slack:[critical] down",
    );
    assert.equal(
      new InfoAlert(new SlackChannel()).send("deploy complete"),
      "slack:[info] deploy complete",
    );
  });
});
