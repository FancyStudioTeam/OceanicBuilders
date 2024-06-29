# 📚 Class: Button

## 📜 Table of Contents

### Constructors

- [constructor](#custom_id)

### Methods

- setCustomID

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

### Method: setEmoji {#my-explicit-id}

- **setEmoji(`emoji`)**: [`this`][ThisURL]

#### Parameters

> [!WARNING]
> The `name` property is required

| Name    | Type                                              | Description      |
| ------- | ------------------------------------------------- | ---------------- |
| `emoji` | [`NullablePartialEmoji`][NullablePartialEmojiURL] | The button emoji |

[ThisURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/This
[StringURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[BooleanURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[ButtonComponentURL]: https://docs.oceanic.ws/dev/types/Types_Channels.ButtonComponent.html
[NullablePartialEmojiURL]: https://docs.oceanic.ws/dev/interfaces/Types_Guilds.NullablePartialEmoji.html
