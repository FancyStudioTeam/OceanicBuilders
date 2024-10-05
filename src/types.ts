import type {
  ButtonComponent,
  EmbedField as OceanicEmbedField,
  PollMedia as OceanicPollMedia,
  TextInput as OceanicTextInput,
  SelectMenuComponent,
  SelectOption,
} from "oceanic.js";
import type {
  Button,
  ChannelSelectMenu,
  EmbedField,
  MentionableSelectMenu,
  PollMedia,
  RoleSelectMenu,
  StringSelectMenu,
  StringSelectMenuOption,
  TextInput,
  UserSelectMenu,
} from "./index.js";

export type BuilderComponents =
  | Button
  | ChannelSelectMenu
  | MentionableSelectMenu
  | RoleSelectMenu
  | StringSelectMenu
  | UserSelectMenu;

export type JSONComponents = ButtonComponent | SelectMenuComponent;

export type ValidComponents = BuilderComponents | JSONComponents;

export type ValidEmbedField = EmbedField | OceanicEmbedField;

export type ValidPollMedia = PollMedia | OceanicPollMedia;

export type ValidSelectMenuOption = StringSelectMenuOption | SelectOption;

export type ValidTextInput = TextInput | OceanicTextInput;
