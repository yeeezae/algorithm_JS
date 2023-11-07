//01. 점의 위치 구하기
function solution(dot) {
  //구조문의 할당
  const [x,y] = dot
  if (x>0 && y>0){
    return 1
  }
  if (x<0 && y>0){
    return 2
  }
  if (x<0 && y<0){
    return 3
  }
  if (x>0 && y<0){
    return 4
  }
}

//02. 2차원으로 만들기
//배열 문제
function solution(num_list, n) {
  const result = []
  let tempArray =[]
  for(let i=0;i<num_list.length;i++){
    const item = num_list[i]
    tempArray.push(item)
    if(tempArray.length === n){
      result.push(tempArray)
      tempArray = []
    }
  }
  return result
}

//03. 공던지기 문제
function solution(numbers, k) {
  let cnt = 1
  for(let i =0 ;; i+=2){
    i %= numbers.length
    const item = numbers[i]
    if(cnt === k){
      return item
    }
    cnt += 1
  }
}

//04. 배열 회전시키기
function solution(numbers, direction) {
  const answer = [];
  if(direction === 'right'){
    answer.push(numbers[numbers.length - 1])
    for (let i = 0; i < numbers.length -1;i++){
      answer.push(numbers[i])
    }
  }else{
    for(let i =1;i<numbers.length;i++){
      answer.push(numbers[i])
    }
    answer.push(numbers[0])
  }
  return answer
}
//스택, 큐 문제
//현업에서는 쓰지 않을 코드
function solution(numbers, direction) {
  if(direction === 'right'){
    const lastItem = numbers.pop()
    //배열 맨앞에 넣어줌
    numbers.unshift(lastItem)
  }else{
    const firstItem = numbers.shift()
    numbers.push(firstItem)
  }
  return numbers
}