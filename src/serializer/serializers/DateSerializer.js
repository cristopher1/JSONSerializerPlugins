import Serializer from '../Serializer'

class DateSerializer extends Serializer {
  constructor() {
    super('Date')
  }

  serialize(unserializedData) {
    const serializedData = {
      value: unserializedData.toJSON(),
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
