import { pathToFileURL } from "node:url";

export type Shipment = {
  weightKg: number;
  distanceKm: number;
  orderValueUsd: number;
};

export type ShippingQuote = {
  carrier: string;
  costUsd: number;
  estimatedDays: number;
};

export interface ShippingStrategy {
  quote(shipment: Shipment): ShippingQuote;
}

export class EconomyShipping implements ShippingStrategy {
  quote(shipment: Shipment): ShippingQuote {
    return {
      carrier: "Economy",
      costUsd: roundMoney(
        4 + shipment.weightKg * 0.8 + shipment.distanceKm * 0.03,
      ),
      estimatedDays: 7,
    };
  }
}

export class ExpressShipping implements ShippingStrategy {
  quote(shipment: Shipment): ShippingQuote {
    return {
      carrier: "Express",
      costUsd: roundMoney(
        12 + shipment.weightKg * 1.6 + shipment.distanceKm * 0.08,
      ),
      estimatedDays: 2,
    };
  }
}

export class FreeShipping implements ShippingStrategy {
  quote(shipment: Shipment): ShippingQuote {
    return {
      carrier: "Free Shipping",
      costUsd: shipment.orderValueUsd >= 100 ? 0 : 9.99,
      estimatedDays: 10,
    };
  }
}

export class CheckoutService {
  constructor(private readonly shippingStrategy: ShippingStrategy) {}

  calculateShipping(shipment: Shipment): ShippingQuote {
    return this.shippingStrategy.quote(shipment);
  }
}

export function runStrategyExample(): void {
  const shipment: Shipment = {
    weightKg: 3,
    distanceKm: 120,
    orderValueUsd: 125,
  };

  const strategies: ShippingStrategy[] = [
    new EconomyShipping(),
    new ExpressShipping(),
    new FreeShipping(),
  ];

  for (const strategy of strategies) {
    const checkout = new CheckoutService(strategy);
    const quote = checkout.calculateShipping(shipment);

    console.log(formatQuote(quote));
  }
}

function formatQuote(quote: ShippingQuote): string {
  return `${quote.carrier}: $${quote.costUsd.toFixed(2)}, ETA ${quote.estimatedDays} days`;
}

function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runStrategyExample();
}
