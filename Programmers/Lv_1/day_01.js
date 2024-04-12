//01. 가운데 글자 가져오기
//s.substr() 길이만큼 문자 가져오기
function solution(s){
  let a = Math.floor(s.length/2)
  return s.length % 2 ? s.substr(a, 1) : s.substr(a-1, 2)
}

//02. 같은 숫자는 싫어
function solution(arr){
  let answer = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i+1]) answer.push(arr[i]) 
  }
  return answer
}

//03. 나누어 떨어지는 숫자 배열
function solution(arr, divisor){
  let answer = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % divisor === 0) answer.push(arr[i])
    answer.sort((a,b) => a-b)
  }
  return answer.length === 0 ? [-1] : answer
}

//04. 두 정수 사이의 합
//temp로 a,b 위치 바꾸기
function solution(a,b){
  let answer = 0
  if (a === b){
    return a
  }else{
    if (a > b){
      let temp = a
      a = b
      b = temp
    }
    for(let i = a; i <=b; i++){
      answer += i
    }
  }
  return answer
}