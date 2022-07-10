function sameFrequency(num1, num2) {
  const lookup = {};

  for (let val of String(num1)) {
    lookup[val] = lookup[val] ? lookup[val] + 1 : 1;
  }

  for (let val of String(num2)) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] -= 1;
    }
  }

  return true;
}
