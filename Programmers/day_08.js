//01. 배열 자르기
function solution(numbers, num1, num2) {
  var newNumbers = []
  for(let i = num1; i <= num2; i++){
    newNumbers.push(numbers[i])
  }
  return newNumbers;
}

//02.외계행성의 나이 문제
function solution(age) {
  var answer = '';
  const stringAge = String(age) //문자열로 변환
  for(let i = 0; i < stringAge.length; i++){
    if(stringAge[i] === '0'){
      answer += 'a'
    }
    if(stringAge[i] === '1'){
      answer += 'b'
    }
    if(stringAge[i] === '2'){
      answer += 'c'
    }
    if(stringAge[i] === '3'){
      answer += 'd'
    }
    if(stringAge[i] === '4'){
      answer += 'e'
    }
    if(stringAge[i] === '5'){
      answer += 'f'
    }
    if(stringAge[i] === '6'){
      answer += 'g'
    }
    if(stringAge[i] === '7'){
      answer += 'h'
    }
    if(stringAge[i] === '8'){
      answer += 'i'
    }
    if(stringAge[i] === '9'){
      answer += 'j'
    }
  }
  return answer;
}

//배열에 담는 방법
function solution(age) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    var answer = "";
    age = age.toString();

    for(let i=0; i<age.length; i++){
        answer += alphabet[age[i]];
    }
    return answer;
}

//아스키코드 이용
//자바문법 사용
//컴퓨터가 문자를 어떻게 저장하는지?
function solution(age) {
  var answer = '';
  const stringAge = String(age) //문자열로 변환
  for(let i = 0; i < stringAge.length; i++){
    answer += String.fromCharCode(stringAge[i].charCodeAt(0) + 49)
  }
  return answer;
}

//03. 진료 순서 정하기
//객체 사용
function solution(emergency) {
  let newEmergency =[]
  for(let i = 0; i < emergency.length; i++){
    newEmergency.push({value: emergency[i], idx: i})
  }
  newEmergency.sort((a,b) => b.value-a.value)  
  var answer = new Array(emergency.length); //배열 크기
  for(let i = 0; i < newEmergency.length; i++){
    let item = newEmergency[i]
    answer[item.idx] = i + 1
  }
  return answer;
}

//04. 순서쌍의 개수
//공약수 구하는 문제
function solution(n) {
  var answer = 0;
  let i = 1
  while(true){
    if(i > n){
      break
    }
    if (n % i === 0){
      answer += 1
    }
    i += 1
  }
  
  return answer;
}