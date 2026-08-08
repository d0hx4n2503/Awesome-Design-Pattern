import { pathToFileURL } from "node:url";

export abstract class DataImportJob {
  run(): string[] {
    const records = this.parse(this.extract());
    this.validate(records);
    return records.map((record) => `saved:${record}`);
  }

  protected abstract extract(): string;
  protected abstract parse(raw: string): string[];

  protected validate(records: string[]): void {
    if (records.length === 0) {
      throw new Error("import requires at least one record");
    }
  }
}

export class CsvImportJob extends DataImportJob {
  constructor(private readonly rawCsv: string) {
    super();
  }

  protected extract(): string {
    return this.rawCsv;
  }

  protected parse(raw: string): string[] {
    return raw
      .split(",")
      .map((value) => value.trim())
      .filter(Boolean);
  }
}

export function runTemplateMethodExample(): void {
  console.log(new CsvImportJob("users,orders,payments").run().join(" | "));
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runTemplateMethodExample();
}
