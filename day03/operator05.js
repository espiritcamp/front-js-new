//형변환 실습
let num;
//num에 실수 또는 정수를 대입하고, num 가 정수라면 "정수입니다", 실수라면 "실수입니다"를 출력
//ex) 10,5, 10
//단 10.0은 정수로 판단한다.

num = 10.5;

//let result = parseInt(num) == parseFloat(num) ? "정수입니다" : "실수입니다";

let result = num % 1 ? "정수입니다" : "실수입니다";

console.log(result);
