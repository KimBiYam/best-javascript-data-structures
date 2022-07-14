function capitalizeFirst(arr) {
  const result = [];

  function innerRecursive(innerInput) {
    if (innerInput.length === 0) return;

    const current = innerInput[0];
    result.push(current[0].toUpperCase() + current.slice(1));

    return innerRecursive(innerInput.slice(1));
  }

  innerRecursive(arr);

  return result;
}
