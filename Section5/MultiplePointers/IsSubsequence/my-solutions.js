function isSubsequence(first, second) {
  for (let val of second) {
    if (val === first[0]) {
      first = first.substring(1, first.length);
    }
  }

  return first === "";
}
