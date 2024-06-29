# 📚 Class: `Button`

## ⚙️ Constructors

- **new Button(`button?`: [`Partial<ButtonComponent>`][ButtonComponentURL])**: **[`Button`](Button.md)**
  > Creates a new button from the API data.

## 🔧 Methods

- **setCustomID(`customID`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the custom button ID.
- **setDisabled(`disabled`: [`boolean`][BooleanURL])**: **[`this`][ThisURL]**
  > Sets whether the button should be disabled.
- **setEmoji(`emoji`: [`NullablePartialEmoji`][NullablePartialEmojiURL])**: **[`this`][ThisURL]**
  > Sets the button emoji.
  > **⚠️ The `name` property of type [`NullablePartialEmoji`][NullablePartialEmojiURL] is required.**
- **setLabel(`label`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the button label.
- **setSkuID(`skuID`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the button sku ID.
- **setStyle(`style`: [`ButtonStyles`][ButtonStylesURL])**: **[`this`][ThisURL]**
  > Sets the button style.
- **setURL(`url`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the button URL.
- **toJSON(`inArray?`: [`boolean`][BooleanURL])**: [`ButtonComponent`][ButtonComponentURL] | [`ButtonComponent[]`][ButtonComponentURL]
  > Returns a JSON compatible with the API.
  > **🛟 You can wrap the JSON inside an array by setting the `inArray` parameter to `true`.**

[BooleanURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[ButtonComponentURL]: https://docs.oceanic.ws/dev/types/Types_Channels.ButtonComponent.html
[ButtonStylesURL]: https://docs.oceanic.ws/v1.11.0/enums/Constants.ButtonStyles.html
[NullablePartialEmojiURL]: https://docs.oceanic.ws/dev/interfaces/Types_Guilds.NullablePartialEmoji.html
[StringURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[ThisURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/This
