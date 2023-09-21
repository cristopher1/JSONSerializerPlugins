import Serializer from '../Serializer'

class FunctionSerializer extends Serializer {
  constructor() {
    super('function')
  }

  serialize(value) {
    const dataType = super.getSerializerType()
    const serializedData = {
      __typeof__: dataType,
      value: `(${value.toString()})`,
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
