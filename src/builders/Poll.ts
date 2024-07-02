import {
  type MessagePollOptions,
  type NullablePartialEmoji,
  type PollMedia as OceanicPollMedia,
  PollLayoutType,
} from "oceanic.js";
import { Builder } from "./Builder";

export class PollMedia extends Builder<OceanicPollMedia> {
  constructor() {
    super({});
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
    return inArray ? [this.data as OceanicPollMedia] : (this.data as OceanicPollMedia);
  }
}

export class Poll extends Builder<MessagePollOptions> {
  constructor() {
    super({
      layoutType: PollLayoutType.DEFAULT,
    });
  }

  addAnswers(pollMedias: (PollMedia | OceanicPollMedia)[]): this {
    for (const pollMedia of pollMedias) {
      if (this.data.answers?.length) {
        this.data.answers.push({
          pollMedia: pollMedia instanceof PollMedia ? pollMedia.toJSON() : pollMedia,
        });
      } else {
        this.data.answers = [
          {
            pollMedia: pollMedia instanceof PollMedia ? pollMedia.toJSON() : pollMedia,
          },
        ];
      }
    }

    return this;
  }

  setAllowMultiselect(allow: boolean): this {
    this.data.allowMultiselect = allow;
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
    return inArray ? [this.data as MessagePollOptions] : (this.data as MessagePollOptions);
  }
}
