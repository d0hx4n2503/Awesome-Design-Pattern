import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  DarkThemeFactory,
  LightThemeFactory,
  renderSettingsPanel,
} from "../../../patterns/creational/abstract-factory/index.js";

describe("Abstract Factory pattern", () => {
  it("creates a consistent light family", () =>
    assert.equal(
      renderSettingsPanel(new LightThemeFactory()),
      "light button + light checkbox",
    ));
  it("creates a consistent dark family", () =>
    assert.equal(
      renderSettingsPanel(new DarkThemeFactory()),
      "dark button + dark checkbox",
    ));
});
