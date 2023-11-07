//01. 특정 문자 제거하기
//배열에 문자를 넣는데 뺄 문자랑 달라야지 넣어줌
function solution(my_string, letter) {
  var answer=[]
  for (let i = 0 ; i < my_string.length ; i ++){
    if (my_string[i] !== letter){
      answer += my_string[i]
    }
  }
  return answer
}

//02. 각도기
//&& 연산자 사용해줘야함
function solution(angle) {
  if (0 < angle && angle < 90){
    return 1
  }
  if(angle === 90){
    return 2
  }
  if(90 < angle && angle < 180){
    return 3
  }
  return 4
}
//삼항연산자
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

//03. 양꼬치 문제
//n*12000 = 양꼬치값
//k*2000 = 음료수 값
function solution(n, k) {
  var yangPrice = n * 12000
  var discountNumber =  Math.floor(n / 10)
  var drinkPrice = (k - discountNumber) * 2000
  return yangPrice + drinkPrice
}

//04. 짝수의 합
function solution(n) {
  var sum = 0
  for(let i = 1; i <= n; i++){
    if (i % 2 === 0){
      sum += i
    } 
  } 
  return sum
}