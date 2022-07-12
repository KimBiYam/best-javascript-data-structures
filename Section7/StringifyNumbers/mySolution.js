function stringifyNumbers(obj) {
  const newObj = {};

  for (let key in obj) {
    const currentValue = obj[key];

    if (typeof currentValue === "number") {
      newObj[key] = currentValue.toString();
    } else if (
      typeof currentValue === "object" &&
      !Array.isArray(currentValue)
    ) {
      newObj[key] = stringifyNumbers(currentValue);
    } else {
      newObj[key] = currentValue;
    }
  }

  return newObj;
}
