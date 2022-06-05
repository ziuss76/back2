const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

for(let x of input){
    let i = 1
        count = 0;
    while (true) {
        count += 1;
        if (i % x === 0){
            console.log(count);
            break
        }
        i = (i % x)* 10 + 1
    }
}
