//01. 가운데 글자 가져오기
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