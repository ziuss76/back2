const fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const candy = input.map(x => x.split(''))

let max = 1;
for(let i = 0; i<N; i++){
  if(max==N) break; // 최대값이면 그만함. 
  for(let j = 0; j<N; j++){
    if(max==N) break; // 최대값이면 그만함. 

    //안바꾸기
      let cntColumn = 1;
      for(let k = i-1; k>-1; k--){
        if(candy[k][j]==candy[i][j]){
          cntColumn++;
        }else{
          break;
        }
      }
      for(let k = i+1; k<N; k++){
        if(candy[k][j]==candy[i][j]){
          cntColumn++;
        }else{
          break;
        }
      }
      max = Math.max(cntColumn,max)

      let cntRow = 1;
      for(let k = j-1; k>-1; k--){
        if(candy[i][k]==candy[i][j]){
          cntRow++;
        }else{
          break;
        }
      }
      for(let k = j+1; k<N; k++){
        if(candy[i][k]==candy[i][j]){
          cntRow++;
        }else{
          break;
        }
      }
      max = Math.max(cntRow,max)


    /// 가로 바꾸기
    if(j+1<N && candy[i][j]!=candy[i][j+1]){
      let cnt1 = 1;
      for(let k = i-1; k>-1; k--){
        if(candy[k][j]==candy[i][j+1]){
          cnt1++;
        }else{
          break;
        }
      }
      for(let k = i+1; k<N; k++){
        if(candy[k][j]==candy[i][j+1]){
          cnt1++;
        }else{
          break;
        }
      }
      max = Math.max(cnt1,max)

      let cnt2 = 1;
      for(let k = i-1; k>-1; k--){
        if(candy[k][j+1]==candy[i][j]){
          cnt2++;
        }else{
          break;
        }
      }
      for(let k = i+1; k<N; k++){
        if(candy[k][j+1]==candy[i][j]){
          cnt2++;
        }else{
          break;
        }
      }
      max = Math.max(cnt2,max)

      let cnt3 = 1;
      for(let k = j-1; k>-1; k--){
        if(candy[i][k]==candy[i][j+1]){
          cnt3++;
        }else{
          break;
        }
      }
      max = Math.max(cnt3,max)

      let cnt4 = 1;
      for(let k = j+2; k<N; k++){
        if(candy[i][k]==candy[i][j]){
          cnt4++;
        }else{
          break;
        }
      }
      max = Math.max(cnt4,max)
    }

    //세로바꾸기
    if(i+1<N&&candy[i][j]!=candy[i+1][j]){
      let cnt1 = 1;
      for(let k = j-1; k>-1; k--){
        if(candy[i][k]==candy[i+1][j]){
          cnt1++;
        }else{
          break;
        }
      }
      for(let k = j+1; k<N; k++){
        if(candy[i][k]==candy[i+1][j]){
          cnt1++;
        }else{
          break;
        }
      }
      max = Math.max(cnt1,max)

      let cnt2 = 1;
      for(let k = j-1; k>-1; k--){
        if(candy[i+1][k]==candy[i][j]){
          cnt2++;
        }else{
          break;
        }
      }
      for(let k = j+1; k<N; k++){
        if(candy[i+1][k]==candy[i][j]){
          cnt2++;
        }else{
          break;
        }
      }
      max = Math.max(cnt2,max)


      let cnt3 = 1;
      for(let k = i-1; k>-1; k--){
        if(candy[k][j]==candy[i+1][j]){
          cnt3++;
        }else{
          break;
        }
      }
      max = Math.max(cnt3,max) 

      let cnt4 = 1;
      for(let k = i+2; k<N; k++){
        if(candy[k][j]==candy[i][j]){
          cnt4++;
        }else{
          break;
        }
      }
      max = Math.max(cnt4,max) 
    }
  }
}

console.log(max)
