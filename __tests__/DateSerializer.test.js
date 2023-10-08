import { createReplacer, createReviver, faker } from './helpers'
import DataSerializer from '../src/serializer/serializers/DateSerializer'

const filePath = 'src/serializer/serializers/DateSerializer.js'

const serializer = { Date: new DataSerializer() }

const replacer = createReplacer(serializer)
const reviver = createReviver(serializer)

describe(`class DateSerializer (${filePath})`, () => {
  describe('JSON.stringify', () => {
    it('Should allow JSON.stringify to serialize a date', () => {
      // Arrange
      const input = faker.date.birthdate()
      const expected = `{"__typeof__":"Date","value":"${input.toJSON()}"}`

      // Act
      const result = JSON.stringify(input, replacer)

      // Assert
      expect(result).toBe(expected)
    })
  })
  describe('JSON.parse', () => {
    it('Should allow JSON.parse to parse a date serialized by JSON.stringify', () => {
      // Arrange
      const expected = faker.date.birthdate()
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
        key2: faker.number.int(),
        nestedObject: {
          userName: faker.internet.userName(),
          password: faker.internet.password({ length: 17 }),
          integer: faker.number.int(),
          dates: [
            {
              date1: faker.date.anytime(),
              date2: faker.date.birthdate(),
            },
            {
              date: faker.date.birthdate(),
            },
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
