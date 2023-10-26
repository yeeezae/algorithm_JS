//01. 문자열 뒤집기
//문자열도 인덱스를 통해 꺼낼 수 있음
function solution(my_string){
  const newString=''
  for(let i = my_string.length -1 ; i >= 0; i--){
    newString += my_string[i]
  }
  return newString
}

const { realpath } = require('fs')
//02. 직각삼각형 출력
//이중 for문
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let input =[]

rl.on('line', function(line){
  input = line.split(' ')
}).on('close', function(){
  const n = Number(input[0])

  for(let i = 1; i <=n; i++){
    let starStr = ""
    for(let j = 0; j < i; j++){
      starStr += "*"
    }
    console.log(starStr)
  }
})

//03. 짝수, 홀수 갯수
function solution(num_list){
  let evenCnt = 0
  let oddCnt = 0
  for (let i = 0; i < num_list.length; i++){
    if (num_list[i] % 2 === 0){
      evenCnt += 1
    }else{
      oddCnt += 1
    }
  }
  return [evenCnt, oddCnt]
}

//04. 문자 반복 출력하기
function solution(my_string, n){
  var answer = ""
  for(let i = 0; i < my_string.length; i++){
    const repeatCharacter = my_string[i]
    for(let j = 0; j < n; j++){
      answer += repeatCharacter
    }
    return answer
  }
}