const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [A, B] = fs.readFileSync(filePath).toString().split(' ').map(Number)
let i = A
let j = B

while (i % j !== 0){
    let n = i % j;
    if (n !== 0){
        i = j;
        j = n;
    }
}

console.log(j);
console.log(A * B / j);

//유클리드 호제법을 이용해 최대 공약수 구하기
// 최소공배수 = (A * B) / 최대공약수

// 1071 과 1029 의 최대공약수
// i = j * 몫 + n
// 1071 = 1029 * 1 + 42
// 1029 = 42 * 24 + 21
// 42 = 21 * 2 + 0

// i = j로, j = n 으로 바꿔준다. 나머지가 0일 때까지
