import { pathToFileURL } from "node:url";

export type OrderStatus = "created" | "paid" | "shipped";

export type OrderEvent = {
  orderId: string;
  status: OrderStatus;
};

export interface OrderObserver {
  update(event: OrderEvent): void;
}

export class OrderStatusSubject {
  private readonly observers = new Set<OrderObserver>();

  subscribe(observer: OrderObserver): void {
    this.observers.add(observer);
  }

  unsubscribe(observer: OrderObserver): void {
    this.observers.delete(observer);
  }

  changeStatus(event: OrderEvent): void {
    for (const observer of this.observers) {
      observer.update(event);
    }
  }
}

export class EmailNotifier implements OrderObserver {
  readonly messages: string[] = [];

  update(event: OrderEvent): void {
    this.messages.push(`Email: order ${event.orderId} is ${event.status}`);
  }
}

export class AnalyticsTracker implements OrderObserver {
  readonly events: OrderEvent[] = [];

  update(event: OrderEvent): void {
    this.events.push(event);
  }
}

export function runObserverExample(): void {
  const subject = new OrderStatusSubject();
  const emailNotifier = new EmailNotifier();
  const analyticsTracker = new AnalyticsTracker();

  subject.subscribe(emailNotifier);
  subject.subscribe(analyticsTracker);
  subject.changeStatus({ orderId: "order-1001", status: "shipped" });

  console.log(emailNotifier.messages[0]);
  console.log(`Analytics events: ${analyticsTracker.events.length}`);
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runObserverExample();
}
