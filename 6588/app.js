const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split('\n').map((x) => +x);

input.pop();

const M = Math.max(...input)
const check = new Array(M + 1).fill(false)
for (let i = 2; i <= M; i++){ // 2 3 4 5...8
    if (!check[i]) {    
        for (let k = i * i; k <= M; k += i){ // i = 2 일때, 4 6 8 10, i = 3 일때, 9, 12, 15 ,18
            check[k] = true;
        }
    }
}

let result = '';
input.map((x) => {
    for (let i = 3; i < x; i += 2){ // check[3] = 5, 즉 4보다 큰 것부터
        if(!check[i] && !check[x-i]) {
        	result += `${x} = ${i} + ${x - i}\n` // i 가 가장 작을 때 break
            break
        }
    }
})
console.log(result);

//에라토스테네스의 체