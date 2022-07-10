function findLongestSubstring(str) {
  let result = 0;
  // 중복 체크를 위해 lookup에 문자마다 갯수를 저장
  const lookup = {};

  // Sliding Window 변수들
  let start = 0;
  let end = 0;
  let startChar = str[start];

  // start, end 지점이 문자열 길이보다 낮을때까지 루프
  while (start < str.length && end < str.length) {
    const currentChar = str[end];

    // end에 해당하는 문자열이 이미 lookup에 있으면 중복되는 경우이다.
    if (lookup[currentChar] > 0) {
      // 길이 중 가장 큰 값을 저장
      result = Math.max(result, end - start);
      // start 지점을 다음 요소로 옮겨준다.
      lookup[startChar]--;
      start++;
      startChar = str[start];
    } else {
      // end 인덱스가 문자열 길이보다 낮으면 lookup에 하나 증감 시켜주고 end 지점을 다음 요소로 옮겨준다.
      lookup[currentChar] = lookup[currentChar] ? lookup[currentChar] + 1 : 1;
      end++;
    }
  }

  return Math.max(result, end - start);
}
