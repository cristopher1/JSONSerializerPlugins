import { SerializerError } from './Error'

/** @abstract */
class Serializer {
  #serializerType

  /**
   * This constructor belongs to an abstract class.
   *
   * @param {string} serializerType The type of the serializer.
   */
  constructor(serializerType) {
    if (this.constructor === Serializer) {
      throw new SerializerError('This is an abstract class')
    }
    this.#serializerType = serializerType
  }

  /**
   * Returns the type of serializer.
   *
   * @returns {string} The type of serializer.
   */
  getSerializerType() {
    return this.#serializerType
  }

  /**
   * Serializes data.
   *
   * @abstract
   * @param {any} unserializedData The data to serialize.
   * @returns {object} The serialized data.
   */
  serialize(unserializedData) {}

  /**
   * Unserializes data.
   *
   * @abstract
   * @param {object} serializedData The data to unserialize.
   * @returns {any} The unserialized data.
   */
  parse(serializedData) {}
}

export default Serializer
