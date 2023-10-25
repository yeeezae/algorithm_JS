//수학, 배열
//01. 피자 나눠먹기(1)
//
function solution(n) {
  var answer = Math.ceil(n/7);
  return answer;
}

//02. 피자 나눠먹기(2)
//약수 개념
// i -> pizzaCount
function solution(n) {
  var answer = 0
  let i = 1
  while(true){
    if(i * 6 % n === 0){
      answer = i
      break
    }
    i += 1
  }
  return answer;
}

//03. 피자 나눠먹기(3)
function solution(slice, n) {
  var answer = Math.ceil(n/slice);
  return answer;
}

//04. 배열 평균값 구하기
function solution(numbers) {
  let sum = 0
  for(let i = 0 ; i < numbers.length ; i++){
    sum += numbers[i]
    
  }
  return sum / numbers.length 
}