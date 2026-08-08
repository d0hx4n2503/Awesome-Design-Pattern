import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  ChatRoom,
  ChatUser,
} from "../../../patterns/behavioral/mediator/index.js";

describe("Mediator pattern", () => {
  it("routes messages without direct user dependencies", () => {
    const room = new ChatRoom();
    const ada = new ChatUser("Ada", room);
    const grace = new ChatUser("Grace", room);
    const linus = new ChatUser("Linus", room);
    ada.send("ship it");
    assert.deepEqual(grace.inbox, ["Ada: ship it"]);
    assert.deepEqual(linus.inbox, ["Ada: ship it"]);
    assert.deepEqual(ada.inbox, []);
  });
});
