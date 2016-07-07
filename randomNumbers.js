function randomNumber(start, end) {

  const min = (start && !isNaN(start)) ? start : 1,
    max = (end && !isNaN(end)) ? end : 100;
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { create: randomNumber }
