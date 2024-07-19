import { readFileSync } from "node:fs";
import {
  type AnyInteractionGateway,
  ButtonStyles,
  ChannelTypes,
  Client,
  ComponentTypes,
  type Message,
  type MessageComponentSelectMenuInteractionData,
  MessageFlags,
  TextInputStyles,
} from "oceanic.js";
import {
  ActionRow,
  Attachment,
  Button,
  ChannelSelectMenu,
  Embed,
  EmbedField,
  MentionableSelectMenu,
  Modal,
  Poll,
  PollMedia,
  RoleSelectMenu,
  StringSelectMenu,
  StringSelectMenuOption,
  TextInput,
  UserSelectMenu,
} from "./src";

const client = new Client({
  auth: `Bot ${process.env.DISCORD_TOKEN}`,
  gateway: {
    intents: ["GUILDS", "GUILD_MESSAGES", "MESSAGE_CONTENT"],
  },
});

client.on("ready", () => {
  // biome-ignore lint/suspicious/noConsoleLog:
  console.log(`Discord client ${client.user.username} is ready!`);
});

client.connect();

client.on("messageCreate", async (message: Message) => {
  if (message.content === ">poll") {
    const pollMedias = [
      {
        text: "Option 1 (Raw)",
        emoji: {
          name: "1️⃣",
        },
      },
      new PollMedia().setText("Option 2 (PollMedia Builder)").setEmoji({
        name: "2️⃣",
      }),
      new PollMedia()
        .setText("Option 3 (PollMedia Builder with toJSON)")
        .setEmoji({
          name: "3️⃣",
        })
        .toJSON(),
    ];

    await client.rest.channels.createMessage(message.channelID, {
      poll: new Poll().setAllowMultiselect(true).setQuestion("Poll").setDuration(1).addAnswers(pollMedias).toJSON(),
    });
  }

  if (message.content === ">embeds") {
    const embedFields = [
      {
        name: "Field",
        value: "Raw",
      },
      new EmbedField().setName("Field").setValue("EmbedField Builder"),
      new EmbedField().setName("Field").setValue("EmbedField Builder with toJSON").toJSON(),
    ];
    const embeds = [new Embed().setDescription("Embed 1").toJSON(), new Embed().setDescription("Embed 2").toJSON()];

    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("Embed use `toJSON(true) method`").addFields(embedFields).toJSON(true),
    });
    await client.rest.channels.createMessage(message.channelID, {
      embeds,
    });
  }

  if (message.content === ">asset") {
    const asset = new Attachment()
      .setContents(readFileSync("./assets/Oceanic.png"))
      .setName("oceanic.png")
      .toJSON(true);

    await client.rest.channels.createMessage(message.channelID, {
      files: asset,
    });
    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setImage("attachment://oceanic.png").toJSON(true),
      files: asset,
    });
  }

  if (message.content === ">buttons") {
    const buttons = [
      {
        customID: "button_1",
        label: "Button 1 (Raw)",
        style: ButtonStyles.SECONDARY,
        type: ComponentTypes.BUTTON,
      },
      new Button().setCustomID("button_2").setLabel("Button 2 (Button Builder)").setStyle(ButtonStyles.SECONDARY),
      new Button()
        .setCustomID("button_3")
        .setLabel("Button 2 (Button Builder with toJSON)")
        .setStyle(ButtonStyles.SECONDARY)
        .toJSON(),
    ];

    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("Buttons with one action row").toJSON(true),
      components: new ActionRow()
        .addComponents(
          // @ts-expect-error
          buttons,
        )
        .toJSON(true),
    });
  }

  if (message.content === ">selects") {
    const stringSelectMenuOptions = [
      {
        label: "Option 1",
        value: "1",
        description: "Raw",
      },
      new StringSelectMenuOption().setLabel("Option 2").setValue("2").setDescription("StringSelectMenuOption Builder"),
      new StringSelectMenuOption()
        .setLabel("Option 3")
        .setValue("3")
        .setDescription("StringSelectMenuOption Builder with toJSON")
        .toJSON(),
    ];

    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("StringSelectMenu Builder").toJSON(true),
      components: new ActionRow()
        .addComponents([
          new StringSelectMenu()
            .setCustomID("string_select_menu")
            .addOptions(stringSelectMenuOptions)
            .setMaxValues(stringSelectMenuOptions.length)
            .setMinValues(1),
        ])
        .toJSON(true),
    });
    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("ChannelSelectMenu Builder").toJSON(true),
      components: new ActionRow()
        .addComponents([
          new ChannelSelectMenu()
            .setCustomID("channel_select_menu")
            .setChannelTypes([ChannelTypes.GUILD_TEXT])
            .setDefaultValue({
              id: message.channelID,
              type: "channel",
            })
            .setMaxValues(3)
            .setMinValues(1),
        ])
        .toJSON(true),
    });
    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("MentionableSelectMenu Builder").toJSON(true),
      components: new ActionRow()
        .addComponents([
          new MentionableSelectMenu()
            .setCustomID("mentionable_select_menu")
            .setDefaultValue({
              id: message.author.id,
              type: "user",
            })
            .setMaxValues(3)
            .setMinValues(1),
        ])
        .toJSON(true),
    });
    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("RoleSelectMenu Builder").toJSON(true),
      components: new ActionRow()
        .addComponents([
          new RoleSelectMenu()
            .setCustomID("role_select_menu")
            .setDefaultValue({
              id: String(message.member?.roles.at(0)),
              type: "role",
            })
            .setMaxValues(3)
            .setMinValues(1),
        ])
        .toJSON(true),
    });
    await client.rest.channels.createMessage(message.channelID, {
      embeds: new Embed().setDescription("UserSelectMenu Builder").toJSON(true),
      components: new ActionRow()
        .addComponents([
          new UserSelectMenu()
            .setCustomID("user_select_menu")
            .setDefaultValue({
              id: message.author.id,
              type: "user",
            })
            .setMaxValues(3)
            .setMinValues(1),
        ])
        .toJSON(true),
    });
  }

  if (message.content === ">modal") {
    await client.rest.channels.createMessage(message.channelID, {
      components: new ActionRow()
        .addComponents([new Button().setCustomID("modal").setLabel("Open Modal").setStyle(ButtonStyles.SECONDARY)])
        .toJSON(true),
    });
  }
});

