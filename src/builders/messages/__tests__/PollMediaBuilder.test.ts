import type { PollMedia as OceanicPollMedia } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PollMediaBuilder } from "../PollMediaBuilder.js";

const PollMedia = (data?: Partial<OceanicPollMedia>) => new PollMediaBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () => expect(PollMedia().toJSON()).toStrictEqual({}));

  it("Should return JSON base with custom text", () =>
    expect(PollMedia().setText("Question 1").toJSON()).toStrictEqual({
      text: "Question 1",
    }));

  it("Should return JSON base with custom unicode string emoji", () =>
    expect(PollMedia().setEmoji("1️⃣").toJSON()).toStrictEqual({
      emoji: {
        name: "1️⃣",
      },
    }));

  it("Should return JSON base with custom unicode object emoji", () =>
    expect(
      PollMedia()
        .setEmoji({
          name: "1️⃣",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        name: "1️⃣",
      },
    }));

  it("Should return JSON base with custom string emoji", () =>
    expect(PollMedia().setEmoji("<:OWL:1303797827574698095>").toJSON()).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
    }));

  it("Should return JSON base with custom object emoji", () =>
    expect(
      PollMedia()
        .setEmoji({
          id: "1303797827574698095",
          name: "OWL",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
    }));
});
