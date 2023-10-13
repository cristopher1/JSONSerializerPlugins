import * as serializers from '../src/serializer/serializers'
import { Installer } from '../src/installer/Installer'

const filePath = 'src/Installer/Installer.js'

/** @class */
function SerializerHandler() {
  this.serializers = {}
  this.addSerializer = function (serializer) {
    const serializerType = serializer.getSerializerType()
    this.serializers[serializerType] = serializer
  }
  this.getSerializers = function () {
    return { ...this.serializers }
  }
}

const generateExpectedSerializers = (serializers, excludeSerializers = []) => {
  const expectedSerializers = {}
  for (const key in serializers) {
    const Serializer = serializers[key]
    const serializer = new Serializer()
    const serializerType = serializer.getSerializerType()
    if (!excludeSerializers.includes(serializerType)) {
      expectedSerializers[serializerType] = serializer
    }
  }
  return expectedSerializers
}

describe(`class Installer (${filePath})`, () => {
  let serializerHandler
  let installer
  beforeEach(() => {
    serializerHandler = new SerializerHandler()
    installer = new Installer(serializers)
  })
  describe('(method) install', () => {
    it('Should install serializers without using installOptions parameter', () => {
      // Arrange
      const excludeSerializers = ['function']
      const expected = generateExpectedSerializers(
        serializers,
        excludeSerializers,
      )

      // Act
      installer.install(serializerHandler)

      // Assert
      const result = serializerHandler.getSerializers()
      expect(result).toEqual(expected)
    })
    it('Should install serializers using installOptions parameter', () => {
      // Arrange
      const expected = generateExpectedSerializers(serializers)

      // Act
      installer.install(serializerHandler, { includeFunctionSerializer: true })

      // Assert
      const result = serializerHandler.getSerializers()
      expect(result).toEqual(expected)
    })
  })
})
