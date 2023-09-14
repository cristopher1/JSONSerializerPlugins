import { faker } from '@faker-js/faker'

const fakerSeed = 125

faker.seed(fakerSeed)

export const createReplacer = (serializers) => {
  const getSerializerType = (data) => {
    const type = typeof data
    return type === 'object' ? data.constructor.name.toLowerCase() : type
  }
  return function replacer(key, value) {
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

export const createReviver = (serializers) => {
  return function reviver(key, value) {
    const dataType = '__typeof__'
    const serializerType = value[dataType]
    const serializer = serializers[serializerType]
    if (serializer) {
      return serializer.parse(value)
    }
    // Using parsed data by JSON.parse algorithm
    return value
  }
}

export { faker }
