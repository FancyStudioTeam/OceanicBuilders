// @ts-check

const { ButtonStyles, ComponentTypes } = require("oceanic.js");

module.exports = class ButtonBuilder {
  #json;

  /**
   *
   * @param {import("oceanic.js").ButtonComponent?} button
   */

  constructor(button) {
    this.#json = button ?? {
      customID: "",
      style: ButtonStyles.SECONDARY,
      type: ComponentTypes.BUTTON,
    };
  }

  /**
   * @param {string} id
   * @returns {this}
   */

  setCustomID(id) {
    if (this.#json.style !== ButtonStyles.LINK) {
      this.#json.customID = id;
    } else {
      throw new Error(`Buttons with style "${ButtonStyles.LINK}" do not support customIDs`);
    }

    return this;
  }

  /**
   *
   * @param {boolean} disabled
   * @returns
   */

  setDisabled(disabled) {
    this.#json.disabled = disabled;

    return this;
  }

  /**
   *
   * @param {import("oceanic.js").NullablePartialEmoji} emoji
   * @returns {this}
   */

  setEmoji(emoji) {
    this.#json.emoji = {
      id: emoji.id ?? "",
      name: emoji.name ?? "",
    };

    return this;
  }

  /**
   *
   * @param {string} label
   * @returns {this}
   */

  setLabel(label) {
    this.#json.label = label;

    return this;
  }

  /**
   *
   * @param {import("oceanic.js").ButtonStyles} style
   * @returns {this}
   */

  setStyle(style) {
    this.#json.style = style;

    return this;
  }

  /**
   *
   * @param {string} url
   * @returns {this}
   */

  setURL(url) {
    if (this.#json.type === ComponentTypes.BUTTON && this.#json.style === ButtonStyles.LINK) {
      this.#json.url = url;
    } else {
      throw new Error(`${this.constructor.name}.setURL() can only be used in URL buttons`);
    }
    return this;
  }

  /**
   *
   * @returns {import("oceanic.js").ButtonComponent[]}
   */

  toJSON() {
    return [this.#json];
  }
};
