import {
  type MessagePollOptions,
  type NullablePartialEmoji,
  type PollMedia as OceanicPollMedia,
  type PollAnswerOption,
  PollLayoutType,
} from "oceanic.js";
import type { ValidPollMedia } from "../types.js";

export class PollMedia {
  data: Partial<OceanicPollMedia>;

  constructor() {
    this.data = {};
  }

  setEmoji(emoji: NullablePartialEmoji): this {
    this.data.emoji = emoji;
    return this;
  }

  setText(text: string): this {
    this.data.text = text;
    return this;
  }

  toJSON(inArray: true): [OceanicPollMedia];
  toJSON(inArray?: false): OceanicPollMedia;
  toJSON(inArray = false): OceanicPollMedia | OceanicPollMedia[] {
    const data = this.data as OceanicPollMedia;

    return inArray ? [data] : data;
  }
}

export class Poll {
  data: Partial<MessagePollOptions>;
  answers: PollAnswerOption[];

  constructor() {
    this.data = {
      layoutType: PollLayoutType.DEFAULT,
    };
    this.answers = [];
  }

  addAnswers(pollMedias: ValidPollMedia[]): this {
    for (const pollMedia of pollMedias) {
      this.answers.push(
        "toJSON" in pollMedia
          ? {
              pollMedia: pollMedia.toJSON(),
            }
          : {
              pollMedia,
            },
      );
    }

    return this;
  }

  setAllowMultiselect(allowMultiselect: boolean): this {
    this.data.allowMultiselect = allowMultiselect;
    return this;
  }

  setDuration(duration: number): this {
    this.data.duration = duration;
    return this;
  }

  setQuestion(question: string): this {
    this.data.question = {
      text: question,
    };
    return this;
  }

  toJSON(inArray: true): [MessagePollOptions];
  toJSON(inArray?: false): MessagePollOptions;
  toJSON(inArray = false): MessagePollOptions | MessagePollOptions[] {
    const data = {
      ...this.data,
      answers: this.answers,
    } as MessagePollOptions;

    return inArray ? [data] : data;
  }
}
