import { pathToFileURL } from "node:url";
export class ChatRoom {
  private readonly users = new Set<ChatUser>();
  join(user: ChatUser): void {
    this.users.add(user);
  }
  send(sender: ChatUser, message: string): void {
    for (const user of this.users)
      if (user !== sender) user.receive(`${sender.name}: ${message}`);
  }
}
export class ChatUser {
  readonly inbox: string[] = [];
  constructor(
    readonly name: string,
    private readonly room: ChatRoom,
  ) {
    room.join(this);
  }
  send(message: string): void {
    this.room.send(this, message);
  }
  receive(message: string): void {
    this.inbox.push(message);
  }
}
export function runMediatorExample(): void {
  const room = new ChatRoom();
  const ada = new ChatUser("Ada", room);
  const grace = new ChatUser("Grace", room);
  ada.send("hello");
  console.log(grace.inbox[0]);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href)
  runMediatorExample();
