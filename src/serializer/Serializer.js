import { SerializerError } from './Error'

class Serializer {
  #serializerType

  constructor(serializerType) {
    if (this.constructor === Serializer) {
      throw new SerializerError('This is an abstract class')
    }
    this.#serializerType = serializerType
  }

  getSerializerType() {
    return this.#serializerType
  }
}

export default Serializer
