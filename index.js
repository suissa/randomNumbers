'use strict'

const create = require('./randomNumbers')
// const create = require('even-random-numbers')
const arr = []

for(let i = 0; i < 10; i++) {
  let even = create.randomEvenNumbers()
  arr[i] = even
}

console.log('arr', arr)