// @ts-check

module.exports = class AttachmentBuilder {
  #json;

  constructor() {
    this.#json = {
      contents: Buffer.alloc(0),
      index: 0,
      name: "",
    };
  }

  /**
   * The attachment content
   * @param {Buffer} content
   * @returns {this}
   */
  setContent(content) {
    this.#json.contents = content;
    return this;
  }

  /**
   * The attachment name
   * @param {string} name
   * @returns {this}
   */
  setName(name) {
    this.#json.name = name;
    return this;
  }

  /**
   * The attachment index
   * @param {number} index
   * @returns {this}
   */
  setIndex(index) {
    this.#json.index = index;
    return this;
  }

  /**
   * The attachment in JSON
   * @returns {import("oceanic.js").File}
   */
  toJSON() {
    return this.#json;
  }

  /**
   * The attachment in an array of JSON
   * @returns {import("oceanic.js").File[]}
   */
  toJSONArray() {
    return [this.#json];
  }
};
