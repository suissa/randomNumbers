function randomNumber(start, end) {

  const min = (start && !isNan(start)) ? start : 1;
  const max = end || 100;
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { create: randomNumber }
