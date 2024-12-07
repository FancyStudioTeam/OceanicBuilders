import { type MessagePollOptions, PollLayoutType } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PollBuilder } from "../PollBuilder.js";
import { PollMediaBuilder } from "../PollMediaBuilder.js";

const Poll = (data?: Partial<MessagePollOptions>) => new PollBuilder(data);

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
    expect(Poll().setQuestion("Poll Question").toJSON()).toStrictEqual({
      layoutType: PollLayoutType.DEFAULT,
      question: {
        text: "Poll Question",
      },
    }));

  it("Should return JSON base with allow multiselect option enabled", () =>
    expect(Poll().setAllowMultiselect().toJSON()).toStrictEqual({
      allowMultiselect: true,
      layoutType: PollLayoutType.DEFAULT,
    }));

  it("Should return JSON base with custom answers", () =>
    expect(
      Poll()
        .setAnswers([
          {
            text: "Raw Answer 1",
          },
        ])
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 1")])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Raw Answer 1",
          },
        },
        {
          pollMedia: {
            text: "Builder Answer 1",
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
            text: "Raw Answer 1",
          },
        ])
        .addAnswers([
          {
            text: "Raw Answer 2",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Raw Answer 1",
          },
        },
        {
          pollMedia: {
            text: "Raw Answer 2",
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
            text: "Raw Answer 1",
          },
        ])
        .addAnswers([
          {
            text: "Raw Answer 2",
          },
        ])
        .setAnswers([
          {
            text: "Raw Answer 3",
          },
        ])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Raw Answer 3",
          },
        },
      ],
      layoutType: PollLayoutType.DEFAULT,
    }));

  it("Should return JSON base adding builder answers", () =>
    expect(
      Poll()
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 1")])
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 2")])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Builder Answer 1",
          },
        },
        {
          pollMedia: {
            text: "Builder Answer 2",
          },
        },
      ],
      layoutType: PollLayoutType.DEFAULT,
    }));

  it("Should return JSON base adding builder answers", () =>
    expect(
      Poll()
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 1")])
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 2")])
        .setAnswers([new PollMediaBuilder().setText("Builder Answer 3")])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Builder Answer 3",
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
            text: "Raw Answer 1",
          },
        ])
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 1")])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Raw Answer 1",
          },
        },
        {
          pollMedia: {
            text: "Builder Answer 1",
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
            text: "Raw Answer 1",
          },
        ])
        .addAnswers([new PollMediaBuilder().setText("Builder Answer 1")])
        .setAnswers([
          {
            text: "Raw Answer 2",
          },
          new PollMediaBuilder().setText("Builder Answer 2"),
        ])
        .toJSON(),
    ).toStrictEqual({
      answers: [
        {
          pollMedia: {
            text: "Raw Answer 2",
          },
        },
        {
          pollMedia: {
            text: "Builder Answer 2",
          },
        },
      ],
      layoutType: PollLayoutType.DEFAULT,
    }));
});

describe("Using external data", () => {
  it("Receive unknown layout type but should return default layout type", () =>
    expect(
      Poll({
        // @ts-expect-error
        layoutType: PollLayoutType.UNKNOWN,
      }).toJSON(),
    ).toStrictEqual({
      layoutType: PollLayoutType.DEFAULT,
    }));
});
