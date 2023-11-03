//01. 컨트롤 제트
// 1. 0 ~ 9사이 숫자
// 2. Z
// 3. 공백
function solution(s) {
  var answer = 0;
  //100
  let numbers = []
  let collectNumber = ''
  for(let i = 0; i <s.length; i++){
    const item = s[i]
    if(item === 'Z'){
      numbers.pop()
    }else if(item === ' '){
      numbers.push(Number(collectNumber))
      collectNumber = ''
    }else{
      //숫자
      collectNumber += item
    }
  }
  if(collectNumber !== ''){
    numbers.push(Number(collectNumber))
  }
  // numbers <= 우리가 더해야할 모든 숫자 배열
  let sum = 0
  for (let i=0; i<numbers.length; i++){
    sum += numbers[i]
  }
  return sum;
}

function solution(s){
  let sum = 0
  const splittedArray = s.split(' ')
  for(let i =0; i < splittedArray.length; i++){
    const item = (splittedArray[i])
    if(item !== 'Z'){
      sum += Number(item)
    }else{
      //이전값을 빼준다
      sum -= Number(splittedArray[i-1])
    }
  }
  return sum
}


//02. 배열 원소의 길이
function solution(strlist) {
  const answer = [];
  for(let i = 0; i <strlist.length; i++){
    const item = strlist[i]
    answer.push(item.length)

  }
  return answer;
}

//03. 중복된 문자 제거
//my_string과 answer를 비교해봐라
function solution(my_string) {
  var answer = '';
  for(let i = 0; i < my_string.length; i++){
    const item = my_string[i]
    let existed = false
    for(let j = 0; j < answer.length; j++){
      if(item === answer[i]){
        existed = true
        break
      }
    }
    if (!existed){
      answer += item
    }
  }
  return answer
}

//04. 삼각형의 완성조건(1)
function solution(sides) {
  let max = -1
  let maxIdx = -1
  for(let i = 0; i < sides.length; i++){
    const item = sides[i]
    if(max < item){
      max = item
      maxIdx = i
    }
  }
  let sum = 0
  for(let i = 0; i < sides.length; i++){
    if(i !== maxIdx){
      sum += sides[i]
    }
  }
  return max < sum ? 1 : 2
}

function solution(sides) {
  const sortedSides = sides.sort((a,b) => a-b)
  const sum = sortedSides[0] + sortedSides[1]
  const max = sortedSides[2]
  return max < sum ? 1 : 2
}

