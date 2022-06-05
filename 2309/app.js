const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x) => +x);

let arr;

for (let i = 0; i < 8; i++){
    for (let j=i+1; j<9; j++){
        if (input.reduce((a,c) => a + c) === input[i] + input[j] + 100){
            arr = input.filter(x => x !== input[i] && x !== input[j]);
            break;
        }
    }
}
arr.sort((a,b) => a - b);
for(let i=0; i<7; i++){
    console.log(arr[i]);
}