import Serializer from '../Serializer'

/* eslint-disable no-eval */
class MapSerializer extends Serializer {
  /** Serializer used to serialize and unserialize Maps. */
  constructor() {
    super('Map')
    try {
      // Map constructor used by the client.
      this.Map = eval(`new Map().constructor`)
    } catch (err) {
      // When the environment does not support the Map constructor, it is used a polyfill in the transpiled code.
      this.Map = new Map().constructor
    }
  }

  serialize(unserializedData) {
    const serializedData = {
      value: Array.from(unserializedData),
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    const parsedData = new this.Map(value)
    return parsedData
  }
}

export default MapSerializer
