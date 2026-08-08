import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  SalesReportGenerator,
  SignatureReportDecorator,
  TimestampReportDecorator,
} from "../../../patterns/structural/decorator/index.js";

describe("Decorator pattern", () => {
  it("adds behavior while preserving the report interface", () => {
    const report = new SignatureReportDecorator(
      new TimestampReportDecorator(
        new SalesReportGenerator(),
        new Date("2026-01-01T00:00:00.000Z"),
      ),
      "Finance",
    );

    assert.equal(
      report.generate(),
      "Sales Report: revenue=$120000 | generatedAt=2026-01-01T00:00:00.000Z | signedBy=Finance",
    );
  });

  it("supports using decorators independently", () => {
    const report = new SignatureReportDecorator(
      new SalesReportGenerator(),
      "CEO",
    );

    assert.equal(
      report.generate(),
      "Sales Report: revenue=$120000 | signedBy=CEO",
    );
  });
});
