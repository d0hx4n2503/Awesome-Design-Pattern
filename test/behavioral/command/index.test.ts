import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  BankAccount,
  CommandBus,
  DepositCommand,
  WithdrawCommand,
} from "../../../patterns/behavioral/command/index.js";

describe("Command pattern", () => {
  it("executes actions through command objects", () => {
    const account = new BankAccount();
    const commandBus = new CommandBus();

    commandBus.execute(new DepositCommand(account, 100));
    commandBus.execute(new WithdrawCommand(account, 25));

    assert.equal(account.getBalance(), 75);
    assert.deepEqual(commandBus.auditLog, ["deposit", "withdraw"]);
  });

  it("keeps receiver validation inside the receiver", () => {
    const account = new BankAccount();
    const commandBus = new CommandBus();

    assert.throws(
      () => commandBus.execute(new WithdrawCommand(account, 1)),
      /insufficient funds/,
    );
    assert.deepEqual(commandBus.auditLog, []);
  });
});
