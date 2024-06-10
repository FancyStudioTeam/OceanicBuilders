// @ts-check

const { ComponentTypes } = require("oceanic.js");

module.exports = class SelectMenuBuilder {
  #json;

  /**
   * @param {import("oceanic.js").SelectMenuComponent?} selectMenu
   */
  constructor(selectMenu) {
    this.#json = selectMenu ?? {
      customID: "",
      options: [],
      type: ComponentTypes.STRING_SELECT,
    };
  }

  /**
   * The select menu custom ID
   * @param {string} id
   * @returns {this}
   */
  setCustomID(id) {
    this.#json.customID = id;
    return this;
  }

  /**
   * If the select menu should be disabled
   * @param {boolean} disabled
   * @returns {this}
   */
  setDisabled(disabled) {
    this.#json.disabled = disabled;
    return this;
  }

  /**
   * The select menu options
   * @param {import("oceanic.js").SelectOption} options
   * @returns {this}
   */
  addOptions(options) {
    if (this.#json.type === ComponentTypes.STRING_SELECT) {
      this.#json.options = this.#json.options.concat(options);
    } else {
      throw new Error(`Selects without type "${ComponentTypes.STRING_SELECT}" do not support options`);
    }

    return this;
  }

  /**
   * The select menu placeholder
   * @param {string} placeholder
   * @returns {this}
   */
  setPlaceholder(placeholder) {
    this.#json.placeholder = placeholder;
    return this;
  }

  /**
   * The select menu minimum values
   * @param {number} minValues
   * @returns {this}
   */
  setMinValues(minValues) {
    this.#json.minValues = minValues;
    return this;
  }

  /**
   * The select menu maximum values
   * @param {number} maxValues
   * @returns {this}
   */
  setMaxValues(maxValues) {
    this.#json.maxValues = maxValues;
    return this;
  }

  /**
   * The select menu type
   * @param {import("..").ValidSelectMenuTypes} type
   * @returns {this}
   */
  setType(type) {
    this.#json.type = type;
    return this;
  }

  /**
   * The select menu in JSON
   * @returns {import("oceanic.js").SelectMenuComponent}
   */
  toJSON() {
    return this.#json;
  }
};
