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
- [toJSONArray](#method-tojsonarray) (deprecated)

## ⚙️ Constructors

### Constructor: Button

- **new Button(`button?`)**: [`Button`](Button.md)

#### Parameters

| Name     | Type                                             | Description     |
| -------- | ------------------------------------------------ | --------------- |
| `button` | [`Partial<ButtonComponent>`][ButtonComponentURL] | The button data |

## 🔧 Methods

### Method: setCustomID

- **setCustomID(`customID`)**: [`this`][ThisURL]

#### Parameters

| Name       | Type                  | Description          |
| ---------- | --------------------- | -------------------- |
| `customID` | [`string`][StringURL] | The button custom ID |

---

### Method: setDisabled

- **setDisabled(`disabled`)**: [`this`][ThisURL]

#### Parameters

| Name       | Type                    | Description                      |
| ---------- | ----------------------- | -------------------------------- |
| `disabled` | [`boolean`][BooleanURL] | If the button should be disabled |

---

### Method: setEmoji

- **setEmoji(`emoji`)**: [`this`][ThisURL]

#### Parameters

> [!WARNING]
> The `name` property of type [`NullablePartialEmoji`][NullablePartialEmojiURL] is required.

| Name    | Type                                              | Description      |
| ------- | ------------------------------------------------- | ---------------- |
| `emoji` | [`NullablePartialEmoji`][NullablePartialEmojiURL] | The button emoji |

---

### Method: setLabel

- **setLabel(`label`)**: [`this`][ThisURL]

#### Parameters

| Name    | Type                  | Description      |
| ------- | --------------------- | ---------------- |
| `label` | [`string`][StringURL] | The button label |

---

### Method: setSkuID

- **setSkuID(`skuID`)**: [`this`][ThisURL]

#### Parameters

| Name    | Type                  | Description       |
| ------- | --------------------- | ----------------- |
| `skuID` | [`string`][StringURL] | The button sku ID |

---

### Method: setStyle

- **setStyle(`style`)**: [`this`][ThisURL]

#### Parameters

| Name    | Type                              | Description      |
| ------- | --------------------------------- | ---------------- |
| `style` | [`ButtonStyles`][ButtonStylesURL] | The button style |

---

### Method: setURL

- **setURL(`url`)**: [`this`][ThisURL]

#### Parameters

| Name  | Type                  | Description    |
| ----- | --------------------- | -------------- |
| `url` | [`string`][StringURL] | The button URL |

---

### Method: toJSON

- **toJSON(`inArray?`)**: [`ButtonComponent`][ButtonComponentURL] | [`ButtonComponent[]`][ButtonComponentURL]

#### Parameters

| Name      | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| `inArray` | `boolean` | If the JSON should be inside an array |

---

### Method: toJSONArray

- **toJSONArray()**: [`ButtonComponent[]`][ButtonComponentURL]

> [!WARNING]
> (DEPRECATED) Use `toJSON(true)` instead.

[ThisURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/This
[StringURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[BooleanURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[ButtonComponentURL]: https://docs.oceanic.ws/dev/types/Types_Channels.ButtonComponent.html
[NullablePartialEmojiURL]: https://docs.oceanic.ws/dev/interfaces/Types_Guilds.NullablePartialEmoji.html
[ButtonStylesURL]: https://docs.oceanic.ws/v1.11.0/enums/Constants.ButtonStyles.html
