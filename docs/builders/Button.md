# 📚 Class: `Button`

## 📜 Table of Contents

### Constructors

- [constructor](#constructor-button)

### Methods

- [setCustomID](#method-setcustomid)
- [setDisabled](#method-setdisabled)
- [setEmoji](#method-setemoji)
- [setLabel](#method-setlabel)
- [setSkuID](#method-setskuid)
- [setStyle](#method-setstyle)
- [setURL](#method-seturl)
- [toJSON](#method-tojson)

## ⚙️ Constructors

### Constructor: Button

- **new Button(`button?`: [`Partial<ButtonComponent>`][ButtonComponentURL])**: **[`Button`](Button.md)**
  > Creates a new button from the API data.

## 🔧 Methods

### Method: setCustomID

- **setCustomID(`customID`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the custom button ID.

### Method: setDisabled

- **setDisabled(`disabled`: [`boolean`][BooleanURL])**: **[`this`][ThisURL]**
  > Sets whether the button should be disabled.

### Method: setEmoji

- **setEmoji(`emoji`: [`NullablePartialEmoji`][NullablePartialEmojiURL])**: **[`this`][ThisURL]**
  > Sets the button emoji.

> [!WARNING]
> The `name` property of type [`NullablePartialEmoji`][NullablePartialEmojiURL] is required.

### Method: setLabel

- **setLabel(`label`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the button label.

### Method: setSkuID

- **setSkuID(`skuID`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the button sku ID.

### Method: setStyle

- **setStyle(`style`: [`ButtonStyles`][ButtonStylesURL])**: **[`this`][ThisURL]**
  > Sets the button style.

### Method: setURL

- **setURL(`url`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the button URL.

### Method: toJSON

- **toJSON(`inArray?`: [`boolean`][BooleanURL])**: [`ButtonComponent`][ButtonComponentURL] | [`ButtonComponent[]`][ButtonComponentURL]
  > Returns a JSON compatible with the API.

> [!TIP]
> You can wrap the JSON inside an array by setting the `inArray` parameter to `true`.

[BooleanURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[ButtonComponentURL]: https://docs.oceanic.ws/dev/types/Types_Channels.ButtonComponent.html
[ButtonStylesURL]: https://docs.oceanic.ws/v1.11.0/enums/Constants.ButtonStyles.html
[NullablePartialEmojiURL]: https://docs.oceanic.ws/dev/interfaces/Types_Guilds.NullablePartialEmoji.html
[StringURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[ThisURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/This
