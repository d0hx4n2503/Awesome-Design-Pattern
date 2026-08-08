import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { DeploymentConfigBuilder } from "../../../patterns/creational/builder/index.js";

describe("Builder pattern", () => {
  it("builds a readable deployment configuration", () => {
    const config = new DeploymentConfigBuilder()
      .withServiceName("billing-api")
      .forEnvironment("production")
      .withReplicas(4)
      .withMetrics()
      .withEnvironmentVariable("LOG_LEVEL", "debug")
      .build();

    assert.deepEqual(config, {
      serviceName: "billing-api",
      environment: "production",
      replicas: 4,
      enableMetrics: true,
      environmentVariables: {
        LOG_LEVEL: "debug",
      },
    });
  });

  it("validates required fields", () => {
    assert.throws(() => new DeploymentConfigBuilder().build(), {
      message: "serviceName is required",
    });
  });

  it("prevents invalid replica counts", () => {
    assert.throws(
      () => new DeploymentConfigBuilder().withReplicas(0),
      /positive integer/,
    );
  });
});
