import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { PaginatedResults } from "../../../patterns/behavioral/iterator/index.js";

describe("Iterator pattern", () => {
  it("traverses paginated data without exposing page storage", () => {
    const results = new PaginatedResults([["a", "b"], ["c"], [], ["d", "e"]]);

    assert.deepEqual([...results], ["a", "b", "c", "d", "e"]);
  });

  it("can provide collection helpers on top of the iterator", () => {
    const results = new PaginatedResults([[1, 2], [3]]);

    assert.deepEqual(results.toArray(), [1, 2, 3]);
  });
});
