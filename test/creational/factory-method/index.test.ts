import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  EmailNotificationWorkflow,
  SmsNotificationWorkflow,
} from "../../../patterns/creational/factory-method/index.js";

describe("Factory Method pattern", () => {
  it("lets a concrete creator choose the email product", () => {
    assert.deepEqual(
      new EmailNotificationWorkflow().notify({
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

  it("lets another concrete creator choose the SMS product", () => {
    assert.deepEqual(
      new SmsNotificationWorkflow().notify({
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
