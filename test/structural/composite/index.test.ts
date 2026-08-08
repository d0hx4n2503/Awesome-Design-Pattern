import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  MenuGroup,
  MenuItem,
} from "../../../patterns/structural/composite/index.js";

describe("Composite pattern", () => {
  it("renders leaves and groups through the same interface", () => {
    const menu = new MenuGroup("Root")
      .add(new MenuItem("Home"))
      .add(new MenuGroup("Admin").add(new MenuItem("Users")));
    assert.equal(menu.render(), "+ Root\n  - Home\n  + Admin\n    - Users");
  });
});
