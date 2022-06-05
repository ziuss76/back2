const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(' ')

let num = +input[0];
let sum = 0;

for (let i = 1; i <= num; i++){
    sum += i * Math.floor(num / i);
}

console.log(sum);

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
