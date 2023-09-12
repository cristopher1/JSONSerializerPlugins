class FunctionSerializerPlugin {
  #typeof

  constructor() {
    this.#typeof = 'function'
  }

  get serializerType() {
    return this.#typeof
  }

  serialize(value) {
    const dataType = this.#typeof
    const serializedData = {
      __typeof__: dataType,
      value: `(${value.toString()})`,
    }
    return serializedData
  }

  parse(value) {
    const serializedData = value.value
    // eslint-disable-next-line
    const parsedData = eval(serializedData)
    return parsedData
  }
}

export default FunctionSerializerPlugin
