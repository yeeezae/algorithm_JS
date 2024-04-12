//01. 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  strings.sort((a,b) => {
    let first = a[n]
    let second = b[n]
    if(first === second) return (a>b) - (a<b)
    else return (first > second) - (first < second)
  })
  return strings
}

//02. 문자열 내 p와 y의 개수
//p -> cnt++ y -> cnt-- 해서 0이면 갯수가 같은것이다
function solution(s){
  let cnt = 0
  s = s.toLowerCase()
  for(let i = 0; i<s.length; i++){
    if (s[i] === 'p') cnt++
    else if(s[i] === 'y') cnt-- 
  }
  return cnt === 0 ? true : false
}

//03. 문자열 내림차순으로 배치하기
//문자열 나눠서 정렬하고 역순으로 배치 후 다시 문자열로 합치기
function solution(s) {
  return s.split('').sort().reverse().join('')
}

//04. 문자열 다루기 기본
///^-?\d+$/.test(s) -> 문자열에 정수가 있는지 확인
function solution(s) {
  return (s.length === 4 ||s.length === 6) && s == parseInt(s)
}
// function solution(s) {
//   return (s.length === 4 || s.length === 6) && /^-?\d+$/.test(s);
// }

//05. 서울에서 김서방 찾기
//seoul.indexOf -> 인덱스 값 찾기
function solution(seoul){
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}
