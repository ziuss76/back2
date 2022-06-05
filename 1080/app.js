const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tmp = input[0].split(' ').map(Number);
let n = tmp[0];
let m = tmp[1];

let list = [];
let list2 = [];

//A배열
let arr = input.slice(1, n + 1);
//B배열
let arr2 = input.slice(n + 1);

//A,B 배열을 이중배열로 만들고 int형으로 변환
for (let i = 0; i < arr.length; i++) {
  list.push(arr[i].split('').map(Number));
  list2.push(arr2[i].split('').map(Number));
}

solution(n, m, list, list2);

//테이블 값 변환
function flip(x, y) {
  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      list[i][j] = 1 - list[i][j];
    }
  }
}

function solution(n, m, list, list2) {
  let count = 0; //3*3형태로 검증이므로 해당 테이블 크기에 맞게 계산하기 위해
  //i, j에 -2를한다. 3줄이니 1번 4칸이니 2번
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (list[i][j] !== list2[i][j]) {
        //3*3테이블의 제일 왼쪽 위에 값만 비교해서 틀리면 3*3테이블의 값을 전체 바꿈
        flip(i, j);
        count += 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (list[i][j] !== list2[i][j]) { //뒤집어서 만들 수 없을 때는 -1 반환
        count = -1;
        break;
      }
    }
  }
  
  console.log(count);
}