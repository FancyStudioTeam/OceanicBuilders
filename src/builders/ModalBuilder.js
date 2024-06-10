// @ts-check

const { ComponentTypes } = require("oceanic.js");

module.exports = class ModalBuilder {
  #json;

  /**
   * @param {import("oceanic.js").ModalData?} modal
   */
  constructor(modal) {
    this.#json = modal ?? {
      components: [],
      customID: "",
      title: "",
    };
  }

  /**
   * The modal custom ID
   * @param {string} id
   * @returns {this}
   */
  setCustomID(id) {
    this.#json.customID = id;
    return this;
  }

  /**
   * The modal title
   * @param {string} title
   * @returns {this}
   */
  setTitle(title) {
    this.#json.title = title;
    return this;
  }

  /**
   * The modal components
   * @param {import("..").TextInputBuilder[]} components
   * @returns {this}
   */
  addComponents(components) {
    for (const component of components) {
      this.#json.components.push({
        type: ComponentTypes.ACTION_ROW,
        components: [component.toJSON()],
      });
    }

    return this;
  }

  /**
   * The modal in JSON
   * @returns {import("oceanic.js").ModalData}
   */
  toJSON() {
    return this.#json;
  }
};
