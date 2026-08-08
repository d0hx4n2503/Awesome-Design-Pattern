import { pathToFileURL } from "node:url";

export type DeploymentConfig = Readonly<{
  serviceName: string;
  environment: "development" | "staging" | "production";
  replicas: number;
  enableMetrics: boolean;
  environmentVariables: Readonly<Record<string, string>>;
}>;

export class DeploymentConfigBuilder {
  private serviceName?: string;
  private environment: DeploymentConfig["environment"] = "development";
  private replicas = 1;
  private enableMetrics = false;
  private readonly environmentVariables: Record<string, string> = {};

  withServiceName(serviceName: string): this {
    this.serviceName = serviceName.trim();
    return this;
  }

  forEnvironment(environment: DeploymentConfig["environment"]): this {
    this.environment = environment;
    return this;
  }

  withReplicas(replicas: number): this {
    if (!Number.isInteger(replicas) || replicas < 1) {
      throw new Error("replicas must be a positive integer");
    }

    this.replicas = replicas;
    return this;
  }

  withMetrics(enabled = true): this {
    this.enableMetrics = enabled;
    return this;
  }

  withEnvironmentVariable(key: string, value: string): this {
    this.environmentVariables[key] = value;
    return this;
  }

  build(): DeploymentConfig {
    if (!this.serviceName) {
      throw new Error("serviceName is required");
    }

    return Object.freeze({
      serviceName: this.serviceName,
      environment: this.environment,
      replicas: this.replicas,
      enableMetrics: this.enableMetrics,
      environmentVariables: Object.freeze({ ...this.environmentVariables }),
    });
  }
}

export function runBuilderExample(): void {
  const config = new DeploymentConfigBuilder()
    .withServiceName("checkout-api")
    .forEnvironment("production")
    .withReplicas(3)
    .withMetrics()
    .withEnvironmentVariable("LOG_LEVEL", "info")
    .build();

  console.log(
    `${config.serviceName} -> ${config.environment} (${config.replicas} replicas)`,
  );
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runBuilderExample();
}
