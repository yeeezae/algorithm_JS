//01. 나머지 구하기
function solution(num1, num2){
  var answer = num1 % num2
  return answer
}

//02-1. 중앙값 구하기
//정렬 - 베열중에 제일 작은값, 찾으면 새 배열에, 원래 배열에서 넣었던거 지우기(반복)
//가운데 까내기 = array[Math.floor(n/2)]
function solution(array) {
  let newArray = [] 
  for (let arrayCnt = 0; arrayCnt < array.length; arrayCnt++){
    let minNumber = 1000
    for (let i = 0; i < array.length; i++){
      if(minNumber > array[i]){
          minNumber = array[i]
        }
      }
      newArray.push(minNumber)
      for (let j = 0; j < array.length; j++){
        if(minNumber === array[j]){
          array[j] = 1000
          break
      }
    }
  }
  return newArray[Math.floor(array.length/2)]
}

//02-2.
function solution(array){
  return array.sort((a,b) => a-b)[Math.floor(array.length/2)]
}

//03. 최빈값 구하기
//가장 자주 나오는 값
//앞에서부터 차례로 원소를 확인하면서 갯수를 센다.
//최빈값을 그떄그떄 기록한다
function solution(array){
  const soltedArray = array.sort((a,b) => a-b)
  let choi = -1         // 최빈값이 뭔지 
  let choiRepeatCnt = 0 // 최빈값이 될때 몇번 반복해서 된건지
  let repeatCnt = 0     //현재 똑같은 숫자가 몇번 등장?
  let beforeNumber = -1 // 지금 보고 있는 숫자의 이전 숫자
  let isDupChoi = false //최빈값이 중복되었는지
  for (let i = 0; i < array.length; i++){
    if (beforeNumber !== array[i]){
      repeatCnt = 1
    }else{
      repeatCnt += 1
    }

    // 중복이 나왔을때
    if(repeatCnt === choiRepeatCnt && choi !== array[i]){
      isDupChoi = true
    }

    if(repeatCnt > choiRepeatCnt){
      choi = array[i]
      choiRepeatCnt = repeatCnt
      isDupChoi = false
    }
    beforeNumber = array[i]
  }
  if(isDupChoi) return -1
  return choi
}

//04. 홀수 구하기
function solution(n) {
  var answer = []
  for(let i = 0 ; i <= n; i++){
    if (i % 2 === 1){
      answer.push(i)
    }
  }
  return answer.sort((a,b) => a-b)
}