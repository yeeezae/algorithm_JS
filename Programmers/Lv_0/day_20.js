//01. 직사각형 넓이 구하기
function solution(dots) {
  let garo = 0
  let sero = 1
  for(let i=0; i <dots.length-1; i++){
    //구조분해 할당
    const [x, y] = dots[i]
    const [nx, ny] = dots[i+1]
    garo = Math.max(Math.abs(nx - x), garo)
    sero = Math.max(Math.abs(ny - y), sero)
  }
  return garo*sero
}

//02. 캐릭터의 좌표
function solution(keyinput, board) {
  let x = 0
  let y = 0
  const boardXSize = Math.floor(board[0] / 2)
  const boardYSize = Math.floor(board[1] / 2)
  for(let i =0; i <keyinput.length;i++){
    const item = keyinput[i]
    if(item === 'left' && x > -boardXSize){
      x--
    }
    if(item === 'right' && x < boardXSize){
      x++
    }
    if(item === 'up' && y < boardYSize){
      y++
    }
    if(item === 'down' && y > -boardYSize){
      y--
    }
  }
  return [x, y]
}

//03. 최댓값 만들기(2)
function solution(numbers) {
  let maxValue = -10000*10000-1
  for(let i = 0; i<numbers.length;i++){
    for(let j =i+1;j<numbers.length;j++){
      const item1 = numbers[i]
      const item2 = numbers[j]
      maxValue = Math.max(maxValue, item1*item2)
    }
  }
  return maxValue
}

function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}

//04. 다항식 더하기
function solution(polynomial) {
  const values = polynomial.split(' * ')
  let x = 0
  let c = 0 //상수항
  for(let i =0; i <values.length;i++){
    const item = values[i]
    if(item[item.length-1] !== 'x'){
      c += Number(item) 
    }else{
      const num = item.split('x')[0]
      if (num === ''){
        x += 1
      }else{
        x += Number(num)
      }
    }
  }
  let answer = ''
  if(x === 1){
    answer += 'x'
  }
  if(x > 1){
    answer += `${x}x`
  }
  if(x === 0 && c > 0 ){
    answer += c
  }else if(c > 0){
    answer += ` + ${c}`
  }
  return answer
}

//20일차 04번문제 다시 풀어보기