import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  AnalyticsTracker,
  EmailNotifier,
  OrderStatusSubject,
} from "../../../patterns/behavioral/observer/index.js";

describe("Observer pattern", () => {
  it("notifies all subscribed observers", () => {
    const subject = new OrderStatusSubject();
    const emailNotifier = new EmailNotifier();
    const analyticsTracker = new AnalyticsTracker();

    subject.subscribe(emailNotifier);
    subject.subscribe(analyticsTracker);
    subject.changeStatus({ orderId: "order-42", status: "paid" });

    assert.deepEqual(emailNotifier.messages, ["Email: order order-42 is paid"]);
    assert.deepEqual(analyticsTracker.events, [
      { orderId: "order-42", status: "paid" },
    ]);
  });

  it("stops notifying unsubscribed observers", () => {
    const subject = new OrderStatusSubject();
    const emailNotifier = new EmailNotifier();

    subject.subscribe(emailNotifier);
    subject.unsubscribe(emailNotifier);
    subject.changeStatus({ orderId: "order-42", status: "shipped" });

    assert.deepEqual(emailNotifier.messages, []);
  });
});
