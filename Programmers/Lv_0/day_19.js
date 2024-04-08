//01. 7의 개수
function solution(array) {
  let cnt = 0
  for(let i = 0; i < array.length; i++){
    const item = String(array[i])
    for(let j = 0; j < item.length; j++){
      const v = item[j]
      if(v === '7'){
        cnt++
      }
    }
  }
  return cnt
}

//02. 잘라서 배열로 저장하기
function solution(my_str, n) {
  const answer = []
  let tmpStr = ''
  for(let i = 0 ; i < my_str.length; i++){
    const item = my_str[i]
    tmpStr += item
    if(i % n === n-1){
      answer.push(tmpStr)
      tmpStr = ''
    }
  }
  if(tmpStr.length > 0){
    answer.push(tmpStr)
  }
  return answer
}


//03. 중복된 숫자 개수
function solution(array, n) {
  let cnt =0
  for(let i = 0; i < array.length; i++){
    const item = array[i]
    if(item === n){
      cnt++
    }
  }
  return cnt
}

//04. 머쓱이보다 키 큰 사람
function solution(array, height) {
  var cnt = 0
  for(let i = 0; i < array.length; i++){
    const item = array[i]
    if(item > height){
      cnt++
    }
  }
  return cnt
}