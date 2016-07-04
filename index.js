'use strict'

const randomNumbers = require('./randomNumbers')

console.log('random', randomNumbers.create())
console.log('random', randomNumbers.create(1,10))
console.log('random', randomNumbers.create(99, 36489))
