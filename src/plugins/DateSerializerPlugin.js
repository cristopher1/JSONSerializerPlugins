class DateSerializerPlugin {
  #typeof

  constructor() {
    this.#typeof = 'date'
  }

  get serializerType() {
    return this.#typeof
  }

  serialize(value) {
    const dataType = this.#typeof
    const serializedData = {
      __typeof__: dataType,
      value: value.toJSON(),
    }
    return serializedData
  }

  parse(value) {
    const serializedData = value.value
    const parsedData = new Date(serializedData)
    return parsedData
  }
}

export default DateSerializerPlugin
