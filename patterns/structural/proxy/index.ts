import { pathToFileURL } from "node:url";

export interface DocumentReader {
  read(documentId: string): string;
}
export class RemoteDocumentReader implements DocumentReader {
  read(documentId: string): string {
    return `document:${documentId}`;
  }
}
export class CachedDocumentProxy implements DocumentReader {
  private readonly cache = new Map<string, string>();
  constructor(
    private readonly reader: DocumentReader,
    private readonly allowedIds: ReadonlySet<string>,
  ) {}
  read(documentId: string): string {
    if (!this.allowedIds.has(documentId))
      throw new Error("document access denied");
    if (!this.cache.has(documentId))
      this.cache.set(documentId, this.reader.read(documentId));
    return this.cache.get(documentId)!;
  }
}
export function runProxyExample(): void {
  console.log(
    new CachedDocumentProxy(
      new RemoteDocumentReader(),
      new Set(["policy"]),
    ).read("policy"),
  );
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runProxyExample();
