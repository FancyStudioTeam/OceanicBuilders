import type {
	EmbedAuthorOptions,
	EmbedField,
	EmbedFooterOptions,
	EmbedOptions,
} from "oceanic.js";

export class EmbedBuilder {
	setAuthor(author: EmbedAuthorOptions): this;
	setColor(color: number): this;
	setDescription(description: string): this;
	addField(field: EmbedField): this;
	addFields(fields: EmbedField[]): this;
	setFooter(footer: EmbedFooterOptions): this;
	setImage(image: string): this;
	setThumbnail(thumbnail: string): this;
	setTimestamp(): this;
	setTitle(title: string): this;
	setURL(url: string): this;
	toJSON(): EmbedOptions;
	toJSONArray(): EmbedOptions[];
}
