
//限制數字，不讓他重複
let min: number = 1;
let max: number = 100;

//Math.floor => 傳整數
function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}

function middleNumber(min: number, max: number): number {
    return Math.floor((max - min) / 2) + min
}

const answer = randomNumber(min, max)
let guessAnswer = middleNumber(min, max)
let turn = 1;


while (guessAnswer !== answer) {
    
    if (guessAnswer < answer) {
        min = guessAnswer + 1
        console.log(`猜測第${turn} 次， 猜測的數值 ${guessAnswer}，結果 : 太小`)
        turn++
    } else {
        max = guessAnswer - 1
        console.log(`猜測第${turn} 次， 猜測的數值 ${guessAnswer}，結果 : 太大`)
        turn++
    }
    guessAnswer = middleNumber(min, max)
}
console.log(`猜測第${turn}次. 猜測的數值 ${guessAnswer}, 答案 ${answer}. 恭喜你!`)


switch (turn) {
    case 1:
        turn = 1;
        console.log('您可獲得獎勵金額 : 10000')
        break;
    case 2:
        turn = 2;
        console.log('您可獲得獎勵金額 : 8000')
        break;
    case 3:
        turn = 3;
        console.log('您可獲得獎勵金額 : 6000')
        break;
    case 4:
        turn = 4;
        console.log('您可獲得獎勵金額 : 4000')
        break;
    case 5:
        turn = 5;
        console.log('您可獲得獎勵金額 : 2000')
        break;
    case 6:
        turn = 6;
        console.log('您可獲得獎勵金額 : 1000')
        break;
    default:
        turn !== 10 && turn <= 7
        console.log('但因為你猜測次數太多次，所以無法獲得獎勵金額')
}

