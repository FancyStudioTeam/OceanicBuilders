import {
  type ChannelTypes,
  ComponentTypes,
  type ChannelSelectMenu as OceanicChannelSelectMenu,
  type SelectMenuDefaultValue,
} from "oceanic.js";
import type { ChannelSelectMenu as ChannelSelectMenuType } from "../../types";
import { SelectMenu } from "../miscellaneous/SelectMenu";

export class ChannelSelectMenu extends SelectMenu implements ChannelSelectMenuType {
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

  toJSON(): OceanicChannelSelectMenu {
    return this.data as OceanicChannelSelectMenu;
  }

  toJSONArray(): OceanicChannelSelectMenu[] {
    return [this.data as OceanicChannelSelectMenu];
  }
}
