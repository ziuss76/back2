const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const num = input[1].split(' ');
let ans = Math.min(...num) * Math.max(...num);
console.log(ans);