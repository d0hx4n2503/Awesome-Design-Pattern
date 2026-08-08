import { pathToFileURL } from "node:url";
export type SupportTicket = {
  userId?: string;
  title: string;
  priority: "low" | "normal" | "high";
};
export type TicketResult = { accepted: boolean; reason?: string };
export abstract class TicketHandler {
  private next?: TicketHandler;
  setNext(handler: TicketHandler): TicketHandler {
    this.next = handler;
    return handler;
  }
  handle(ticket: SupportTicket): TicketResult {
    const result = this.process(ticket);
    return result.accepted && this.next ? this.next.handle(ticket) : result;
  }
  protected abstract process(ticket: SupportTicket): TicketResult;
}
export class AuthenticatedUserHandler extends TicketHandler {
  protected process(ticket: SupportTicket): TicketResult {
    return ticket.userId
      ? { accepted: true }
      : { accepted: false, reason: "user must be authenticated" };
  }
}
export class TicketTitleHandler extends TicketHandler {
  protected process(ticket: SupportTicket): TicketResult {
    return ticket.title.trim().length >= 5
      ? { accepted: true }
      : { accepted: false, reason: "title is too short" };
  }
}
export class PriorityHandler extends TicketHandler {
  protected process(ticket: SupportTicket): TicketResult {
    return ticket.priority === "high" && !ticket.title.includes("urgent")
      ? {
          accepted: false,
          reason: "high priority tickets must explain urgency",
        }
      : { accepted: true };
  }
}
export function buildTicketValidationChain(): TicketHandler {
  const auth = new AuthenticatedUserHandler();
  auth.setNext(new TicketTitleHandler()).setNext(new PriorityHandler());
  return auth;
}
export function runChainOfResponsibilityExample(): void {
  console.log(
    buildTicketValidationChain().handle({
      userId: "user-1",
      title: "urgent checkout outage",
      priority: "high",
    }).accepted,
  );
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runChainOfResponsibilityExample();
