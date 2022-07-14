function isPalindrome(str) {
  if (str[0] !== str.slice(-1)) {
    return false;
  }

  return true || isPalindrome(str.slice(1, -1));
}
