class BigIntSerializerPlugin {
  #typeof

  constructor() {
    this.#typeof = 'bigint'
  }

  get serializerType() {
    return this.#typeof
  }

  serialize(value) {
    const dataType = this.#typeof
    const serializedData = {
      __typeof__: dataType,
      value: value.toString(),
    }
    return serializedData
  }

  parse(value) {
    const serializedData = value.value
    const parsedData = BigInt(serializedData)
    return parsedData
  }
}

export default BigIntSerializerPlugin
