import {
  type MessagePollOptions,
  type NullablePartialEmoji,
  type PollAnswerOption,
  PollLayoutType,
  type PollMedia,
} from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";

const EMOJI_REGEX = /(?<animated>a?):(?<name>[^:]+):(?<id>\d{17,20})/;
const resolvePollMedia = (pollMedia: ValidPollMedia) => ("toJSON" in pollMedia ? pollMedia.toJSON() : pollMedia);
const parseEmoji = (emoji: string, type: "default" | "custom" = "custom"): NullablePartialEmoji => {
  if (type === "default") {
    return {
      name: emoji,
    };
  }

  const match = emoji.match(EMOJI_REGEX) ?? [];
  const [, , name, id] = match;

  if (!(name && id)) {
    return parseEmoji(emoji, "default");
  }

  return {
    name,
    id,
  };
};

export class PollMediaBuilder extends BaseBuilder<PollMedia> {
  setEmoji(emoji: NullablePartialEmoji | string) {
    this.data.emoji = typeof emoji === "string" ? parseEmoji(emoji) : emoji;

    return this;
  }

  setText(text: string) {
    this.data.text = text;

    return this;
  }
}

export class PollBuilder extends BaseBuilder<MessagePollOptions> {
  constructor(poll?: Partial<MessagePollOptions>) {
    super({
      ...poll,
      layoutType: PollLayoutType.DEFAULT,
    });
  }

  addAnswers(answers: ValidPollMedia[]) {
    const resolvedPollMedia = answers.map<PollAnswerOption>((pollMedia) => ({
      pollMedia: resolvePollMedia(pollMedia),
    }));

    this.data.answers ??= [];
    this.data.answers.push(...resolvedPollMedia);

    return this;
  }

  setAllowMultiselect(isMultiselectAllowed = true) {
    this.data.allowMultiselect = isMultiselectAllowed;

    return this;
  }

  setAnswers(answers: ValidPollMedia[]) {
    const resolvedPollMedia = answers.map<PollAnswerOption>((pollMedia) => ({
      pollMedia: resolvePollMedia(pollMedia),
    }));

    this.data.answers = resolvedPollMedia;

    return this;
  }

  setDuration(duration: number) {
    this.data.duration = duration;

    return this;
  }

  setQuestion(question: string) {
    this.data.question = {
      text: question,
    };

    return this;
  }
}

type ValidPollMedia = PollMediaBuilder | PollMedia;
