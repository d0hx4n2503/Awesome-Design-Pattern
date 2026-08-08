import { pathToFileURL } from "node:url";

export interface ReportGenerator {
  generate(): string;
}

export class SalesReportGenerator implements ReportGenerator {
  generate(): string {
    return "Sales Report: revenue=$120000";
  }
}

export class TimestampReportDecorator implements ReportGenerator {
  constructor(
    private readonly reportGenerator: ReportGenerator,
    private readonly generatedAt: Date,
  ) {}

  generate(): string {
    return `${this.reportGenerator.generate()} | generatedAt=${this.generatedAt.toISOString()}`;
  }
}

export class SignatureReportDecorator implements ReportGenerator {
  constructor(
    private readonly reportGenerator: ReportGenerator,
    private readonly signer: string,
  ) {}

  generate(): string {
    return `${this.reportGenerator.generate()} | signedBy=${this.signer}`;
  }
}

export function runDecoratorExample(): void {
  const report = new SignatureReportDecorator(
    new TimestampReportDecorator(
      new SalesReportGenerator(),
      new Date("2026-01-01T00:00:00.000Z"),
    ),
    "Finance",
  );

  console.log(report.generate());
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runDecoratorExample();
}
