# Oceanic Builders (Unofficial) [W.I.P]

> ⚠️ Package under development, **may contain bugs**

[Oceanic][oceanic_repository_url] compatible utility package

> ⚠️ This project uses version [1.11.1-dev.05899ff][version_commit] of [Oceanic][oceanic_repository_url]

## Get Started

### Installation

```bash
npm i oceanic-builders
```

## Stages

<details open>
<summary>See information</summary>

### Builders in `Stage 0`

> ⚠️ Stage 0 means that they have not been implemented or are being planned

- `Modal`
- `TextInput`
- `Poll`
- `StringSelectMenuOption` (?)

### Builders in `Stage 1`

> ⚠️ Stage 1 means that they have been implemented, but have not been properly verified with tests

- `ChannelSelectMenu`
- `MentionableSelectMenu`
- `RoleSelectMenu`
- `StringSelectMenu`
- `Embed`
- `ActionRow`

### Builders in `Stage 2`

> ⚠️ Stage 2 means that they are being verified by testing or improving functionality (There may be changes)

### Builders in `Stage 3`

> ⚠️ Stage 3 means that they have been verified with tests and are stable

- `Button`
- `Attachment`

</details>

## Documentation

### Builders

<details>
<summary>See documentation</summary>

#### Action Row Builder

```ts
import { MessageActionRow } from "oceanic.js";

type ActionRowComponents =
  | Button
  | ChannelSelectMenu
  | MentionableSelectMenu
  | RoleSelectMenu
  | StringSelectMenu
  | UserSelectMenu;

export class ActionRow<T extends ActionRowComponents> {
  addComponent(component: T): this;
  addComponents(components: T[]): this;
  toJSON(): MessageActionRow;
  toJSONArray(): MessageActionRow[];
}
```

#### Attachment Builder

```ts
import type { File } from "oceanic.js";

export class Attachment {
  setContent(content: Buffer): this;
  setIndex(index: number): this;
  setName(name: string): this;
  toJSON(): File;
  toJSONArray(): File[];
}
```

#### Button Builder

```ts
import type { ButtonComponent } from "oceanic.js";

export class Button {
  constructor(button?: Partial<ButtonComponent>);
  setCustomID(customID: string): this;
  setDisabled(disabled: boolean): this;
  setEmoji(emoji: NullablePartialEmoji): this;
  setLabel(label: string): this;
  setSkuID(skuID: string): this;
  setStyle(style: ButtonStyles): this;
  setURL(url: string): this;
  toJSON(): ButtonComponent;
  toJSONArray(): ButtonComponent[];
}
```

#### Channel Select Menu Builder

```ts
import type { ChannelSelectMenu as OceanicChannelSelectMenu } from "oceanic.js";

export class ChannelSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicChannelSelectMenu>);
  setChannelTypes(channelTypes: ChannelTypes[]): this;
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicChannelSelectMenu;
  toJSONArray(): OceanicChannelSelectMenu[];
}
```

#### Embed Builder

```ts
import type {
  EmbedAuthorOptions,
  EmbedField,
  EmbedFooterOptions,
  EmbedOptions,
} from "oceanic.js";

export class Embed {
  constructor(embed?: EmbedOptions);
  addField(field: EmbedField): this;
  addFields(fields: EmbedField[]): this;
  setAuthor(author: EmbedAuthorOptions): this;
  setColor(color: number): this;
  setDescription(description: string): this;
  setFooter(footer: EmbedFooterOptions): this;
  setImage(image: string): this;
  setThumbnail(thumbnail: string): this;
  setTimestamp(date?: Date): this;
  setTitle(title: string): this;
  setURL(url: string): this;
  toJSON(): EmbedOptions;
  toJSONArray(): EmbedOptions[];
}
```

#### Mentionable Select Menu Builder

```ts
import type { MentionableSelectMenu as OceanicMentionableSelectMenu } from "oceanic.js";

export class MentionableSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicMentionableSelectMenu>);
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicMentionableSelectMenu;
  toJSONArray(): OceanicMentionableSelectMenu[];
}
```

#### Role Select Menu Builder

```ts
import type { RoleSelectMenu as OceanicRoleSelectMenu } from "oceanic.js";

export class RoleSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicRoleSelectMenu>);
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicRoleSelectMenu;
  toJSONArray(): OceanicRoleSelectMenu[];
}
```

#### String Select Menu Builder

```ts
import type { StringSelectMenu as OceanicStringSelectMenu } from "oceanic.js";

export class StringSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicStringSelectMenu>);
  addOption(option: SelectOption): this;
  addOptions(options: SelectOption[]): this;
  toJSON(): OceanicStringSelectMenu;
  toJSONArray(): OceanicStringSelectMenu[];
}
```

#### User Select Menu Builder

```ts
import type { UserSelectMenu as OceanicUserSelectMenu } from "oceanic.js";

export class UserSelectMenu extends SelectMenu {
  constructor(selectMenu?: Partial<OceanicUserSelectMenu>);
  setDefaultValues(defaultValues: SelectMenuDefaultValue[]): this;
  toJSON(): OceanicUserSelectMenu;
  toJSONArray(): OceanicUserSelectMenu[];
}
```

</details>

[oceanic_repository_url]: https://github.com/OceanicJS/Oceanic
[version_commit]: https://github.com/OceanicJS/Oceanic/commit/05899ff
