'use strict'

let expect = require('expect')
let Stack = require('./../index.js').Stack

let isFunction = (fn) => {
    return fn instanceof Function
}

describe('Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    describe('#head', () => {
      it('should return undefined if stack empty', () => {
        let actual = stack.head
        let expected = undefined

        expect(actual).toBe(expected)
      })

      it('should return top element', () => {
        stack.push(1)

        let actual = stack.head
        let expected = 1

        expect(actual).toBe(expected)
      })
    })

    describe('#push()', () => {
      it('should have push', () => {
          let actual = isFunction(stack.push)
          let expected = true

          expect(actual).toBe(expected)
      })
    })

    describe('#pop()', () => {
      it('should have pop', () => {
          let actual = isFunction(stack.pop)
          let expected = true

          expect(actual).toBe(expected)
      })

      it('check push and pop method', () => {
          stack.push(1)
          stack.push(2)

          let val2 = stack.pop()
          let val1 = stack.pop()
          let valUndefined = stack.pop()

          let actual = [val2, val1, valUndefined]
          let expected = [2, 1, undefined]

          expect(actual).toEqual(expected)
      })
    })

    describe('#peek()', () => {
      it('should have peek method', () => {
          let actual = isFunction(stack.peek)
          let expected = true

          expect(actual).toBe(expected)
      })

      it('should peek last element', () => {
          stack.push(1)
          stack.push(2)

          stack.peek()
          let actual = stack.peek()
          let expected = 2

          expect(actual).toBe(expected)
      })

      it('should return undefined on empty stack', () => {
          let actual = stack.peek()
          let expected = undefined

          expect(actual).toBe(expected)
      })
    })

    describe('#clear()', () => {
      it('should have clear method', () => {
          let actual = isFunction(stack.clear)
          let expected = true

          expect(actual).toBe(expected)
      })

      it('should clear stack', () => {
          stack.push(1)
          stack.push(2)

          stack.clear()

          let actual = stack.peek()
          let expected = undefined

          expect(actual).toBe(expected)
      })
    })
})
