import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { CsvImportJob } from "../../../patterns/behavioral/template-method/index.js";

describe("Template Method pattern", () => {
  it("keeps workflow order in the base class", () => {
    assert.deepEqual(new CsvImportJob("a, b,c").run(), [
      "saved:a",
      "saved:b",
      "saved:c",
    ]);
  });

  it("validates records consistently", () => {
    assert.throws(() => new CsvImportJob(" , ").run(), /at least one record/);
  });
});
