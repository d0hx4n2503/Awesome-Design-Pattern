import { pathToFileURL } from "node:url";

export type PaymentRequest = {
  orderId: string;
  amountUsd: number;
  customerEmail: string;
};

export type PaymentResult = {
  transactionId: string;
  approved: boolean;
};

export interface PaymentProcessor {
  charge(request: PaymentRequest): PaymentResult;
}

export class LegacyPaymentGateway {
  makePayment(payload: { reference: string; cents: number; payer: string }): {
    id: string;
    status: "APPROVED" | "DECLINED";
  } {
    return {
      id: `legacy-${payload.reference}`,
      status: payload.cents > 0 ? "APPROVED" : "DECLINED",
    };
  }
}

export class LegacyPaymentAdapter implements PaymentProcessor {
  constructor(private readonly gateway: LegacyPaymentGateway) {}

  charge(request: PaymentRequest): PaymentResult {
    const response = this.gateway.makePayment({
      reference: request.orderId,
      cents: Math.round(request.amountUsd * 100),
      payer: request.customerEmail,
    });

    return {
      transactionId: response.id,
      approved: response.status === "APPROVED",
    };
  }
}

export class CheckoutService {
  constructor(private readonly paymentProcessor: PaymentProcessor) {}

  pay(request: PaymentRequest): PaymentResult {
    return this.paymentProcessor.charge(request);
  }
}

export function runAdapterExample(): void {
  const checkout = new CheckoutService(
    new LegacyPaymentAdapter(new LegacyPaymentGateway()),
  );

  const result = checkout.pay({
    orderId: "order-1001",
    amountUsd: 49.99,
    customerEmail: "customer@example.com",
  });

  console.log(
    `Payment ${result.approved ? "approved" : "declined"}: ${result.transactionId}`,
  );
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runAdapterExample();
}
