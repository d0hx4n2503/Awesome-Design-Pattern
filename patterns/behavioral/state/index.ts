import { pathToFileURL } from "node:url";
export interface OrderState {
  readonly name: string;
  pay(order: Order): void;
  ship(order: Order): void;
}
export class Order {
  constructor(private state: OrderState = new DraftOrderState()) {}
  pay(): void {
    this.state.pay(this);
  }
  ship(): void {
    this.state.ship(this);
  }
  transitionTo(state: OrderState): void {
    this.state = state;
  }
  getStateName(): string {
    return this.state.name;
  }
}
class DraftOrderState implements OrderState {
  readonly name = "draft";
  pay(order: Order): void {
    order.transitionTo(new PaidOrderState());
  }
  ship(): void {
    throw new Error("draft order cannot be shipped");
  }
}
class PaidOrderState implements OrderState {
  readonly name = "paid";
  pay(): void {
    throw new Error("order is already paid");
  }
  ship(order: Order): void {
    order.transitionTo(new ShippedOrderState());
  }
}
class ShippedOrderState implements OrderState {
  readonly name = "shipped";
  pay(): void {
    throw new Error("shipped order cannot be paid again");
  }
  ship(): void {
    throw new Error("order is already shipped");
  }
}
export function runStateExample(): void {
  const order = new Order();
  order.pay();
  order.ship();
  console.log(order.getStateName());
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runStateExample();
