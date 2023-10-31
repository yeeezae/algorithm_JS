//01. 개미군단
//장군개미 사용 조건으로
function solution(hp){
  let cnt = 0
  let arr =[5,3,1]
  for(let i = 0; i < arr.length; i++){
    let item = arr[i]
    if(hp >= item){
      cnt += Math.floor(hp / item)
      hp -= Math.floor(hp / item) * item
    }
  }
  return cnt
}

//02. 모스부호(1)
//key: value
//const - 최대한 사용, 새로운 값을 넣을 수 없음
const morse = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}
function solution(letter) {
  var answer = ''
  let currentMorse = ''
  for(let i = 0; i < letter.length; i++){
    const item = letter[i]
    if(item === ' '){
      answer += morse[currentMorse]
      currentMorse = ''
    }else{
      currentMorse += item

    }
  }
  answer += morse[currentMorse]
  return answer;
}

//자바스크립트 기능
const morse02 = { 
  '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
  '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
  '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
  '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
  '-.--':'y','--..':'z'
}
function solution(letter) {
  var answer = ''
  const splitedLetter = letter.split(' ')
  for(let i = 0; i < splitedLetter.length; i++){
    answer += morse[splitedLetter[i]]
  }
  return answer;
}

//03. 가위바위보
//객체 사용
const win ={
  "2" : "0",
  "0" : "5",
  "5" : "2",
}
function solution(rsp) {
  var answer = '';
  for (let i = 0; i< rsp.length; i++){
    const item = rsp[i]
    answer += win[item]
  }
  return answer;
}

//04. 구술을 나누는 경우의 수
//조합문제 (+순열)
//n! = n * (n-1) * ... * 1
//nCr = n! / ((n-r)! *r!)
//오버플로 이슈로 
// r! / nPr+1 로 풀이
function solution(balls, share) {
  var answer = 0;
  const n = balls
  const r = share

  let one = 1
  for (let i = n; i >= n-r+1; i--){
    one *= i
  }
  let three = 1
  for (let i = r; i >= 1; i--){
    three *= i
  }
  answer = Math.floor(one / three)
  return answer;
}