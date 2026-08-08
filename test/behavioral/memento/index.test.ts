import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { TextEditor } from "../../../patterns/behavioral/memento/index.js";

describe("Memento pattern", () => {
  it("restores state from a snapshot", () => {
    const editor = new TextEditor();
    editor.write("hello");
    const snapshot = editor.save();
    editor.write(" world");
    editor.restore(snapshot);
    assert.equal(editor.read(), "hello");
  });
});
