//01. 영어가 싫어요
const numberStrings = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
function solution(numbers) {
  let answer = ''
  for(let i = 0; i < numbers.length; ){
    const compareString = numbers[i] + numbers[i+1]
    for(let j=0; j < numberStrings.length; j++){
      const numberString = numberStrings[j]
      const compareNumberString = numberString[0] + numberString[1]
      if(compareString === compareNumberString){
        answer += String(j)
        i += numberString.length
        break
      }
    }
  }
  return Number(answer)
}
function solution(numbers) {
    let numberStrings = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numberStrings.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}
function solution(numbers) {
    const numberStrings = {
        zero: 0, one: 1, two: 2, three: 3, four: 4,
        five: 5, six: 6, seven: 7, eight: 8, nine: 9
    };

    const num = numbers.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g, (v) => {
        return numberStrings[v];
    });

    return Number(num);
}

//02. 인덱스 바꾸기
function solution(my_string, num1, num2) {
  let answer = ''
  for(let i =0; i < my_string.length; i++){
    if(i === num1){
      answer += my_string[num2]
    }else if(i === num2){
      answer += my_string[num1]
    }else{
      answer += my_string[i] 
    } 
  }
  return answer
}

//03. 한번만 등장한 문자
const obj = {}
//obj.a
//obj['a']
function solution(s) {
  var answer = []
  for(let i = 0; i < s.length; i++){
    const item = s[i]
    if(obj[item]){
      obj[item] += 1
    }else{
      obj[item] = 1
    }
  }
  //객체 꺼내기
  const objArray = Object.entries(obj)
  for(let i = 0; i < objArray.length; i++){
    const item = objArray[i] //['a', 1]
    if(item[1] === 1){
      answer.push(item[0])
    }
  }
  let result = ''
  const sortedArray = answer.sort((a,b) => a.charCodeAt(0)-b.charCodeAt(0)) 
  //for(let i = 0 ; i<sortedArray.length; i++){
  //  result += sortedArray[i]
  //}
  // join -> ['a' , 'b'] => 'ab'
  return sortedArray.join('')
}
//04. 약수 구하기
function solution(n) {
  var answer = []
  for(let i = 1; i <=n; i++){
    if(n % i === 0){
      answer.push(i)
    }
  }
  return answer
}
