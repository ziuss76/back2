const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let T = +input[0]
let ans = [];
for (let i = 1; i <= T; i++){
    let sum = 0;
    for (let k = 1; k <= input[i]; k++){
        sum += k * Math.floor((input[i] / k))
    }
    ans.push(sum)
}
console.log(ans.join('\n'));

// 17427 응용했더니 시간초과가 난다 일단 패스

// [1] [1, 2] [1, 3] [1, 2, 4] [1, 5] 
// [1, 2, 3, 6] [1, 7] [1, 2, 4, 8] [1, 3, 9] [1, 2, 5, 10]

// 1 => 10개 (10 / 1 = 10)

// 2 => 5개 (10 / 2 = 5)

// 3 => 3개 (10 / 3 = 3.xxx)

// 4 => 2개 (10 / 4 = 2.xxx)

// 5 => 2개 (10 / 5 = 2)

// 6 => 1개 (10 / 6 = 1.xxx)

// 7 => 1개 (10 / 7 = 1.xxx)

// 8 => 1개 (10 / 8 = 1.xxx)

// 9 => 1개 (10 / 9 = 1.xxx)

// 10 => 1개 (10 / 10 = 1)

// 따라서 i * Math.floor(num/i) 가 된다 ㄹㅇ개신기하네
