// 입력 받은 문자열을 뒤집어서 반환해주는 함수
// ex) "abcdefg" -> "gfedcba"



// 다이아(심화)
// 1. 한글을 정수로 바꿔주는 함수
// ex) "일공이사" -> 1024


function han(word){
    let sum = 0
    for (let i=0; i<word.length; i++){
        if (word[i] === "공"){
            sum +=  "0"
        }
        if else (word[i] === "일"){
            sum +=  "1"
        }
        if else (word[i] === "이"){
            sum +=  "2"
        }
        if else (word[i] === "삼"){
            sum +=  "3"
        }
        if else (word[i] === "사"){
            sum +=  "4"
        }
        if else (word[i] === "오"){
            sum +=  "5"
        }
        if else (word[i] === "육"){
            sum +=  "6"
        }
        if else (word[i] === "칠"){
            sum +=  "7"
        }
        if else (word[i] === "팔"){
            sum +=  "8"
        }
        else {
            sum +=  "9"
        }
       
    }
    return Number(sum)

}

result = han("일공이사")
console.log(result)


// 2. 정수를 한글로 바꿔주는 함수
// ex) "1024" -> "일공이사"