client.on("interactionCreate", async (interaction: AnyInteractionGateway) => {
  if (interaction.isComponentInteraction() && interaction.data.componentType === ComponentTypes.BUTTON) {
    switch (interaction.data.customID) {
      case "button_1":
      case "button_2":
      case "button_3": {
        await interaction.createMessage({
          embeds: new Embed().setDescription(`Clicked button \`${interaction.data.customID}\``).toJSON(true),
          flags: MessageFlags.EPHEMERAL,
        });

        break;
      }
      case "modal": {
        const textInputs = [
          {
            customID: "text_input_1",
            label: "Text Input 1",
            style: TextInputStyles.SHORT,
            type: ComponentTypes.TEXT_INPUT,
            placeholder: "Raw",
          },
          new TextInput()
            .setCustomID("text_input_2")
            .setLabel("Text Input 2")
            .setStyle(TextInputStyles.SHORT)
            .setPlaceholder("TextInput Builder"),
          new TextInput()
            .setCustomID("text_input_3")
            .setLabel("Text Input 3")
            .setStyle(TextInputStyles.SHORT)
            .setPlaceholder("TextInput Builder with toJSON")
            .toJSON(),
        ];

        await interaction.createModal(
          new Modal()
            .setCustomID("modal")
            .setTitle("Modal")
            .addComponents(
              // @ts-expect-error
              textInputs,
            )
            .toJSON(),
        );
        break;
      }
    }
  }

  if (
    interaction.isComponentInteraction() &&
    [
      ComponentTypes.CHANNEL_SELECT,
      ComponentTypes.MENTIONABLE_SELECT,
      ComponentTypes.ROLE_SELECT,
      ComponentTypes.STRING_SELECT,
      ComponentTypes.USER_SELECT,
    ].includes(interaction.data.componentType)
  ) {
    const data = interaction.data as MessageComponentSelectMenuInteractionData;

    switch (interaction.data.customID) {
      case "string_select_menu": {
        await interaction.createMessage({
          embeds: new Embed()
            .setDescription(`Clicked option(s) \`${data.values.getStrings().join(", ")}\``)
            .toJSON(true),
          flags: MessageFlags.EPHEMERAL,
        });

        break;
      }
      case "channel_select_menu": {
        await interaction.createMessage({
          embeds: new Embed()
            .setDescription(`Clicked channel(s) \`${data.values.getChannels().join(", ")}\``)
            .toJSON(true),
          flags: MessageFlags.EPHEMERAL,
        });

        break;
      }
      case "mentionable_select_menu": {
        await interaction.createMessage({
          embeds: new Embed()
            .setDescription(`Clicked mentionable(s) \`${data.values.getUsers().join(", ")}\``)
            .toJSON(true),
          flags: MessageFlags.EPHEMERAL,
        });

        break;
      }
      case "role_select_menu": {
        await interaction.createMessage({
          embeds: new Embed().setDescription(`Clicked role(s) \`${data.values.getRoles().join(", ")}\``).toJSON(true),
          flags: MessageFlags.EPHEMERAL,
        });

        break;
      }
      case "user_select_menu": {
        await interaction.createMessage({
          embeds: new Embed().setDescription(`Clicked user(s) \`${data.values.getUsers().join(", ")}\``).toJSON(true),
          flags: MessageFlags.EPHEMERAL,
        });

        break;
      }
    }
  }

  if (interaction.isModalSubmitInteraction() && interaction.data.customID === "modal") {
    await interaction.createMessage({
      embeds: new Embed()
        .setDescription(`Text input(s) \`${interaction.data.components.getComponents().join(", ")}\``)
        .toJSON(true),
      flags: MessageFlags.EPHEMERAL,
    });
  }
});
