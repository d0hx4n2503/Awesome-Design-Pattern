import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  InventoryService,
  OrderFacade,
  PaymentService,
  ShippingService,
} from "../../../patterns/structural/facade/index.js";

describe("Facade pattern", () => {
  it("coordinates subsystem services behind one operation", () => {
    const facade = new OrderFacade(
      new InventoryService(),
      new PaymentService(),
      new ShippingService(),
    );

    assert.deepEqual(
      facade.placeOrder({
        sku: "BOOK-1",
        quantity: 2,
        paymentToken: "tok_visa",
        address: "New York",
      }),
      {
        orderId: "order-BOOK-1-2",
        reserved: true,
        paid: true,
        shipmentId: "ship-new-york",
      },
    );
  });

  it("keeps failure handling inside the facade workflow", () => {
    const facade = new OrderFacade(
      new InventoryService(),
      new PaymentService(),
      new ShippingService(),
    );

    assert.throws(
      () =>
        facade.placeOrder({
          sku: "BOOK-1",
          quantity: 1,
          paymentToken: "invalid",
          address: "New York",
        }),
      /payment failed/,
    );
  });
});
