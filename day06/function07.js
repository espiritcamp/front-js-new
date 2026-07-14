// 함수의 사용
// .indexOf(): 해당 문자의 index 번호를 리턴해주는 문자열 메서드

// index(방번호)
// console.log("abcdefg".indexOf("c"))
// let data = "abcdefg"

// console.log(data[0])
// let data2 = 10

// // .chatAt(): 해당 인덱스의 값을 리턴하는 메서드
// console.log(data.charAt(3)) // d

// 1. 문자열을 입력 받고 원하는 문자의 개수를 구해주는 함수
// ex) myFunc("abcdabcd", "a")
// 결과: 2

// 문자열의 길이: .length
// console.log("abcde".length)

function myFunc(word, ch) {
    let count = 0;
    for (i = 0; i < word.length; i++) {
        if (word[i] === ch) count++;
    }
    return count;
}
let result = myFunc("advadfa", "a");
console.log(result);
