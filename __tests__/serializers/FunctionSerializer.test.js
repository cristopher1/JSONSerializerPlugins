import { createReplacer, createReviver, faker } from '../helpers'
import FunctionSerializer from '../../src/serializer/serializers/FunctionSerializer'

const filePath = 'src/serializer/serializers/FunctionSerializer.js'

const serializer = { function: new FunctionSerializer() }

const replacer = createReplacer(serializer)
const reviver = createReviver(serializer)

describe(`class FunctionSerializer (${filePath})`, () => {
  describe('JSON.stringify', () => {
    it('Should allow JSON.stringify to serialize a function', () => {
      // Arrange
      const input = function sum(a, b) {
        return a + b
      }
      const expected = `{"__typeof__":"function","value":"(function sum(a, b) {\\n        return a + b;\\n      })"}`

      // Act
      const result = JSON.stringify(input, replacer)

      // Assert
      expect(result).toBe(expected)
    })
    it('Should allow JSON.stringify to serialize a arrow function', () => {
      // Arrange
      const input = (a, b, c) => a * b - c
      const expected = `{"__typeof__":"function","value":"((a, b, c) => a * b - c)"}`

      // Act
      const result = JSON.stringify(input, replacer)

      // Assert
      expect(result).toBe(expected)
    })
  })
  describe('JSON.parse', () => {
    it('Should allow JSON.parse to parse a arrow function serialized by JSON.stringify', () => {
      // Arrange
      const expected = () => {
        console.log('hello world')
      }
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(typeof result).toBe('function')
      expect(result()).toBe(expected())
    })
    it('Should allow JSON.parse to parse a named function serialized by JSON.stringify', () => {
      // Arrange
      const expected = function rest(x, y) {
        return x - y
      }
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(typeof result).toBe('function')
      expect(result(5, 7)).toBe(expected(5, 7))
      expect(result(10, 9)).toBe(expected(10, 9))
      expect(result(5, -7)).toBe(expected(5, -7))
    })
    it('Should allow JSON.parse to parse arrow function and named function contains into an object serialized by JSON.stringify', () => {
      // Arrange
      const expected = {
        key1: faker.string.sample(),
        key2: true,
        fn: function sum(a, b) {
          return a + b
        },
        nestedObject: {
          userName: faker.internet.userName(),
          password: faker.internet.password({ length: 17 }),
          integer: faker.number.int(),
          data: [
            {
              fn: () => {
                return 'hello world'
              },
            },
          ],
        },
      }
      const input = JSON.stringify(expected, replacer)

      // Act
      const result = JSON.parse(input, reviver)

      // Assert
      expect(typeof result.fn).toBe('function')
      expect(result.fn(1, 2)).toBe(expected.fn(1, 2))
      expect(result.fn(5, 7)).toBe(expected.fn(5, 7))
      expect(result.fn(10, 37)).toBe(expected.fn(10, 37))
      expect(result.fn(10005667, -463645)).toBe(expected.fn(10005667, -463645))
      expect(typeof result.nestedObject.data[0].fn).toBe('function')
      expect(result.nestedObject.data[0].fn()).toBe(
        expected.nestedObject.data[0].fn(),
      )
    })
  })
})
