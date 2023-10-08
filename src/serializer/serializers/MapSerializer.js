import Serializer from '../Serializer'

class MapSerializer extends Serializer {
  /** Serializer used to serialize and unserialize Maps. */
  constructor() {
    super('Map')
  }

  serialize(unserializedData) {
    const serializedData = {
      value: Array.from(unserializedData),
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
