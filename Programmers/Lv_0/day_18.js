//01. 문자열안에 문자열
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2
}

//02.제곱수 판별하기
function solution(n) {
  for(let i = 1 ;; i++){
    if(i*i === n){
      return 1
    }
    if(i*i > n){
      return 2
    }
  }
}

//03.세균증식
function solution(n, t) {
  const answer = 2**t * n
  return answer
}

//04. 문자열 정렬하기
function solution(my_string) {
  const answer = my_string.toLowerCase()
  const strArray = [...answer]
  return strArray.sort().join('')
}
