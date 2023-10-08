import * as serializers from './serializer/serializers'

export default {
  install: (serializerHandler, installOptions) => {
    const options = {
      includeSerializerFunction: false,
      ...installOptions,
    }
    const { includeSerializerFunction } = options
    for (const key in serializers) {
      const Serializer = serializers[key]
      const serializer = new Serializer()
      const serializerType = serializer.getSerializerType()
      if (serializerType !== 'function' || includeSerializerFunction) {
        serializerHandler.addSerializer(serializer)
      }
    }
  },
}
