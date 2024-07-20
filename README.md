<div align="center">

![Oceanic Builders Banner](assets/Banner.png)

[![Oceanic Builders Version][VersionBadgeURL]][OceanicBuildersNPMURL]
[![Oceanic Builders Downloads][DownloadsBadgeURL]][OceanicBuildersNPMURL]
[![Oceanic Builders Stars][StarsBadgeURL]][OceanicBuildersNPMURL]
[![Oceanic Builders Support][SupportBadgeURL]][SupportServerURL]

</div>

---

# 🌊 Oceanic Builders (Unofficial)

## ✨ Features

- ✅ Easy to use
- ✅ CJS and ESM support
- ✅ Support with objects and builders

## 📦 Installation

```bash
npm install oceanic-builders
```

## 📚 Documentation

You can see the complete documentation in our [GitHub repository][DocumentationFolderURL].

## 🛟 Support

If you need help or have any questions or issues, feel free to let us know on our [support server][SupportServerURL].

## 🚀 Basic Example

```js
import { ActionRow, Button } from "oceanic-builders";

const actionRow = new ActionRow()
  .addComponents([
    new Button().setCustomID("button").setLabel("Click me!").setStyle(2),
  ])
  .toJSON();

console.log(actionRow);
```

You can also see our [`example.ts`][ExamplesFileURL] file to see all the examples of all the components.

## ℹ️ Information

This project is made by a user of the Oceanic community. We are not affiliated with Oceanic.

You may also be interested to see the [original and official Oceanic Builders][OriginalOceanicBuildersURL].

## 📄 License

This project is licensed under the [MIT License][MITLicenseURL].

[DocumentationFolderURL]: https://github.com/FancyStudioTeam/OceanicBuilders/tree/main/docs/builders
[DownloadsBadgeURL]: https://img.shields.io/npm/dt/oceanic-builders?style=for-the-badge&color=2a4f99&label=Downloads&logo=npm&logoColor=white
[ExamplesFileURL]: https://github.com/FancyStudioTeam/OceanicBuilders/blob/main/example.ts
[MITLicenseURL]: https://opensource.org/license/mit
[OceanicBuildersNPMURL]: https://www.npmjs.com/package/oceanic-builders
[OriginalOceanicBuildersURL]: https://www.npmjs.com/package/@oceanicjs/builders
[StarsBadgeURL]: https://img.shields.io/github/stars/FancyStudioTeam/OceanicBuilders?style=for-the-badge&color=2a4f99&label=Stars&logo=github&logoColor=white
[SupportBadgeURL]: https://img.shields.io/badge/Support-Support?style=for-the-badge&color=2a4f99&label=Discord&logo=discord&logoColor=white
[SupportServerURL]: https://discord.gg/gud55BjNFC
[VersionBadgeURL]: https://img.shields.io/npm/v/oceanic-builders?style=for-the-badge&color=2a4f99&label=Version&logo=npm&logoColor=white
