import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  CachedDocumentProxy,
  type DocumentReader,
} from "../../../patterns/structural/proxy/index.js";

describe("Proxy pattern", () => {
  it("caches reads while preserving the subject interface", () => {
    let calls = 0;
    const reader: DocumentReader = {
      read: (id) => {
        calls += 1;
        return `doc:${id}`;
      },
    };
    const proxy = new CachedDocumentProxy(reader, new Set(["a"]));
    assert.equal(proxy.read("a"), "doc:a");
    assert.equal(proxy.read("a"), "doc:a");
    assert.equal(calls, 1);
  });
  it("controls access before delegating", () => {
    assert.throws(
      () =>
        new CachedDocumentProxy(
          { read: () => "secret" },
          new Set(["public"]),
        ).read("secret"),
      /access denied/,
    );
  });
});
