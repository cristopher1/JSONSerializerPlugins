import { faker } from '@faker-js/faker'

const fakerSeed = 125

faker.seed(fakerSeed)

export const createReplacer = (serializerPlugins) => {
  const getSerializerType = (data) => {
    const type = typeof data
    return type === 'object' ? data.constructor.name.toLowerCase() : type
  }
  return function replacer(key, value) {
    const serializers = serializerPlugins
    const unserializedData = this[key]
    const serializerType = getSerializerType(unserializedData)
    const serializer = serializers[serializerType]
    if (serializer) {
      return serializer.serialize(unserializedData)
    }
    // Using serialized data by JSON.stringify algorithm
    return value
  }
}

export const createReviver = (dataTypeKey, serializerPlugins) => {
  return function reviver(key, value) {
    const serializerTypeKey = dataTypeKey
    const serializers = serializerPlugins
    const serializerType = value[serializerTypeKey]
    const serializer = serializers[serializerType]
    if (serializer) {
      return serializer.parse(value)
    }
    // Using parsed data by JSON.parse algorithm
    return value
  }
}

export const dataTypeKey = '__typeof__'
export { faker }
