//01. 옷가게 할인받기
//순서 순서대로 이해
function solution(price) {
  if(price >= 500000){
    return Math.floor(price * 0.8)
  }
  if(price >= 300000){
    return Math.floor(price * 0.9)
  }
  if(price >= 100000){
    return Math.floor(price * 0.95)
  }
  return price
}

//02. 아이스 아메리카노
//배열 리턴하는 방법 확인
function solution(money) {
  const coffeeCnt = Math.floor(money / 5500)
  const coffeePrice = money % 5500
  return [coffeeCnt, coffeePrice]
}

//03. 나이출력
function solution(age) {
  return 2022 - age + 1
}

//04. 배열 뒤집기
//잡스 문법 사용
function solution(num_list) {
  return num_list.reverse()
}

//직접 구현
//[1,2,3,4,5]
function solution(num_list) {
  const newArray = []
  for (let i = num_list.length -1; i >= 0; i--){
    newArray.push(num_list[i])
  }
  return newArray
}

