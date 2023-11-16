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
function solution(board) {
  let answer = 0;
	
  const dangerArea = [
		[-1, 0], [1, 0], [0, 1], [0, -1], [-1, 1], [1, 1], [1, -1], [-1, -1]
	]; // 위험지역 xy좌표
	
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 1) {
        dangerArea.map((v) => {
          let [x, y] = v;
          [x, y] = [x + i, y + j];
          if (
            x >= 0 &&
            x < board.length &&
            y >= 0 &&
            y < board[i].length &&
            board[x][y] == 0
          )
            board[x][y] = 2;
        });
      }
    }
  }
  board.map(v1 => v1.map(v2 => v2 == 0 ? answer++ : 0));
  return answer;
}