function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  // 두 객체를 사용해서 각 문자열 개별 문자의 빈도를 카운팅 한다.
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // 현재 문자와 같은 문자가 frequencyCounter2에 없으면 거짓이다.
    if (!(key in frequencyCounter2)) {
      return false;
    }

    // frequencyCounter1과 2를 비교해서 같은 문자열에 해당하는 갯수가 다르면 거짓이다.
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }

  return true;
}
