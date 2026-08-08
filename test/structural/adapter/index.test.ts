import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  CheckoutService,
  LegacyPaymentAdapter,
  LegacyPaymentGateway,
  type PaymentProcessor,
} from "../../../patterns/structural/adapter/index.js";

describe("Adapter pattern", () => {
  it("adapts the legacy gateway to the application payment interface", () => {
    const checkout = new CheckoutService(
      new LegacyPaymentAdapter(new LegacyPaymentGateway()),
    );

    assert.deepEqual(
      checkout.pay({
        orderId: "order-42",
        amountUsd: 25.5,
        customerEmail: "buyer@example.com",
      }),
      {
        transactionId: "legacy-order-42",
        approved: true,
      },
    );
  });

  it("keeps checkout dependent on the application-owned interface", () => {
    const fakeProcessor: PaymentProcessor = {
      charge: () => ({
        transactionId: "fake-transaction",
        approved: true,
      }),
    };

    const checkout = new CheckoutService(fakeProcessor);

    assert.equal(
      checkout.pay({
        orderId: "order-test",
        amountUsd: 1,
        customerEmail: "test@example.com",
      }).transactionId,
      "fake-transaction",
    );
  });
});
