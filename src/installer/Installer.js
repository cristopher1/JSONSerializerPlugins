import Serializer from '../serializer/Serializer'

export class Installer {
  #serializers

  /**
   * Serializer Installer.
   *
   * @param {Serializer[]} serializers The Serializers to install.
   */
  constructor(serializers) {
    this.#serializers = serializers
  }

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
   * @param {boolean} [installOptions.includeFunctionSerializer] An Boolean that
   *   indicates if the FunctionSerializer must be included. Default is false.
   */
  install(serializerHandler, installOptions) {
    const serializers = this.#serializers
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
  }
}
