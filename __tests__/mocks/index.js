export const createReplacer = (serializerPlugins) => {
  const replacer = (key, value) => {
    const plugins = serializerPlugins
    const type = typeof value
    const serializarKey =
      type === 'object' ? value.constructor.name.toLowerCase() : type
    const serializer = plugins[serializarKey]
    if (serializer) {
      return serializer.serialize(value)
    }
    return value
  }
  return replacer
}

export const createReviver = (serializerPlugins) => {
  const reviver = (key, value) => {
    const plugins = serializerPlugins
    const type = value.__typeof__
    const serializer = plugins[type]
    if (type && serializer) {
      const data = value.value
      return serializer.parse(data)
    }
    return value
  }
  return reviver
}
