import { pathToFileURL } from "node:url";
export interface DeliveryChannel {
  deliver(message: string): string;
}
export class EmailChannel implements DeliveryChannel {
  deliver(message: string): string {
    return `email:${message}`;
  }
}
export class SlackChannel implements DeliveryChannel {
  deliver(message: string): string {
    return `slack:${message}`;
  }
}
export abstract class Alert {
  constructor(protected readonly channel: DeliveryChannel) {}
  abstract send(message: string): string;
}
export class CriticalAlert extends Alert {
  send(message: string): string {
    return this.channel.deliver(`[critical] ${message}`);
  }
}
export function runBridgeExample(): void {
  console.log(new CriticalAlert(new SlackChannel()).send("database down"));
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runBridgeExample();
