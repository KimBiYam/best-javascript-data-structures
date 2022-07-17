[6, 4, 15, 10].sort();
// [10, 15, 4, 6]
/*
하지만 숫자의 경우 오름차순, 내림차순으로 정렬되지 않고 알 수 없는 순서로 정렬된다.
이는 자바스크립트의 내장 정렬 메소드에서 기본 정렬 순서가 유니코드이기 때문인데, 숫자 값을 문자열 유니코드로 변경하고 그 뒤에 유니코드 순서로 정렬하기 때문이다.
*/