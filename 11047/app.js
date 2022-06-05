const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, output: process.stdout, });

let input = [];

rl.on("line", function (line) {
    input.push(line)
}).on("close", function () {

let nk = input[0].split(' ').map(val => +val);//tmp에 n, k 저장

let list = input.slice(1).map(val => +val);

list.reverse();

solution(nk[0], nk[1], list)

function solution(n, k, list){
    let count = 0;

    for(let i of list){
        if (k === 0){
            break;
        }
        if (k >= i){
            count += parseInt(k / i);
            k = k % i;
        }
    }
    console.log(count);
}

process.exit(); });