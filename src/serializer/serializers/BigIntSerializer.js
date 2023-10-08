import Serializer from '../Serializer'

class BigIntSerializer extends Serializer {
  /** Serializer used to serialize and unserialize BigInts. */
  constructor() {
    super('bigint')
  }

  serialize(unserializedData) {
    const serializedData = {
      value: unserializedData.toString(),
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    const parsedData = BigInt(value)
    return parsedData
  }
}

export default BigIntSerializer
