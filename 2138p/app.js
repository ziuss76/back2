const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
  
  console.log(Solution());
  
  function Solution() {
	const compare = (arr) => {
	  for (let i = 0; i < N; i++) {
		if (arr[i] !== output[i]) return false;
	  }
  
	  return true;
	};
  
	const switching = (arr, idx) => {
	  for (let i = idx - 1; i <= idx + 1; i++) {
		if (i >= 0 && i < arr.length) {
		  arr[i] = arr[i] ^ 1;
		}
	  }
	};
  
	const N = Number(input[0]);
  
	// 0번째 전구 스위치 off(기본값)
	const zeroOff = input[1].split('').map(Number);
  
	// 0번째 전구 스위치 on
	const zeroOn = zeroOff.slice();
	switching(zeroOn, 0);
  
	const output = input[2].split('').map(Number);
  
	let onCnt = 1;
	let offCnt = 0;
	for (let i = 1; i < N; i++) {
	  if (zeroOff[i - 1] !== output[i - 1]) {
		switching(zeroOff, i);
		offCnt++;
	  }
  
	  if (zeroOn[i - 1] !== output[i - 1]) {
		switching(zeroOn, i);
		onCnt++;
	  }
	}
  
	let result = -1;
  
	// 둘 다 결과값이 같은 경우
	if (compare(zeroOn) && compare(zeroOff)) {
	  result = Math.min(offCnt, onCnt);
	  return result;
	}
  
	// 둘 중 하나만 결과값이 같은 경우
	if (compare(zeroOn)) {
	  result = onCnt;
	  return result;
	} else if (compare(zeroOff)) {
	  result = offCnt;
	  return result;
	}
  
	return result;
  }
  