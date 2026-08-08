import { pathToFileURL } from "node:url";

export type OrderRequest = {
  sku: string;
  quantity: number;
  paymentToken: string;
  address: string;
};

export type OrderConfirmation = {
  orderId: string;
  reserved: boolean;
  paid: boolean;
  shipmentId: string;
};

export class InventoryService {
  reserve(sku: string, quantity: number): boolean {
    return sku.trim().length > 0 && quantity > 0;
  }
}

export class PaymentService {
  charge(paymentToken: string): boolean {
    return paymentToken.startsWith("tok_");
  }
}

export class ShippingService {
  createShipment(address: string): string {
    return `ship-${address.toLowerCase().replace(/\W+/g, "-")}`;
  }
}

export class OrderFacade {
  constructor(
    private readonly inventoryService: InventoryService,
    private readonly paymentService: PaymentService,
    private readonly shippingService: ShippingService,
  ) {}

  placeOrder(request: OrderRequest): OrderConfirmation {
    const reserved = this.inventoryService.reserve(
      request.sku,
      request.quantity,
    );

    if (!reserved) {
      throw new Error("inventory reservation failed");
    }

    const paid = this.paymentService.charge(request.paymentToken);

    if (!paid) {
      throw new Error("payment failed");
    }

    return {
      orderId: `order-${request.sku}-${request.quantity}`,
      reserved,
      paid,
      shipmentId: this.shippingService.createShipment(request.address),
    };
  }
}

export function runFacadeExample(): void {
  const facade = new OrderFacade(
    new InventoryService(),
    new PaymentService(),
    new ShippingService(),
  );

  const confirmation = facade.placeOrder({
    sku: "BOOK-1",
    quantity: 2,
    paymentToken: "tok_visa",
    address: "New York",
  });

  console.log(`${confirmation.orderId}: shipment=${confirmation.shipmentId}`);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runFacadeExample();
}
