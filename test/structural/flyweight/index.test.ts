import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  MapMarker,
  MarkerIconFactory,
} from "../../../patterns/structural/flyweight/index.js";

describe("Flyweight pattern", () => {
  it("shares intrinsic state across many markers", () => {
    const factory = new MarkerIconFactory();
    const first = new MapMarker(1, 2, factory.getIcon("cafe"));
    const second = new MapMarker(3, 4, factory.getIcon("cafe"));
    assert.equal(first.icon, second.icon);
    assert.equal(factory.count(), 1);
  });
});
