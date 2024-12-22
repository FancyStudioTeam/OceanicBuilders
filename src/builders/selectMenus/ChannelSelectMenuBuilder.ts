import { type RestOrArray, normalizeArray } from "@utils";
import { type ChannelSelectMenu, type ChannelTypes, ComponentTypes, type SelectMenuDefaultValue } from "oceanic.js";
import { SelectMenuBaseBuilder } from "./SelectMenuBaseBuilder.js";

export class ChannelSelectMenuBuilder extends SelectMenuBaseBuilder<ChannelSelectMenu> {
  constructor(selectMenu?: Partial<ChannelSelectMenu>) {
    super({
      ...selectMenu,
      type: ComponentTypes.CHANNEL_SELECT,
    });
  }

  addChannelTypes(...channelTypes: RestOrArray<ChannelTypes>) {
    const normalizedArray = normalizeArray(channelTypes);

    this.data.channelTypes ??= [];
    this.data.channelTypes.push(...normalizedArray);

    return this;
  }

  addDefaultChannels(...channelIDs: RestOrArray<string>) {
    const normalizedArray = normalizeArray(channelIDs);
    const defaultValues = normalizedArray.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "channel",
    }));

    this.data.defaultValues ??= [];
    this.data.defaultValues.push(...defaultValues);

    return this;
  }

  setChannelTypes(...channelTypes: RestOrArray<ChannelTypes>) {
    const normalizedArray = normalizeArray(channelTypes);

    this.data.channelTypes = normalizedArray;

    return this;
  }

  setDefaultChannels(...channelIDs: RestOrArray<string>) {
    const normalizedArray = normalizeArray(channelIDs);
    const defaultValues = normalizedArray.map<SelectMenuDefaultValue>((id) => ({
      id,
      type: "channel",
    }));

    this.data.defaultValues = defaultValues;

    return this;
  }
}
