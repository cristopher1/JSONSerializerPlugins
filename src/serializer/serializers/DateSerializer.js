import Serializer from '../Serializer'

class DateSerializer extends Serializer {
  constructor() {
    super('date')
  }

  serialize(value) {
    const dataType = super.getSerializerType()
    const serializedData = {
      __typeof__: dataType,
      value: value.toJSON(),
    }
    return serializedData
  }

  parse(serializedData) {
    const value = serializedData.value
    const parsedData = new Date(value)
    return parsedData
  }
}

export default DateSerializer
