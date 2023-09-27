import Serializer from '../Serializer'

class BigIntSerializer extends Serializer {
  constructor() {
    super('bigint')
  }

  serialize(value) {
    const serializedData = {
      value: value.toString(),
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
