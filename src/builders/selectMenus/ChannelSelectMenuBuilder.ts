import { type ChannelSelectMenu, type ChannelTypes, ComponentTypes, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

export class ChannelSelectMenuBuilder extends SelectMenuBaseBuilder<ChannelSelectMenu> {
  constructor(selectMenu?: Partial<ChannelSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.CHANNEL_SELECT,
    });
  }

  addChannelTypes(channelTypes: ChannelTypes[]) {
    this.data.channelTypes ??= [];
    this.data.channelTypes.push(...channelTypes);

    return this;
  }

  addDefaultChannels(channelIDs: string[]) {
    const defaultValues = channelIDs.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "channel",
    }));

    this.data.defaultValues ??= [];
    this.data.defaultValues.push(...defaultValues);

    return this;
  }

  setChannelTypes(channelTypes: ChannelTypes[]) {
    this.data.channelTypes = channelTypes;

    return this;
  }

  setDefaultChannels(channelIDs: string[]) {
    const defaultValues = channelIDs.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "channel",
    }));

    this.data.defaultValues = defaultValues;

    return this;
  }
}
