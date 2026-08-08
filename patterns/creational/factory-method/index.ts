import { pathToFileURL } from "node:url";

export type NotificationChannel = "email" | "sms";

export type NotificationMessage = {
  recipient: string;
  body: string;
};

export type DeliveryReceipt = {
  channel: NotificationChannel;
  destination: string;
  delivered: boolean;
};

export interface NotificationSender {
  send(message: NotificationMessage): DeliveryReceipt;
}

export class EmailNotificationSender implements NotificationSender {
  send(message: NotificationMessage): DeliveryReceipt {
    return {
      channel: "email",
      destination: message.recipient.toLowerCase(),
      delivered: message.body.trim().length > 0,
    };
  }
}

export class SmsNotificationSender implements NotificationSender {
  send(message: NotificationMessage): DeliveryReceipt {
    return {
      channel: "sms",
      destination: normalizePhoneNumber(message.recipient),
      delivered: message.body.trim().length > 0,
    };
  }
}

export class NotificationFactory {
  createSender(channel: NotificationChannel): NotificationSender {
    switch (channel) {
      case "email":
        return new EmailNotificationSender();
      case "sms":
        return new SmsNotificationSender();
    }
  }
}

export class NotificationService {
  constructor(private readonly factory: NotificationFactory) {}

  notify(
    channel: NotificationChannel,
    message: NotificationMessage,
  ): DeliveryReceipt {
    return this.factory.createSender(channel).send(message);
  }
}

export function runFactoryMethodExample(): void {
  const service = new NotificationService(new NotificationFactory());

  const receipt = service.notify("email", {
    recipient: "USER@EXAMPLE.COM",
    body: "Your order has shipped.",
  });

  console.log(
    `${receipt.channel} sent to ${receipt.destination}: ${receipt.delivered}`,
  );
}

function normalizePhoneNumber(value: string): string {
  return value.replace(/\D/g, "");
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runFactoryMethodExample();
}
