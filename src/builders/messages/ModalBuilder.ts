import { ComponentTypes, type ModalActionRow, type ModalData, type TextInput } from "oceanic.js";
import { BaseBuilder } from "../BaseBuilder.js";
import { TextInputBuilder } from "./TextInputBuilder.js";

const resolveTextInput = (textInput: ValidTextInput) =>
  textInput instanceof TextInputBuilder ? textInput.toJSON() : textInput;

export class ModalBuilder extends BaseBuilder<ModalData> {
  addComponents(components: ValidTextInput[]) {
    const resolvedComponents = components.map((textInput) => resolveTextInput(textInput));
    const actionRows = resolvedComponents.map<ModalActionRow>((textInput) => ({
      components: [textInput],
      type: ComponentTypes.ACTION_ROW,
    }));

    this.data.components ??= [];
    this.data.components.push(...actionRows);

    return this;
  }

  setComponents(components: ValidTextInput[]) {
    const resolvedComponents = components.map((textInput) => resolveTextInput(textInput));
    const actionRows = resolvedComponents.map<ModalActionRow>((textInput) => ({
      components: [textInput],
      type: ComponentTypes.ACTION_ROW,
    }));

    this.data.components = actionRows;

    return this;
  }

  setCustomID(customID: string) {
    this.data.customID = customID;

    return this;
  }

  setTitle(title: string) {
    this.data.title = title;

    return this;
  }
}

type ValidTextInput = TextInputBuilder | TextInput;