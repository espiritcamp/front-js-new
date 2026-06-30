// 디폴트 파라미터 사용하지 않음.
// 정수를 3개 전달하면 3개를 더한 값을 반환
// 정수를 2개를 전달하면 2개를 더한 값을 반환
// 정수를 1개 전달하면 1개의 값을 반환

// function zero() {
//     return (zero = 0);
// }
function numberSum(num1, num2 = zero(), num3 = zero()) {
    if(!num2){
        
    }
    return num1 + num2 + num3;
}

let result1 = numberSum(10, 20);
console.log(result1);
