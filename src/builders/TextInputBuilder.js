// @ts-check

const { ComponentTypes, TextInputStyles } = require("oceanic.js");

module.exports = class TextInputBuilder {
  #json;

  /**
   *
   * @param {import("oceanic.js").TextInput?} textInput
   */
  constructor(textInput) {
    this.#json = textInput ?? {
      customID: "",
      label: "",
      style: TextInputStyles.SHORT,
      type: ComponentTypes.TEXT_INPUT,
    };
  }

  /**
   * The text input custom ID
   * @param {string} id
   * @returns {this}
   */
  setCustomID(id) {
    this.#json.customID = id;
    return this;
  }

  /**
   * The text input label
   * @param {string} label
   * @returns {this}
   */
  setLabel(label) {
    this.#json.label = label;
    return this;
  }

  /**
   * The text input maximun length
   * @param {number} maxLength
   * @returns {this}
   */
  setMaxLength(maxLength) {
    this.#json.maxLength = maxLength;
    return this;
  }

  /**
   * The text input minimun length
   * @param {number} minLength
   * @returns {this}
   */
  setMinLength(minLength) {
    this.#json.minLength = minLength;
    return this;
  }

  /**
   * The text input placeholder
   * @param {string} placeholder
   * @returns {this}
   */
  setPlaceholder(placeholder) {
    this.#json.placeholder = placeholder;
    return this;
  }

  /**
   * If the text input should be required
   * @param {boolean} required
   * @returns {this}
   */
  setRequired(required) {
    this.#json.required = required;
    return this;
  }

  /**
   * The text input style
   * @param {TextInputStyles} style
   * @returns {this}
   */
  setStyle(style) {
    this.#json.style = style;
    return this;
  }

  /**
   * The text input value
   * @param {string} value
   * @returns {this}
   */
  setValue(value) {
    this.#json.value = value;
    return this;
  }

  /**
   * The text input in JSON
   * @returns {import("oceanic.js").TextInput}
   */
  toJSON() {
    return this.#json;
  }
};
