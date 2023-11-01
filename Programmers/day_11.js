//01. 주사위 개수
function solution(box, n) {
  const garo = Math.floor(box[0] / n)
  const sero = Math.floor(box[1] / n)
  const height = Math.floor(box[2] / n)
  return garo * sero * height;
}

function solution(box, n) {
  const answer = 1
  for(let i =0; i<3;i++){
    answer *= Math.floor(box[i] / n)

  }
  return answer
}


//02. 합성수 찾기
//함수로 분리 연습
const getIsCount = (i) => {
  let isCount = false
  for (let j =2; j < i-1; j++){
    if(i % j === 0){
      isCount = true
    }
  }  
  return isCount
}
function solution(n) {
  let answer = 0;
  for(let i = n; i>=1; i--){
    //i가 합성수인지 비교하는 숫자
    const isCount = getIsCount(i)
    //isCount 값으로 -> 합성수 여부를 확인할 수 있다
    if(isCount){
      answer += 1
    } 
  }
  return answer;
}

//03. 최대값 만들기(1)
//곱셈
//정렬해서 앞에 두개 곱하기
function solution(numbers) {
  const sortedNumbers  = numbers.sort((a,b) => b-a)
  return sortedNumbers[0] * sortedNumbers[1];
}

//04. 팩토리얼
const getFactorial = (i) => {
  let result = 1
  for(let v = 1; v <= i; v++){
    result *= v
  }
  return result
}
function solution(n) {
  for(let i =1; ;i++){
    const result = getFactorial(i)
    if(n < result){
      return i-1
    }
  }
}