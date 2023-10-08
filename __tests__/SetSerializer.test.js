import { createReplacer, createReviver, faker } from './helpers'
import SetSerializer from '../src/serializer/serializers/SetSerializer'

const filePath = 'src/serializer/serializers/SetSerializer.js'

const serializer = { Set: new SetSerializer() }
const replacer = createReplacer(serializer)
const reviver = createReviver(serializer)

describe(`class SetSerializer (${filePath})`, () => {
  describe('JSON.stringify', () => {
    it('Should allow JSON.stringify to serialize a Set', () => {
      // Arrange
      const input = new Set()
      input.add(faker.string.sample(), faker.string.symbol())
      input.add(faker.string.sample(), faker.number.int())
      const expected = `{"__typeof__":"Set","value":${JSON.stringify(
        Array.from(input),
      )}}`

      // Act
      const result = JSON.stringify(input, replacer)

      // Assert
      expect(result).toBe(expected)
    })
  })
  describe('JSON.parse', () => {
    it('Should allow JSON.parse to parse a Set serialized by JSON.stringify', () => {
      // Arrange
      const expected = new Set()
      expected.add(faker.string.sample(), faker.string.symbol())
      expected.add(faker.string.sample(), faker.number.int())
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(result).toEqual(expected)
    })
    it('Should allow JSON.parse to parse a Set that contains into an object serialized by JSON.stringify', () => {
      // Arrange
      const expected = new Set()
      expected.add(faker.string.sample(), {
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
