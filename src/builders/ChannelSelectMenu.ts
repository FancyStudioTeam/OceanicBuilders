import {
  type ChannelTypes,
  ComponentTypes,
  type ChannelSelectMenu as OceanicChannelSelectMenu,
  type SelectMenuDefaultValue,
} from "oceanic.js";
import { SelectMenu } from "./SelectMenu";

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

  setDefaultValue(defaultValue: SelectMenuDefaultValue): this {
    (this.data as OceanicChannelSelectMenu).defaultValues = [defaultValue];
    return this;
  }

  toJSON(inArray: true): [OceanicChannelSelectMenu];
  toJSON(inArray?: false): OceanicChannelSelectMenu;
  toJSON(inArray = false): OceanicChannelSelectMenu | OceanicChannelSelectMenu[] {
    const data = this.data as OceanicChannelSelectMenu;

    return inArray ? [data] : data;
  }
}
