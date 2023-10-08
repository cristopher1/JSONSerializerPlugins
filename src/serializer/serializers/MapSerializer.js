import Serializer from '../Serializer'

class MapSerializer extends Serializer {
  constructor() {
    super('Map')
  }

  serialize(value) {
    const serializedData = {
      value: Array.from(value),
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    const parsedData = new Map(value)
    return parsedData
  }
}

export default MapSerializer
