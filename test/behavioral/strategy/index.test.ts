import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  CheckoutService,
  EconomyShipping,
  ExpressShipping,
  FreeShipping,
  type Shipment,
  type ShippingStrategy,
} from "../../../patterns/behavioral/strategy/index.js";

const standardShipment: Shipment = {
  weightKg: 3,
  distanceKm: 120,
  orderValueUsd: 125,
};

describe("Strategy pattern", () => {
  it("calculates shipping through interchangeable strategies", () => {
    const quotes = [
      new EconomyShipping(),
      new ExpressShipping(),
      new FreeShipping(),
    ].map((strategy) => new CheckoutService(strategy).calculateShipping(standardShipment));

    assert.deepEqual(quotes, [
      {
        carrier: "Economy",
        costUsd: 10,
        estimatedDays: 7,
      },
      {
        carrier: "Express",
        costUsd: 26.4,
        estimatedDays: 2,
      },
      {
        carrier: "Free Shipping",
        costUsd: 0,
        estimatedDays: 10,
      },
    ]);
  });

  it("keeps checkout logic dependent on the strategy interface", () => {
    const pickupStrategy: ShippingStrategy = {
      quote: () => ({
        carrier: "Store Pickup",
        costUsd: 0,
        estimatedDays: 1,
      }),
    };

    const checkout = new CheckoutService(pickupStrategy);

    assert.deepEqual(checkout.calculateShipping(standardShipment), {
      carrier: "Store Pickup",
      costUsd: 0,
      estimatedDays: 1,
    });
  });

  it("charges a fallback fee when free shipping threshold is not reached", () => {
    const checkout = new CheckoutService(new FreeShipping());

    assert.equal(
      checkout.calculateShipping({
        ...standardShipment,
        orderValueUsd: 80,
      }).costUsd,
      9.99,
    );
  });
});
