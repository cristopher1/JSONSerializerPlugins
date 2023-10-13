<h1 align="center">Welcome to @cljimenez/json-serializer-base-serializers 👋</h1>
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

> A set of serializers used by the npm package @cljimenez/json-serializer-core.

### 🏠 [Homepage](https://github.com/cristopher1/json-serializer-plugins#readme)

### [Index](#index)

- [Install](#install)
- [Prerequisites](#prerequisites)
- [What is a Serializer?](#what-is-a-serializer?)
  - [About methods](#about-method)
- [How to use?](#how-to-use?)
  - [1. Install base serializers using the installer object (baseSerializerInstaller)](#using-installer)
  - [2. Add Serializers separately](#add-serializers-separately)
- [Author](#author)
- [Contributing](#contributing)
- [License](#license)

## <a id="install"></a> Install

```sh
npm install json-serializer-base-serializer
```

## <a id="prerequisites"></a> Prerequisites

`json-serializer-base-serializers` is used for the `json-serializer-core` package. It is necessary to install both packages.

```script
npm install json-serializer-core json-serializer-base-serializers
```

## <a id="what-is-a-serializer?"></a> What is a Serializer?

A Serializer is an object that contains three methods:

- **getSerializerType(void)=>string**
- **serialize(unserializedData: any)=>object**
- **parse(serializedData: object)=>any**

The `json-serializer-base-serializers` includes five serializers:

- **BigIntSerializer**: Serializes and unserializes `big integer`.
- **DateSerializer**: Serializes and unserializes `dates`.
- **FunctionSerializer**: Serializes and unserializes `functions`.
- **MapSerializer**: Serializes and unserializes `maps`.
- **SetSerializer**: Serializes and unserializes `sets`.

### <a id="about-method"></a> About methods

**`getSerializerType(void)=>string`**: Returns a string that represents the type of Serializer.

**Example for commonjs:**

```js
const baseSerializers = require('json-serializer-base-serializers')

const BigIntSerializer = baseSerializers.BigIntSerializer
const DateSerializer = baseSerializers.DateSerializer
const FunctionSerializer = baseSerializers.FunctionSerializer
const MapSerializer = baseSerializers.MapSerializer
const SetSerializer = baseSerializers.SetSerializer

const bigIntSerializer = new BigIntSerializer()
const dateSerializer = new DateSerializer()
const functionSerializer = new FunctionSerializer()
const mapSerializer = new MapSerializer()
const setSerializer = new SetSerializer()

// returns 'bigint'
bigIntSerializer.getSerializerType()

// returns 'Date'
dateSerializer.getSerializerType()

// returns 'function'
functionSerializer.getSerializerType()

// returns 'Map'
mapSerializer.getSerializerType()

// returns 'Set'
setSerializer.getSerializerType()
```

**Example for ES Modules:**

```js
import {
  BigIntSerializer,
  DateSerializer,
  FunctionSerializer,
  MapSerializer,
  SetSerializer,
} from 'json-serializer-base-serializers'

const bigIntSerializer = new BigIntSerializer()
const dateSerializer = new DateSerializer()
const functionSerializer = new FunctionSerializer()
const mapSerializer = new MapSerializer()
const setSerializer = new SetSerializer()

// returns 'bigint'
bigIntSerializer.getSerializerType()

// returns 'Date'
dateSerializer.getSerializerType()

// returns 'function'
functionSerializer.getSerializerType()

// returns 'Map'
mapSerializer.getSerializerType()

// returns 'Set'
setSerializer.getSerializerType()
```

**`serialize(unserializedData: any)=>object`**. Serializes data, returns an object using the format `{value: serializedData}`.

**Example for commonjs**:

```js
const baseSerializers = require('json-serializer-base-serializers')

const FunctionSerializer = baseSerializers.FunctionSerializer

const functionSerializer = new FunctionSerializer()

// returns: { value: '(() => {\n        "string"\n      })' }
const serializedData = functionSerializer.serialize(() => {
  'string'
})
```

**Example for ES Modules**:

```js
import { FunctionSerializer } from 'json-serializer-base-serializers'

const functionSerializer = new FunctionSerializer()

// returns: { value: '(() => {\n        "string"\n      })' }
const serializedData = functionSerializer.serialize(() => {
  'string'
})
```

**`parse(serializedData: object)=>any`**. Unserializes data, returns the value formated by serialize method.

**Example for commonjs**:

```js
const baseSerializers = require('json-serializer-base-serializers')

const FunctionSerializer = baseSerializers.FunctionSerializer

const functionSerializer = new FunctionSerializer()

const serializedData = functionSerializer.serialize(
  (arg1, arg2) => `${arg1} and ${arg2}`,
)

// { value: '((arg1, arg2) => `${arg1} and ${arg2}`)' }
console.log(serializedData)

const unserializedData = functionSerializer.parse(serializedData)

// string1 and string2
console.log(unserializedData('string1', 'string2'))
```

**Example for ES Modules**:

```js
import { FunctionSerializer } from 'json-serializer-base-serializers'

const functionSerializer = new FunctionSerializer()

const serializedData = functionSerializer.serialize(
  (arg1, arg2) => `${arg1} and ${arg2}`,
)

// { value: '((arg1, arg2) => `${arg1} and ${arg2}`)' }
console.log(serializedData)

const unserializedData = functionSerializer.parse(serializedData)

// string1 and string2
console.log(unserializedData('string1', 'string2'))
```

## <a id="how-to-use?"></a> How to use?

### <a id="using-installer"></a> 1. Install base serializers using the installer object (baseSerializerInstaller):

**Note**: The FunctionSerializer is not included by default in the installer, if you want include it, you must use the **installOptions** parameter in the **jsonSerializer.installSerializersAndRefreshJsonSerializer** method.

```js
const installOptions = { includeFunctionSerializer: true }
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializers,
  installOptions,
)
```

**Complete example for commonjs:**

```js
// Import the packages.
const core = require('json-serializer-core')
const baseSerializers = require('json-serializer-base-serializers')

// Obtain the installer object.
const installer = baseSerializers.baseSerializersInstaller

// Obtain the JsonSerializer object.
const jsonSerializer = core.JsonSerializerFactory.createJsonSerializer()

// Install the serializers without FunctionSerializer.
jsonSerializer.installSerializersAndRefreshJsonSerializer(installer)

// If you want install the FunctionSerializer, you can use:
jsonSerializer.installSerializersAndRefreshJsonSerializer(installer, {
  includeFunctionSerializer: true,
})

jsonSerializer.serialize(/*Replace by the unserialized data supports to the installed Serializers*/)

jsonSerializer.parse(/*Replace by the serialized data serializes by jsonSerializer.serialize method*/)
```

**Complete example for ES Modules:**

```js
// Import the JsonSerializerFactory class.
import { JsonSerializerFactory } from 'json-serializer-core'
// Import the baseSerializerInstaller object.
import { baseSerializersInstaller } from 'json-serializer-base-serializers'

// Obtain the JsonSerializer object.
const jsonSerializer = JsonSerializerFactory.createJsonSerializer()

// Install the serializers without FunctionSerializer.
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializersInstaller,
)

// If you want install the FunctionSerializer, you can use:
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializersInstaller,
  { includeFunctionSerializer: true },
)

jsonSerializer.serialize(/*Replace by the unserialized data supports to the installed Serializers*/)

jsonSerializer.parse(/*Replace by the serialized data serializes by jsonSerializer.serialize method*/)
```

### <a id="add-serializers-separately"></a> 2. Add Serializers separately

**Complete example for commonjs:**

```js
// Import the packages.
const core = require('json-serializer-core')
const baseSerializers = require('json-serializer-base-serializers')

// Obtain the JsonSerializer object.
const jsonSerializer = core.JsonSerializerFactory.createJsonSerializer()

// Import Serializers to add.
const BigIntSerializer = baseSerializers.BigIntSerializer
const FunctionSerializer = baseSerializers.FunctionSerializer
const MapSerializer = baseSerializers.MapSerializer

// Create the instances.
const bigIntSerializer = new BigIntSerializer()
const functionSerializer = new FunctionSerializer()
const mapSerializer = new MapSerializer()

// Add Serializers.
jsonSerializer.addSerializerAndRefreshJsonSerializer(bigIntSerializer)
jsonSerializer.addSerializerAndRefreshJsonSerializer(functionSerializer)
jsonSerializer.addSerializerAndRefreshJsonSerializer(mapSerializer)

jsonSerializer.serialize(/*Insert unserialized data supports to the installed Serializers*/)

jsonSerializer.parse(/*Insert serialized data serializes by jsonSerializer.serialize method*/)
```

**Complete example for ES Modules:**

```js
// Import the JsonSerializerFactory class.
import { JsonSerializerFactory } from 'json-serializer-core'
// Import Serializers to add.
import {
  BigIntSerializer,
  FunctionSerializer,
  MapSerializer,
} from 'json-serializer-base-serializers'

// Obtain the JsonSerializer object.
const jsonSerializer = JsonSerializerFactory.createJsonSerializer()

// Create the instances.
const bigIntSerializer = new BigIntSerializer()
const functionSerializer = new FunctionSerializer()
const mapSerializer = new MapSerializer()

// Add Serializers.
jsonSerializer.addSerializerAndRefreshJsonSerializer(bigIntSerializer)
jsonSerializer.addSerializerAndRefreshJsonSerializer(functionSerializer)
jsonSerializer.addSerializerAndRefreshJsonSerializer(mapSerializer)

jsonSerializer.serialize(/*Insert unserialized data supports to the installed Serializers*/)

jsonSerializer.parse(/*Insert serialized data serializes by jsonSerializer.serialize method*/)
```

## <a id="author"></a> Author

👤 **Cristopher Jiménez**

- Github: [@cristopher1](https://github.com/cristopher1)

## <a id="contributing"></a> 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/cristopher1/json-serializer-base-serializers/issues).

## <a id="license"></a> 📝 License

Copyright © 2023 [Cristopher Jiménez](https://github.com/cristopher1).<br />
This project is [MIT](https://github.com/cristopher1/json-serializer-plugins/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
