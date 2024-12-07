import { type MessagePollOptions, type PollAnswerOption, PollLayoutType, type PollMedia } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import { PollMediaBuilder } from "./PollMediaBuilder.js";

const resolvePollMedia = (pollMedia: ValidPollMedia) =>
  pollMedia instanceof PollMediaBuilder ? pollMedia.toJSON() : pollMedia;

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

export type ValidPollMedia = PollMediaBuilder | PollMedia;
