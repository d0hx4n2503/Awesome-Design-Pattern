import { pathToFileURL } from "node:url";
export interface FileSystemVisitor {
  visitFile(node: FileNode): void;
  visitFolder(node: FolderNode): void;
}
export interface FileSystemNode {
  accept(visitor: FileSystemVisitor): void;
}
export class FileNode implements FileSystemNode {
  constructor(
    readonly name: string,
    readonly size: number,
  ) {}
  accept(visitor: FileSystemVisitor): void {
    visitor.visitFile(this);
  }
}
export class FolderNode implements FileSystemNode {
  constructor(
    readonly name: string,
    readonly children: FileSystemNode[],
  ) {}
  accept(visitor: FileSystemVisitor): void {
    visitor.visitFolder(this);
  }
}
export class SizeVisitor implements FileSystemVisitor {
  totalSize = 0;
  visitFile(node: FileNode): void {
    this.totalSize += node.size;
  }
  visitFolder(node: FolderNode): void {
    for (const child of node.children) child.accept(this);
  }
}
export class NameListVisitor implements FileSystemVisitor {
  readonly names: string[] = [];
  visitFile(node: FileNode): void {
    this.names.push(node.name);
  }
  visitFolder(node: FolderNode): void {
    this.names.push(node.name);
    for (const child of node.children) child.accept(this);
  }
}
export function runVisitorExample(): void {
  const tree = new FolderNode("root", [
    new FileNode("a", 10),
    new FileNode("b", 40),
  ]);
  const visitor = new SizeVisitor();
  tree.accept(visitor);
  console.log(`size=${visitor.totalSize}`);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runVisitorExample();
