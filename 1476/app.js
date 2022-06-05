const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [E, S, M] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number)

let count = 1;

while (true) {
    if (
        (count - E) % 15 === 0 &&
        (count - S) % 28 === 0 &&
        (count - M) % 19 === 0
    ) {
        console.log(count);
        break;
    }
    else count++;
}
// 메모리 초과 무시하자