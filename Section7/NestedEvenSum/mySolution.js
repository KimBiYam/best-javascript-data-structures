function nestedEvenSum(obj) {
  let result = 0;

  for (let key in obj) {
    const currentValue = obj[key];

    if (typeof currentValue === "number" && currentValue % 2 === 0) {
      result += currentValue;
    }

    if (typeof currentValue === "object") {
      result += nestedEvenSum(currentValue);
    }
  }

  return result;
}
