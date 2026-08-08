import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  NotificationFactory,
  NotificationService,
} from "../../../patterns/creational/factory-method/index.js";

describe("Factory Method pattern", () => {
  it("creates an email sender through the factory method", () => {
    const service = new NotificationService(new NotificationFactory());

    assert.deepEqual(
      service.notify("email", {
        recipient: "USER@EXAMPLE.COM",
        body: "Hello",
      }),
      {
        channel: "email",
        destination: "user@example.com",
        delivered: true,
      },
    );
  });

  it("creates an SMS sender through the same factory method", () => {
    const service = new NotificationService(new NotificationFactory());

    assert.deepEqual(
      service.notify("sms", {
        recipient: "+1 (555) 010-0100",
        body: "Code: 123456",
      }),
      {
        channel: "sms",
        destination: "15550100100",
        delivered: true,
      },
    );
  });
});
