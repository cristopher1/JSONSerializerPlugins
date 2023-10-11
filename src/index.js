import * as serializers from './serializer/serializers'

export const baseSerializersInstaller = {
  /**
   * This method is used when it is necessary to install Serializers using some
   * configuration.
   *
   * @param {object} serializerHandler An object that manages the Serializers.
   * @param {(serializer: {
   *   getSerializerType: () => string
   *   serialize: (unserializedData: any) => object
   *   parse: (serializedData: object) => any
   * }) => void} serializerHandler.addSerializer
   *   Method used to add Serializers.
   * @param {object} installOptions An object that contains the install options.
   */
  install: (serializerHandler, installOptions) => {
    const options = {
      includeFunctionSerializer: false,
      ...installOptions,
    }
    const { includeFunctionSerializer } = options
    for (const key in serializers) {
      const Serializer = serializers[key]
      const serializer = new Serializer()
      const serializerType = serializer.getSerializerType()
      if (serializerType !== 'function' || includeFunctionSerializer) {
        serializerHandler.addSerializer(serializer)
      }
    }
  },
}
