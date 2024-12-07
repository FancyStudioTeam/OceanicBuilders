import type { SelectMenuDefaultValue } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { MentionableDefaultValueBuilder } from "../MentionableDefaultValueBuilder.js";

const MentionableDefaultValue = (data?: Partial<SelectMenuDefaultValue>) => new MentionableDefaultValueBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () => expect(MentionableDefaultValue().toJSON()).toStrictEqual({}));

  it("Should return JSON base with custom mentionable ID", () =>
    expect(MentionableDefaultValue().setMentionableID("anyMentionableID").toJSON()).toStrictEqual({
      id: "anyMentionableID",
    }));

  it("Should return JSON base with custom type", () =>
    expect(MentionableDefaultValue().setType("channel").toJSON()).toStrictEqual({
      type: "channel",
    }));
});
