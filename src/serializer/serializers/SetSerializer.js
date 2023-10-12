import Serializer from '../Serializer'

/* eslint-disable no-eval */
class SetSerializer extends Serializer {
  /** Serializer used to serialize and unserialize Sets. */
  constructor() {
    super('Set')
    try {
      // Set constructor used by the client.
      this.Set = eval(`new Set().constructor`)
    } catch (err) {
      // When the environment does not support the Set constructor, it is used a polyfill in the transpiled code.
      this.Set = new Set().constructor
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
    const parsedData = new this.Set(value)
    return parsedData
  }
}

export default SetSerializer
