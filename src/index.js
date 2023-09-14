import * as serializers from './serializer/serializers'

export default {
  install: (replacerBuilder, reviverBuilder, installOptions) => {
    const options = {
      includeSerializerFunction: false,
      ...installOptions,
    }
    const { includeSerializerFunction } = options
    for (const key in serializers) {
      const Serializer = serializers[key]
      const serializer = new Serializer()
      const serializerType = serializer.serializerType
      if (serializerType !== 'function' || includeSerializerFunction) {
        replacerBuilder.setSerializer(serializerType, serializer)
        reviverBuilder.setSerializer(serializerType, serializer)
      }
    }
  },
}
