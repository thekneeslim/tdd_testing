class Test {
  splitTheBill(money) {
    var summation = 0;
    var properties = Object.keys(money)

    for (var key in money) {
      summation += money[key]
    }

    for (var key in money) {
      money[key] = money[key] - (summation/properties.length)
    }

    return money
  }
}

module.exports = Test
