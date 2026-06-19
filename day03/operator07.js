// 형변환 실습
// true, false, +를 이용하여 10을 만들기
// 단 true, false는 1번만 사용할 수 있다.

// let case1 = true;
// let case2 = false;

// let case3 = !case1 == case2 ? "1" : "0";

// let case4 = case1 == case2 ? "1" : "0";

// let result = case3 + case4;

// console.log(Number(result));

let one = Number(true);
let oneString = String(one);
let zero = Number(false);
let result = oneString + zero;

console.log(result);
