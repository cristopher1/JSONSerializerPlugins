<h1 align="center">Welcome to json-serializer-base-serializers 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/cristopher1/json-serializer-plugins#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/cristopher1/json-serializer-plugins/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/cristopher1/json-serializer-plugins/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/cristopher1/json-serializer-base-serializers" />
  </a>
</p>

> A set of serializers used by the npm package json-serializer-core.

### 🏠 [Homepage](https://github.com/cristopher1/json-serializer-plugins#readme)

## Install

```sh
npm install json-serializer-base-serializer
```

## Prerequisites

`json-serializer-base-serializers` is used for the `json-serializer-core` package. It is necessary to install both packages.

```script
npm install json-serializer-core json-serializer-base-serializers
```

## Description

The `json-serializer-base-serializers` includes five serializers:

- **BigIntSerializer**: Serializes and unserializes `big integer`.
- **DateSerializer**: Serializes and unserializes `dates`.
- **FunctionSerializer**: Serializes and unserializes `functions`.
- **MapSerializer**: Serializes and unserializes `maps`.
- **SetSerializer**: Serializes and unserializes `sets`.

The FunctionSerializer is not included by default, if you want include that serializer, you must use the **installOptions** parameter in the **jsonSerializer.installSerializersAndRefreshJsonSerializer** method.

```js
const installOptions = { includeFunctionSerializer: true }
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializers,
  installOptions,
)
```

## How to use?

**for commonjs:**

```js
// to import the packages.
const core = require('json-serializer-core')
const baseSerializers = require('json-serializer-base-serializers')

// to obtain the installer object.
const installer = baseSerializers.baseSerializersInstaller

// to obtain the JsonSerializer object.
const jsonSerializer = core.JsonSerializerFactory.createJsonSerializer()

// to install the serializers without FunctionSerializer.
jsonSerializer.installSerializersAndRefreshJsonSerializer(installer)

// if you want install the FunctionSerializer, you can use:
jsonSerializer.installSerializersAndRefreshJsonSerializer(installer, {
  includeFunctionSerializer: true,
})
```

**for ES Modules:**

```js
// to import the JsonSerializerFactory class.
import { JsonSerializerFactory } from 'json-serializer-core'
// to import the baseSerializerInstaller object.
import { baseSerializersInstaller } from 'json-serializer-base-serializers'

// to obtain the JsonSerializer object.
const jsonSerializer = JsonSerializerFactory.createJsonSerializer()

// to install the serializers without FunctionSerializer.
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializersInstaller,
)

// if you want install the FunctionSerializer, you can use:
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializersInstaller,
  { includeFunctionSerializer: true },
)
```

## Author

👤 **Cristopher Jiménez**

- Github: [@cristopher1](https://github.com/cristopher1)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/cristopher1/json-serializer-base-serializers/issues). You can also take a look at the [contributing guide](https://github.com/cristopher1/json-serializer-base-serializers/blob/master/CONTRIBUTING.md).

## 📝 License

Copyright © 2023 [Cristopher Jiménez](https://github.com/cristopher1).<br />
This project is [MIT](https://github.com/cristopher1/json-serializer-plugins/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
