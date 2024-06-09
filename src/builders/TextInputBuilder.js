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
     * 
     * @param {string} id 
     * @returns {this} 
     */

    setCustomID(id) {
        this.#json.customID = id;
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
     * @param {number} maxLength 
     * @returns {this} 
     */

    setMaxLength(maxLength) {
        this.#json.maxLength = maxLength;
        return this;
    }

    /**
     * 
     * @param {number} minLength 
     * @returns {this} 
     */

    setMinLength(minLength) {
        this.#json.minLength = minLength;
        return this;
    }

    /**
     * 
     * @param {string} placeholder 
     * @returns {this} 
     */

    setPlaceholder(placeholder) {
        this.#json.placeholder = placeholder;
        return this;
    }

    /**
     * 
     * @param {boolean} required 
     * @returns {this} 
     */

    setRequired(required) {
        this.#json.required = required;
        return this;
    }

    /**
     * 
     * @param {TextInputStyles} style 
     * @returns {this} 
     */

    setStyle(style) {
        this.#json.style = style;
        return this;
    }

    /**
     * 
     * @param {string} value 
     * @returns {this} 
     */

    setValue(value) {
        this.#json.value = value;
        return this;
    }

    /**
     * 
     * @returns {import("oceanic.js").TextInput} 
     */

    toJSON() {
        return this.#json;
    }
};
