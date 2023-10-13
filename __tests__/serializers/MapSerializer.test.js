import { createReplacer, createReviver, faker } from '../helpers'
import MapSerializer from '../../src/serializer/serializers/MapSerializer'

const filePath = 'src/serializer/serializers/MapSerializer.js'

const serializer = { Map: new MapSerializer() }
const replacer = createReplacer(serializer)
const reviver = createReviver(serializer)

describe(`class MapSerializer (${filePath})`, () => {
  describe('JSON.stringify', () => {
    it('Should allow JSON.stringify to serialize a Map', () => {
      // Arrange
      const input = new Map()
      input.set(faker.string.sample(), faker.string.symbol())
      input.set(faker.string.sample(), faker.number.int())
      const expected = `{"__typeof__":"Map","value":${JSON.stringify(
        Array.from(input),
      )}}`

      // Act
      const result = JSON.stringify(input, replacer)

      // Assert
      expect(result).toBe(expected)
    })
  })
  describe('JSON.parse', () => {
    it('Should allow JSON.parse to parse a Map serialized by JSON.stringify', () => {
      // Arrange
      const expected = new Map()
      expected.set(faker.string.sample(), faker.string.symbol())
      expected.set(faker.string.sample(), faker.number.int())
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(result).toEqual(expected)
    })
    it('Should allow JSON.parse to parse a Map that contains into an object serialized by JSON.stringify', () => {
      // Arrange
      const expected = new Map()
      expected.set(faker.string.sample(), {
        key1: faker.string.sample(),
        key2: faker.number.int(),
        nestedObject: {
          userName: faker.internet.userName(),
          password: faker.internet.password({ length: 17 }),
          bigInt: faker.number.int(),
          array: [
            faker.number.int(),
            faker.number.int(),
            faker.number.int(),
            faker.number.int(),
            faker.number.int(),
          ],
        },
      })
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(result).toEqual(expected)
    })
  })
})
