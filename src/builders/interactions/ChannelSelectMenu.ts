import {
  type ChannelTypes,
  ComponentTypes,
  type ChannelSelectMenu as OceanicChannelSelectMenu,
  type SelectMenuDefaultValue,
} from "oceanic.js";
import { SelectMenu } from "../miscellaneous/SelectMenu";

export class ChannelSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicChannelSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.CHANNEL_SELECT,
    });
  }

  setChannelTypes(channelTypes: ChannelTypes[]): this {
    (this.data as OceanicChannelSelectMenu).channelTypes = channelTypes;
    return this;
  }

  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this {
    (this.data as OceanicChannelSelectMenu).defaultValues = defaultValues;
    return this;
  }

  toJSON(inArray: true): [OceanicChannelSelectMenu];
  toJSON(inArray?: false): OceanicChannelSelectMenu;
  toJSON(inArray = false): OceanicChannelSelectMenu | OceanicChannelSelectMenu[] {
    return inArray ? [this.data as OceanicChannelSelectMenu] : (this.data as OceanicChannelSelectMenu);
  }

  /** @deprecated Use toJSON(true) instead. */
  toJSONArray(): OceanicChannelSelectMenu[] {
    process.emitWarning(
      "toJSONArray is deprecated and will be removed in the next major, use toJSON(true) instead.",
      "ChannelSelectMenu",
    );

    return this.toJSON(true);
  }
}
