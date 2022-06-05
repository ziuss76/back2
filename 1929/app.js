const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let N = +input[0];
let M = +input[1];

let prime = new Array(M + 1).fill(true);

prime[0] = false;
prime[1] = false;

function result() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(M)); i++){
        if(prime[i]) {
            let m = 2;
            while (i * m <= M){
                prime[i * m] = false;
                m++;
            }
        }
    }
    let results = [];
    for (let i = N; i <= M; i++){
        if (prime[i]) {
            results.push(i);
        }
    }
    console.log(results.join('\n'));
}
result();


//왜 제곱근 까지만 계산?
// 제곱근으로 나누어 떨어지면 제곱근의 배수이므로 소수가 아니게 됨 
// 49의 제곱근은 7, 즉 7이 가장 큰 소수 판별용 배수가 된다.
// 1, 7, 49 