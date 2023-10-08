import { createReplacer, createReviver, faker } from './helpers'
import BigSerializer from '../src/serializer/serializers/BigIntSerializer'

const filePath = 'src/serializer/serializers/BigIntSerializer.js'

const serializer = { bigint: new BigSerializer() }

const replacer = createReplacer(serializer)
const reviver = createReviver(serializer)

describe(`class BigIntSerializer (${filePath})`, () => {
  describe('JSON.stringify', () => {
    it('Should allow JSON.stringify to serialize a bigint', () => {
      // Arrange
      const input = faker.number.bigInt()
      const expected = `{"__typeof__":"bigint","value":"${input.toString()}"}`

      // Act
      const result = JSON.stringify(input, replacer)

      // Assert
      expect(result).toBe(expected)
    })
  })
  describe('JSON.parse', () => {
    it('Should allow JSON.parse to parse a bigint serialized by JSON.stringify', () => {
      // Arrange
      const expected = faker.number.bigInt()
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(result).toEqual(expected)
    })
    it('Should allow JSON.parse to parse bigints contains into an object serialized by JSON.stringify', () => {
      // Arrange
      const expected = {
        key1: faker.string.sample(),
        key2: faker.number.bigInt(),
        nestedObject: {
          userName: faker.internet.userName(),
          password: faker.internet.password({ length: 17 }),
          bigInt: faker.number.bigInt(),
          array: [
            faker.number.bigInt(),
            faker.number.bigInt(),
            faker.number.bigInt(),
            faker.number.bigInt(),
            faker.number.bigInt(),
          ],
        },
      }
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(result).toEqual(expected)
    })
  })
})
