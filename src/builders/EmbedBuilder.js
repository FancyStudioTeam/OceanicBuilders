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
   *
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
   *
   * @param {number} color
   * @returns {this}
   */

  setColor(color) {
    this.#json.color = color;

    return this;
  }

  /**
   *
   * @param {string} description
   * @returns {this}
   */

  setDescription(description) {
    this.#json.description = description;

    return this;
  }

  /**
   *
   * @param {import("oceanic.js").EmbedField} field
   * @returns {this}
   */

  addField(field) {
    this.#json.fields = this.#json.fields?.length ? [...this.#json.fields, field] : [field];

    return this;
  }

  /**
   *
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
   *
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
   *
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
   *
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
   *
   * @returns {this}
   */

  setTimestamp() {
    this.#json.timestamp = new Date().toISOString();

    return this;
  }

  /**
   *
   * @param {string} title
   * @returns {this}
   */

  setTitle(title) {
    this.#json.title = title;

    return this;
  }

  /**
   *
   * @param {string} url
   * @returns {this}
   */

  setURL(url) {
    this.#json.url = url;

    return this;
  }

  /**
   *
   * @returns {import("oceanic.js").EmbedOptions}
   */

  toJSON() {
    return this.#json;
  }

  /**
   *
   * @returns {import("oceanic.js").EmbedOptions[]}
   */

  toJSONArray() {
    return [this.#json];
  }
};
