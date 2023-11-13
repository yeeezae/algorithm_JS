//01. 모음 제거
function solution(my_string) {
  let answer = '';
  for(let i = 0; i < my_string.length; i++){
    if(my_string[i] ==='a'){
      continue
    }
    if(my_string[i] ==='e'){
      continue
    }
    if(my_string[i] ==='i'){
      continue
    }
    if(my_string[i] ==='o'){
      continue
    }
    if(my_string[i] ==='u'){
      continue
    }
    answer += my_string[i]
  }
  return answer
}

function solution(my_string) {
  let answer = ''
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for(let i = 0; i < my_string.length; i++){
    const item = my_string[i] 
    let isVowel = false
    for(let j = 0; j < vowels.length; j++){
      if (item === vowels[j]){
        isVowel = true
        break
      }
      
    }
    if (isVowel) continue
    answer += item
  }
  return answer
}

//02. 문자 정렬하기
function solution(my_string) {
  var answer = [];
  for(let i = 0; i < my_string.length; i++){
    const item = Number(my_string[i])
    if(Number.isNaN(item)){
      continue
    }
    answer.push(item)
  }
  return answer.sort((a,b) => a-b)
}

//03. 숨어있는 숫자의 덧셈
function solution(my_string) {
  var answer = 0
  for(let i = 0; i < my_string.length; i++){
    const item = my_string[i]
    if(Number.isNaN(Number(item))){
      continue
    }
    answer += Number(item)
  }
  return answer
}

//04. 소인수분해
function solution(n) {
  var answer = []
  for(let i = 2; n !==1; i++){
    if(n % i === 0){
      while(n%i === 0){
        n /= i
      }
      answer.push(i)
    }
  }
  return answer
}


