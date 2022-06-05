const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('-')

let lastNums = []

for (i of input){
    let nSum = 0;
    let num = i.split('+')  // [55 , [50, 40]]
    for (n of num){
        nSum += Number(n)
    }
    lastNums.push(nSum)
}

let result = lastNums[0]

for (let i = 1; i < lastNums.length; i++){
    result -= lastNums[i]
}
console.log(result);
