const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = +input[0];
const dist = input[1].split(' ').map(v => BigInt(v))
const price = input[2].split(' ').map(v => BigInt(v))

let current = price[0];
let sum = BigInt(0); 
// dist와 current 라는 BigInt를 곱하기에 여기 0 도 BigInt로 만들어줘야함

for (let i = 0; i < price.length -1; i++ ){
    if (current > price[i]){
        current = price[i];
    }
    sum += current * dist[i]
}
console.log(sum.toString());
