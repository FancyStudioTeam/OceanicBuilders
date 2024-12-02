import { ComponentTypes, type MessagePollOptions, PollLayoutType } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PollBuilder, PollMediaBuilder } from "../PollBuilder.js";

const Poll = (data?: Partial<MessagePollOptions>) => new PollBuilder(data);

describe("AttachmentBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON", () =>
      expect(Poll().toJSON()).toStrictEqual({
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base with custom duration", () =>
      expect(Poll().setDuration(10).toJSON()).toStrictEqual({
        duration: 10,
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base with custom question", () =>
      expect(Poll().setQuestion("Test").toJSON()).toStrictEqual({
        layoutType: PollLayoutType.DEFAULT,
        question: {
          text: "Test",
        },
      }));

    it("Should return JSON base with allow multiselect option enabled", () =>
      expect(Poll().setAllowMultiselect(true).toJSON()).toStrictEqual({
        allowMultiselect: true,
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base with custom answers", () =>
      expect(
        Poll()
          .setAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
            new PollMediaBuilder().setText("Test 2").setEmoji("🤖"),
          ])
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
            new PollMediaBuilder().setText("Test 4").setEmoji("🤖"),
          ])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 2",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 4",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base adding JSON answers", () =>
      expect(
        Poll()
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          ])
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 2",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 2",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base setting JSON answers", () =>
      expect(
        Poll()
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          ])
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 2",
            },
          ])
          .setAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
          ])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base adding builder answers", () =>
      expect(
        Poll()
          .addAnswers([new PollMediaBuilder().setText("Test 1").setEmoji("🤖")])
          .addAnswers([new PollMediaBuilder().setText("Test 2").setEmoji("🤖").toJSON()])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 2",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base adding builder answers", () =>
      expect(
        Poll()
          .addAnswers([new PollMediaBuilder().setText("Test 1").setEmoji("🤖")])
          .addAnswers([new PollMediaBuilder().setText("Test 2").setEmoji("🤖").toJSON()])
          .setAnswers([new PollMediaBuilder().setText("Test 3").setEmoji("🤖")])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base adding JSON and builder answers", () =>
      expect(
        Poll()
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          ])
          .addAnswers([new PollMediaBuilder().setText("Test 2").setEmoji("🤖")])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 2",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));

    it("Should return JSON base setting JSON and builder answers", () =>
      expect(
        Poll()
          .addAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 1",
            },
          ])
          .addAnswers([new PollMediaBuilder().setText("Test 2").setEmoji("🤖")])
          .setAnswers([
            {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
            new PollMediaBuilder().setText("Test 4").setEmoji("🤖"),
          ])
          .toJSON(),
      ).toStrictEqual({
        answers: [
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 3",
            },
          },
          {
            pollMedia: {
              emoji: {
                name: "🤖",
              },
              text: "Test 4",
            },
          },
        ],
        layoutType: PollLayoutType.DEFAULT,
      }));
  });

  describe("Using external data", () => {
    it("Receive action row type but should return default layout type", () =>
      expect(
        Poll({
          // @ts-expect-error
          layoutType: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        layoutType: PollLayoutType.DEFAULT,
      }));
  });
});
