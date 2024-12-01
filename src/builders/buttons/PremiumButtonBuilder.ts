import { ButtonStyles, type PremiumButton } from "oceanic.js";
import { ButtonBaseBuilder } from "./ButtonBaseBuilder.js";

export class PremiumButtonBuilder extends ButtonBaseBuilder<PremiumButton> {
  constructor(button?: Partial<PremiumButton>) {
    super({
      ...button,
      style: ButtonStyles.PREMIUM,
    });
  }

  setSkuID(skuID: string) {
    this.data.skuID = skuID;

    return this;
  }
}
