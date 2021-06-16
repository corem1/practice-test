function makeMultiplier(m1, m2) {
  var myFunc = function(x) {
    return m1 * x * m2
  };

  return myFunc;
}

var multiplyBy3 = makeMultiplier(3, 2)
console.log(multiplyBy3(25));
