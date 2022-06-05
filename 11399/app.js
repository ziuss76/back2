const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = input.shift();
let P = input[0].split(' ').map(Number).sort((a,b) => a - b)
let answer = 0;
let before = 0;
for(let i = 0; i < N; i++){
    answer += before + P[i];
    before += P[i];
}
console.log(answer);