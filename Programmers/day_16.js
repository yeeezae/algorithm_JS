//01. 편지
function solution(message) {
  let answer = 0
  answer = message.length * 2
  return answer
}

//02. 가장 큰 수 찾기
function solution(array) {
  let max_num = -1
  let max_index = -1
  for(let i = 0; i<array.length; i++){
    if(max_num < array[i]){
      max_num = array[i]
      max_index = i
    }
  }
  return [max_num, max_index]
}

//03. 문자열 계산하기
//문자와 숫자, 연산자 구분
//split 함수 활용
// "3 + 5".split(' ') => ["3", "+", "5"]
function solution(my_string) {
  const arr = my_string.split(' ')
  let answer = Number(arr[0])
  for(let i = 1; i <arr.length; i += 2){
    const op = arr[i]
    const num = Number(arr[i+1])
    if(op === "+"){
      answer += num
    }else if(op === "-"){
      answer -= num
    }
  }
  return answer
}

//04. 배열의 유사도
//있는지 없는지
function solution(s1, s2) {
  var answer = 0

  for(let i = 0; i< s1.length; i++){
    const s1Item = s1[i]
    for(let j = 0; j < s2.length; j++){
      const s2Item = s2[j]
      if(s1Item === s2Item){
        answer += 1
      }
    }
  }
  return answer
}