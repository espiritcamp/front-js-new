// 1. 어떤 문자 중 숫자를 제거하고 출력
// ex) apple123apple -> appleapple

// const removeNum = (txt, callback) => {
//     let result = "";
//     for (i = 0; i < txt.length; i++) {
//         if (txt[i] >= 0 && txt[i] <= 9) {
//             continue;
//         }
//         result += txt[i];
//     }
//     callback(result);
// };

// removeNum("apple123apple", (result) => {
//     console.log(result);
// });

// 2. 사용자가 입력한 값까지의 누적합을 구하고 출력

// const sum = (num, callback) => {
//     result = 0;
//     for (let i = 0; i < num; i++) {
//         result += i;
//     }
//     callback(result);
// };

// sum(50, (result) => {
//     console.log(result)
// })

// 3. 1~100까지 중 짝수만 더하고 그 값의 2배를 한 후 출력

const evenSum = (callback) => {
    let result = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 1) {
            continue;
        }
        result += i;
    }
    callback(result);
};

const gob = (result, callback) => {
    callback(result * 2);
};

evenSum((result) => {
    gob(result, console.log)
})
