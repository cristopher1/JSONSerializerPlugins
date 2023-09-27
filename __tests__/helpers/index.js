import { faker } from '@faker-js/faker'

const fakerSeed = 125

faker.seed(fakerSeed)

export const createReplacer = (serializers) => {
  const getSerializerType = (unserializedData) => {
    const type = typeof unserializedData
    const serializerType =
      type === 'object' ? unserializedData.constructor.name : type
    return serializerType.toLowerCase()
  }

  return function replacer(key, value) {
    const unserializedData = this[key]
    const serializerType = getSerializerType(unserializedData)
    const serializer = serializers[serializerType]
    if (serializer) {
      const serializedData = serializer.serialize(unserializedData)
      return {
        __typeof__: serializerType,
        ...serializedData,
      }
    }
    // Using serialized data by JSON.stringify algorithm
    return value
  }
}

export const createReviver = (serializers) => {
  return function reviver(key, value) {
    const serializerType = value.__typeof__
    const serializer = serializers[serializerType]
    if (serializer) {
      return serializer.parse(value)
    }
    // Using parsed data by JSON.parse algorithm
    return value
  }
}

export { faker }
