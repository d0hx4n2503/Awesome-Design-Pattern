import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  FileNode,
  FolderNode,
  SizeVisitor,
} from "../../../patterns/behavioral/visitor/index.js";

describe("Visitor pattern", () => {
  it("adds a size operation to a stable object structure", () => {
    const tree = new FolderNode("root", [
      new FileNode("a", 5),
      new FolderNode("nested", [new FileNode("b", 7)]),
    ]);
    const visitor = new SizeVisitor();
    tree.accept(visitor);
    assert.equal(visitor.totalSize, 12);
  });
});
