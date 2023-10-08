import Serializer from '../Serializer'

class DateSerializer extends Serializer {
  constructor() {
    super('Date')
  }

  serialize(value) {
    const serializedData = {
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
