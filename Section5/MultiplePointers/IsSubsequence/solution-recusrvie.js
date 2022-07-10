// 해당 해결방법은 재귀를 사용하기 때문에 공간 복잡도 O(1)을 가지지 않는다.
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
