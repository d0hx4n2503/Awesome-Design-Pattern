import { pathToFileURL } from "node:url";

export interface Command {
  readonly name: string;
  execute(): void;
}

export class BankAccount {
  private balance = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error("insufficient funds");
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

export class DepositCommand implements Command {
  readonly name = "deposit";

  constructor(
    private readonly account: BankAccount,
    private readonly amount: number,
  ) {}

  execute(): void {
    this.account.deposit(this.amount);
  }
}

export class WithdrawCommand implements Command {
  readonly name = "withdraw";

  constructor(
    private readonly account: BankAccount,
    private readonly amount: number,
  ) {}

  execute(): void {
    this.account.withdraw(this.amount);
  }
}

export class CommandBus {
  readonly auditLog: string[] = [];

  execute(command: Command): void {
    command.execute();
    this.auditLog.push(command.name);
  }
}

export function runCommandExample(): void {
  const account = new BankAccount();
  const commandBus = new CommandBus();

  commandBus.execute(new DepositCommand(account, 100));
  commandBus.execute(new WithdrawCommand(account, 40));

  console.log(
    `balance=${account.getBalance()} audit=${commandBus.auditLog.join(",")}`,
  );
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runCommandExample();
}
