const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n')

let N = input[0].split('')
let M = input[1];
let broken = input[2].split(' ').map(Number);

function remocon(N, broken){
    let button = ['0','1','2','3','4','5','6','7','8','9'];
     
}
