import { ButtonStyles, ComponentTypes, type URLButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { LinkButtonBuilder } from "../LinkButtonBuilder.js";

const LinkButton = (data?: Partial<URLButton>) => new LinkButtonBuilder(data);

describe("Using builder methods", () => {
  it("Should return JSON base", () =>
    expect(LinkButton().toJSON()).toStrictEqual({
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom url", () =>
    expect(LinkButton().setURL("https://discord.com").toJSON()).toStrictEqual({
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
      url: "https://discord.com",
    }));

  it("Should return JSON base with disabled option enabled", () =>
    expect(LinkButton().setDisabled().toJSON()).toStrictEqual({
      disabled: true,
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom label", () =>
    expect(LinkButton().setLabel("Link Button").toJSON()).toStrictEqual({
      label: "Link Button",
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode string emoji", () =>
    expect(LinkButton().setEmoji("🔗").toJSON()).toStrictEqual({
      emoji: {
        name: "🔗",
      },
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom unicode object emoji", () =>
    expect(
      LinkButton()
        .setEmoji({
          name: "🔗",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        name: "🔗",
      },
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom string emoji", () =>
    expect(LinkButton().setEmoji("<:OWL:1303797827574698095>").toJSON()).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with custom object emoji", () =>
    expect(
      LinkButton()
        .setEmoji({
          id: "1303797827574698095",
          name: "OWL",
        })
        .toJSON(),
    ).toStrictEqual({
      emoji: {
        id: "1303797827574698095",
        name: "OWL",
      },
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared label", () =>
    expect(LinkButton().setLabel("Link Button").clear("label").toJSON()).toStrictEqual({
      label: undefined,
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared label", () =>
    expect(LinkButton().setLabel("Link Button").clear("label", true).toJSON()).toStrictEqual({
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with cleared emoji", () =>
    expect(LinkButton().setEmoji("🔗").clear("emoji").toJSON()).toStrictEqual({
      emoji: undefined,
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Should return JSON base with force cleared emoji", () =>
    expect(LinkButton().setEmoji("🔗").clear("emoji", true).toJSON()).toStrictEqual({
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));
});

describe("Using external data", () => {
  it("Receive premium button style but should return link button style", () =>
    expect(
      LinkButton({
        // @ts-expect-error
        style: ButtonStyles.PREMIUM,
      }).toJSON(),
    ).toStrictEqual({
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));

  it("Receive action row type but should return button type", () =>
    expect(
      LinkButton({
        // @ts-expect-error
        type: ComponentTypes.ACTION_ROW,
      }).toJSON(),
    ).toStrictEqual({
      style: ButtonStyles.LINK,
      type: ComponentTypes.BUTTON,
    }));
});
