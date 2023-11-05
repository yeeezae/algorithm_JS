//01. 가까운 수
function solution(array, n) {
  let answer = 0
  let min = 9999999
  const sortArray = array.sort((a,b) => a - b)
  for(let i =0 ; i < sortArray.length; i++){
    const item = sortArray[i]
    if (min > Math.abs(n - item)){
      min = Math.abs(n - item)
      answer = item
    }
  }
  return answer
}

//02. 369 게임
function solution(order) {
  let cnt = 0
  const stringOrder = String(order)
  for(let i =0 ; i < stringOrder.length; i++){
    const item = stringOrder[i]
    if (item === '3' || item === '6' || item === '9'){
      cnt += 1
    }
  }
  return cnt
}

//03. 암호 해독
function solution(cipher, code) {
  let answer = ''
  for(let i = code-1 ; i < cipher.length; i += code){
    const item = cipher[i]
    answer += item
  }  
  return answer
}

//04. 대문자와 소문자
//아스키값은 소문자가 대문자보다 크다
function solution(my_string) {
  var answer = ''
  for(let i = 0; i < my_string.length; i++){
    const ch = my_string[i]
    const isCapital = ch < 'a'
    if(isCapital){
      answer += ch.toLowerCase()
    }else{
      answer += ch.toUpperCase()
    }
  }
  return answer
}