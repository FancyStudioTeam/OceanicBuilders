// @ts-check

module.exports = class EmbedBuilder {
  #json;

  /**
   *
   * @param {import("oceanic.js").EmbedOptions?} embed
   */
  constructor(embed) {
    this.#json = embed ?? {};
  }

  /**
   * The embed author
   * @param {import("oceanic.js").EmbedAuthorOptions} author
   * @returns {this}
   */
  setAuthor(author) {
    this.#json.author = {
      iconURL: author.iconURL ?? "",
      name: author.name ?? "",
      url: author.url,
    };
    return this;
  }

  /**
   * The embed color
   * @param {number} color
   * @returns {this}
   */
  setColor(color) {
    this.#json.color = color;
    return this;
  }

  /**
   * The embed description
   * @param {string} description
   * @returns {this}
   */
  setDescription(description) {
    this.#json.description = description;
    return this;
  }

  /**
   * Adds one field
   * @param {import("oceanic.js").EmbedField} field
   * @returns {this}
   */
  addField(field) {
    this.#json.fields = this.#json.fields?.length ? [...this.#json.fields, field] : [field];
    return this;
  }

  /**
   * Adds multiple fields
   * @param {import("oceanic.js").EmbedField[]} fields
   * @returns {this}
   */
  addFields(fields) {
    for (const field of fields) {
      this.addField(field);
    }

    return this;
  }

  /**
   * The embed footer
   * @param {import("oceanic.js").EmbedFooterOptions} footer
   * @returns {this}
   */
  setFooter(footer) {
    this.#json.footer = {
      iconURL: footer.iconURL ?? "",
      text: footer.text ?? "",
    };
    return this;
  }

  /**
   * The embed image
   * @param {string} image
   * @returns {this}
   */
  setImage(image) {
    this.#json.image = {
      url: image,
    };
    return this;
  }

  /**
   * The embed thumbnail
   * @param {string} thumbnail
   * @returns {this}
   */
  setThumbnail(thumbnail) {
    this.#json.thumbnail = {
      url: thumbnail,
    };
    return this;
  }

  /**
   * The embed timestamp
   * @returns {this}
   */
  setTimestamp() {
    this.#json.timestamp = new Date().toISOString();
    return this;
  }

  /**
   * The embed title
   * @param {string} title
   * @returns {this}
   */
  setTitle(title) {
    this.#json.title = title;
    return this;
  }

  /**
   * The embed url
   * @param {string} url
   * @returns {this}
   */
  setURL(url) {
    this.#json.url = url;
    return this;
  }

  /**
   * The embed in JSON
   * @returns {import("oceanic.js").EmbedOptions}
   */
  toJSON() {
    return this.#json;
  }

  /**
   * The embed in an array of JSON
   * @returns {import("oceanic.js").EmbedOptions[]}
   */
  toJSONArray() {
    return [this.#json];
  }
};
