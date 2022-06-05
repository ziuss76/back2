const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input.shift())

function solution (N, input){
    let time = new Array(N);

    for (let i = 0; i < N; i++){
        let [start, end] = input[i].toString().trim().split(' ').map(Number)
        time.push([start, end])
    }

    time.sort(function(a, b){
        if(a[1] === b[1]){
            return a[0] - b[0]
        } return a[1] - b[1]
    })

    let answer = 0;
    let end = 0;

    time.forEach(t => { if(end <= t[0]){
        answer += 1;
        end = t[1]
    }
    })
    return answer
}
console.log(solution(N, input));

// 안 겹치게 한 줄로 이어 가기  = 0 3 7 10 번째 회의
// 1 ~ 4 / 5 ~ 7 / 8 ~ 11 / 12 ~ 14  즉 최대 4개 가능