# 📚 Class: `Attachment`

## ⚙️ Constructors

- **new Attachment()**
  > Creates an attachment.

## 🔧 Methods

- **setContent(`content`: [`Buffer`][BufferURL])**: **[`this`][ThisURL]**
  > Sets the attachment content.
- **setIndex(`index`: [`number`][NumberURL])**: **[`this`][ThisURL]**
  > Sets the attachment index.
- **setName(`name`: [`string`][StringURL])**: **[`this`][ThisURL]**
  > Sets the attachment name.
- **toJSON(`inArray?`: [`boolean`][BooleanURL])**: **[`File`][FileURL] | [`File[]`][FileURL]**
  > Returns a JSON compatible with the API.<br>**(🛟) You can wrap the JSON inside an array by setting the `inArray` parameter to `true`.**

[BooleanURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[BufferURL]: https://nodejs.org/api/buffer.html#class-buffer
[FileURL]: https://docs.oceanic.ws/v1.11.0/interfaces/Types_RequestHandler.File.html
[NumberURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[StringURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[ThisURL]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
