import { ButtonStyles, ComponentTypes, type PremiumButton as OceanicPremiumButton } from "oceanic.js";
import { describe, expect, it } from "vitest";
import { PremiumButtonBuilder } from "../PremiumButtonBuilder.js";

const PremiumButton = (data?: Partial<OceanicPremiumButton>) => new PremiumButtonBuilder(data);

describe("PremiumButtonBuilder", () => {
  describe("Using builder methods", () => {
    it("Should return JSON base", () =>
      expect(PremiumButton().toJSON()).toStrictEqual({
        style: ButtonStyles.PREMIUM,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with custom sku ID", () =>
      expect(PremiumButton().setSkuID("945029082314338407").toJSON()).toStrictEqual({
        skuID: "945029082314338407",
        style: ButtonStyles.PREMIUM,
        type: ComponentTypes.BUTTON,
      }));

    it("Should return JSON base with disabled option enabled", () =>
      expect(PremiumButton().setDisabled().toJSON()).toStrictEqual({
        disabled: true,
        style: ButtonStyles.PREMIUM,
        type: ComponentTypes.BUTTON,
      }));
  });

  describe("Using external data", () => {
    it("Receive link button style but should return premium button style", () =>
      expect(
        PremiumButton({
          // @ts-expect-error
          style: ButtonStyles.LINK,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.PREMIUM,
        type: ComponentTypes.BUTTON,
      }));

    it("Receive action row type but should return button type", () =>
      expect(
        PremiumButton({
          // @ts-expect-error
          type: ComponentTypes.ACTION_ROW,
        }).toJSON(),
      ).toStrictEqual({
        style: ButtonStyles.PREMIUM,
        type: ComponentTypes.BUTTON,
      }));
  });
});
