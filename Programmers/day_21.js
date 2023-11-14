//01. 숨어있는 숫자의 덧셈
function solution(my_string) {
  let answer = 0
  for(let i = 0; i <my_string.length; i++){
    const item = my_string[i]
    if(Number.isInteger(parseInt(item))){
      answer += parseInt(item)
    }else{
      return 0
    }
  }
  return answer
}

function solution(my_string) {
  let sum = 0;
  let new_string = my_string.replace(/[A-z]/g, " ").split(' ')
  for (let i = 0; i < new_string.length; i++) {
      if (!isNaN(new_string[i])) {
      sum += Number(new_string[i])
      }
  }
  return sum
}

//02. 안전지대
const nrf = [1,-1,0,0]
const ncf = [0,0,1,-1]
function dfs(r,c) {
  // 현재 노드를 방문 처리
  const cnt = 0
  cnt += 1
  board[r][c] = 0
  for(let i =0; i < 4; i++){
    const nr = r + nrf[i]
    const nc = c + ncf[i]
    if (0 <= nr < N && 0 <= nc < N){
      if (board[nr][nc] == 1){
        dfs(nr,nc)
      }    
    }
  }
}

function solution(board) {
  const visited = Array(board.length).fill(0)
  const house = []
  for(let i=0; i < board.length; i++){
    for(let j=0; j <board.length;j++){
      if (board[i][j] === 1){
        dfs(i, j)
        house.push(cnt)
      }
    }
  }
  return cnt 
}