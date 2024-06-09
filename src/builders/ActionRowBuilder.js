// @ts-check

const { ComponentTypes } = require("oceanic.js");

module.exports = class ActionRowBuilder {
  #json;

  constructor() {
    /**
     *
     * @type {import("oceanic.js").MessageActionRow}
     * @private
     */
    this.#json = {
      /**
       * @type {import("oceanic.js").MessageComponent[]}
       */
      components: [],
      /**
       * @type {ComponentTypes.ACTION_ROW}
       */
      type: ComponentTypes.ACTION_ROW,
    };
  }

  /**
   *
   * @param {import("..").ButtonBuilder[]} components
   * @returns {this}
   */
  addComponents(components) {
    for (const component of components) {
      this.#json.components.push(component.toJSON());
    }

    return this;
  }

  /**
   *
   * @returns {import("oceanic.js").MessageActionRow}
   */
  toJSON() {
    return this.#json;
  }

  /**
   *
   * @returns {import("oceanic.js").MessageActionRow[]}
   */
  toJSONArray() {
    return [this.#json];
  }
};
