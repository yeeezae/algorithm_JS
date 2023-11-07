//01. 숫자 찾기
function solution(num, k) {
  const arr = String(num)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === String(k)){
      return i + 1
    }
  }
  return -1
}

//02. n의 배수 고르기
//filter 메소드 쓰기
function solution(n, numlist) {
  var answer = []
  for(let i=0; i<numlist.length; i++){
    if(numlist[i] % n === 0){
      answer.push(numlist[i])
    }
  }
  return answer
}

function solution(n, numlist) {
  return numlist.filter(item =>item % n === 0);
}

//03. 자릿수 더하기
function solution(n) {
  var answer = 0
  const arr = String(n)
  for(let i=0; i<arr.length; i++){
    answer += Number(arr[i])
  }
  return answer
}

//04. OX 퀴즈
//quiz 배열의 원소를 하나씩 꺼낸다
//그 원소를 '_'으로 나눠서 숫자의 연산자를 나눈다
//"3 - 4 = -1 => ["3", "-", "4", "=", "-1"]
//실제로 계산해보고 return
function solution(quiz) {
  var answer = []
  for(let i=0; i<quiz.length; i++){
    const arr =quiz[i].split(' ')
    const firstNum = Number(arr[0])
    const opp = arr[1]
    const secondNum = Number(arr[2])
    const result = Number(arr[4])
    if(opp === "+"){
      if(firstNum + secondNum === result){
        answer.push("O")
      }else{
        answer.push("X")
      }
    }
    else{
      if(firstNum - secondNum === result){
        answer.push("O")
      }else{
        answer.push("X")
      }
    }
  }
  return answer
}


function solution(quiz) {
  var answer = []
  for(let i=0; i<quiz.length; i++){
    const [firstNum, opp, secondNum, _, result] =quiz[i].split(' ').map((v, index) => {
      if(index === 1){
        return v
      }
      return Number(v)
    })
    const calResult = opp === '+' ? firstNum + secondNum : firstNum - secondNum
    if(calResult === result){
      answer.push("O")
    }else{
      answer.push("X")
    }
  }
  return answer
}

