import Serializer from '../Serializer'

class FunctionSerializer extends Serializer {
  constructor() {
    super('function')
  }

  serialize(unserializedData) {
    const serializedData = {
      value: `(${unserializedData.toString()})`,
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    // eslint-disable-next-line
    const parsedData = eval(value)
    return parsedData
  }
}

export default FunctionSerializer
