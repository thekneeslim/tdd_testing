var assert = require('chai').assert
var Test = require('../index')

var test = new Test()

describe('Returns change', () => {
  it('Returns change 1', () => {
    // assert.isObject(test.splitTheBill({A: 20, B: 15, C: 10}), 'tea selection is an object');

    assert.equal(test.splitTheBill({A: 20, B: 15, C: 10}), {A: 5, B: 0, C: -5})
  })

  it('Returns change 2', () => {
    assert.equal(test.splitTheBill({A: 40, B: 25, X: 10}), {A: 15, B: 0, X: -15})
  })
})
