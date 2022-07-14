function collectStrings(obj) {
  let result = [];

  for (let key in obj) {
    const currentValue = obj[key];

    if (typeof currentValue === "string") {
      result.push(currentValue);
    }

    if (typeof currentValue === "object") {
      result = result.concat(collectStrings(currentValue));
    }
  }

  return result;
}
