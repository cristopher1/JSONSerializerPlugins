import Serializer from '../Serializer'

class SetSerializer extends Serializer {
  constructor() {
    super('Set')
  }

  serialize(value) {
    const serializedData = {
      value: Array.from(value),
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    const parsedData = new Set(value)
    return parsedData
  }
}

export default SetSerializer
