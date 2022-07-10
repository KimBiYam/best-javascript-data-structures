function areThereDuplicates(...args) {
  const lookup = {};

  for (let val of args) {
    lookup[val] = ++lookup[val] || 1;

    if (lookup[val] > 1) {
      return true;
    }
  }

  return false;
}
