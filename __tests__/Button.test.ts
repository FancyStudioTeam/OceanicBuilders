import { ButtonStyles, ComponentTypes } from "oceanic.js";
import { describe, expect, test } from "vitest";
import { Button } from "../src";

describe("Valid", () => {
  describe("Arguments", () => {
    test("Returns an object with predefined or empty properties", () => {
      expect(new Button().toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
      });
      expect(
        new Button({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
      });
    });

    test("Returns an object with 'customID' property", () => {
      expect(new Button().setCustomID("button").toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
        customID: "button",
      });
      expect(
        new Button({
          customID: "button",
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        customID: "button",
      });
    });

    test("Returns an object with 'disabled' property", () => {
      expect(new Button().setDisabled(true).toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
        disabled: true,
      });
      expect(
        new Button({
          disabled: true,
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        disabled: true,
      });
    });

    test("Returns an object with 'emoji' property", () => {
      expect(
        new Button()
          .setEmoji({
            name: "🤖",
          })
          .toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        emoji: {
          name: "🤖",
        },
      });
      expect(
        new Button({
          emoji: {
            name: "🤖",
          },
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        emoji: {
          name: "🤖",
        },
      });

      expect(
        new Button()
          .setEmoji({
            name: "_",
            id: "1253332340344750121",
          })
          .toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        emoji: {
          name: "_",
          id: "1253332340344750121",
        },
      });
      expect(
        new Button({
          emoji: {
            name: "_",
            id: "1253332340344750121",
          },
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        emoji: {
          name: "_",
          id: "1253332340344750121",
        },
      });

      expect(
        new Button()
          .setEmoji({
            id: "1253332340344750121",
          })
          .toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        emoji: {
          id: "1253332340344750121",
        },
      });
      expect(
        new Button({
          emoji: {
            id: "1253332340344750121",
          },
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        emoji: {
          id: "1253332340344750121",
        },
      });
    });

    test("Returns an object with 'label' property", () => {
      expect(new Button().setLabel("Button").toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
        label: "Button",
      });
      expect(
        new Button({
          label: "Button",
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        label: "Button",
      });
    });

    test("Returns an object with 'skuID' property", () => {
      expect(new Button().setSkuID("1088510058284990888").toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
        skuID: "1088510058284990888",
      });
      expect(
        new Button({
          skuID: "1088510058284990888",
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        skuID: "1088510058284990888",
      });
    });

    test("Returns an object with 'style' property", () => {
      expect(new Button().setStyle(ButtonStyles.PRIMARY).toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
        style: ButtonStyles.PRIMARY,
      });
      expect(
        new Button({
          style: ButtonStyles.PRIMARY,
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        style: ButtonStyles.PRIMARY,
      });
    });

    test("Returns an object with 'url' property", () => {
      expect(new Button().setURL("https://discord.com").toJSON()).toStrictEqual({
        type: ComponentTypes.BUTTON,
        url: "https://discord.com",
      });
      expect(
        new Button({
          url: "https://discord.com",
        }).toJSON(),
      ).toStrictEqual({
        type: ComponentTypes.BUTTON,
        url: "https://discord.com",
      });
    });
  });
});

describe("Invalid", () => {
  describe("Arguments", () => {
    test("Checks for invalid arguments in 'customID' property", () => {
      // Min length
      expect(() => {
        new Button().setCustomID("");
      }).toThrowError();
      expect(() => {
        new Button({
          customID: "",
        });
      }).toThrowError();

      // Max length
      expect(() => {
        new Button().setCustomID("_".repeat(101));
      }).toThrowError();
      expect(() => {
        new Button({
          customID: "_".repeat(101),
        });
      }).toThrowError();

      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Button().setCustomID(1);
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          customID: 1,
        });
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'disabled' property", () => {
      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Button().setDisabled("true");
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          disabled: "true",
        });
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'emoji' property", () => {
      // Invalid emoji
      expect(() => {
        // @ts-expect-error
        new Button().setEmoji("🤖");
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          emoji: "🤖",
        });
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'label' property", () => {
      // Min length
      expect(() => {
        new Button().setLabel("");
      }).toThrowError();
      expect(() => {
        new Button({
          label: "",
        });
      }).toThrowError();

      // Max length
      expect(() => {
        new Button().setLabel("_".repeat(81));
      }).toThrowError();
      expect(() => {
        new Button({
          label: "_".repeat(81),
        });
      }).toThrowError();

      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Button().setLabel(1);
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          label: 1,
        });
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'skuID' property", () => {
      // Min length
      expect(() => {
        new Button().setSkuID("");
      }).toThrowError();
      expect(() => {
        new Button({
          skuID: "",
        });
      }).toThrowError();

      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Button().setSkuID(1);
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          skuID: 1,
        });
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'style' property", () => {
      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Button().setStyle("PRIMARY");
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          style: "PRIMARY",
        });
      }).toThrowError();

      // Not in range
      expect(() => {
        // @ts-expect-error
        new Button().setStyle(7);
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          style: 7,
        });
      }).toThrowError();
    });

    test("Checks for invalid arguments in 'url' property", () => {
      // Min length
      expect(() => {
        new Button().setURL("");
      }).toThrowError();
      expect(() => {
        new Button({
          url: "",
        });
      }).toThrowError();

      // Invalid type
      expect(() => {
        // @ts-expect-error
        new Button().setURL(1);
      }).toThrowError();
      expect(() => {
        new Button({
          // @ts-expect-error
          url: 1,
        });
      }).toThrowError();

      // Invalid URL
      expect(() => {
        new Button().setURL("hello");
      }).toThrowError();
      expect(() => {
        new Button({
          url: "hello",
        });
      }).toThrowError();
    });
  });
});
