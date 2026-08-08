import { pathToFileURL } from "node:url";

export class PaginatedResults<T> implements Iterable<T> {
  constructor(private readonly pages: ReadonlyArray<ReadonlyArray<T>>) {}

  *[Symbol.iterator](): Iterator<T> {
    for (const page of this.pages) {
      for (const item of page) {
        yield item;
      }
    }
  }

  toArray(): T[] {
    return [...this];
  }
}

export function runIteratorExample(): void {
  const results = new PaginatedResults([
    ["design-patterns", "typescript"],
    ["clean-code", "testing"],
  ]);

  console.log(results.toArray().join(" -> "));
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runIteratorExample();
}
