import { pathToFileURL } from "node:url";

export class AppConfig {
  private static instance: AppConfig | undefined;
  private readonly values = new Map<string, string>();

  private constructor() {}

  static getInstance(): AppConfig {
    AppConfig.instance ??= new AppConfig();
    return AppConfig.instance;
  }

  static resetForTest(): void {
    AppConfig.instance = undefined;
  }

  set(key: string, value: string): void {
    this.values.set(key, value);
  }

  get(key: string): string | undefined {
    return this.values.get(key);
  }
}

export function runSingletonExample(): void {
  const config = AppConfig.getInstance();
  config.set("environment", "production");

  console.log(AppConfig.getInstance().get("environment"));
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runSingletonExample();
}
