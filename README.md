# [JSONSerializer base-serializers](#index)

A set of serializers used by the npm package json-serializer-core.

### <a id="index"></a>Index

- <a id="install"></a>[Install](#Install)
- <a id="use"></a> [How to use?](#How-to-use)

## Install

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
const installOptions = {includeFunctionSerializer: true}
jsonSerializer.installSerializersAndRefreshJsonSerializer(baseSerializers, installOptions)
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
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  installer,
  { includeFunctionSerializer: true }
)
```

**for ES Modules:**

```js
// to import the JsonSerializerFactory class.
import { JsonSerializerFactory } from "json-serializer-core"
// to import the baseSerializerInstaller object.
import { baseSerializersInstaller } from "json-serializer-base-serializers"

// to obtain the JsonSerializer object.
const jsonSerializer = JsonSerializerFactory.createJsonSerializer();

// to install the serializers without FunctionSerializer.
jsonSerializer.installSerializersAndRefreshJsonSerializer(baseSerializersInstaller);

// if you want install the FunctionSerializer, you can use:
jsonSerializer.installSerializersAndRefreshJsonSerializer(
  baseSerializersInstaller,
  { includeFunctionSerializer: true }
);
```
