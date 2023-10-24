//01. 두 수의 나눗셈
//Math.floor
function solution(num1, num2){
    var answer = Math.floor(num1 / num2 * 1000)
    console.log("hello")
    return answer
}

//02. 숫자 비교하기
function solution(num1, num2){
    if (num1 === num2){
        return 1
    }
    else{
        return -1
    }
}

//03. 숫자 비교하기
function solution(num1, num2){
    if (num1 === num2){
        return 1
    }
    else{
        return -1
    }
}

//04. 분수의 덧셈
//1. 분수 더하는 방식 이해
//2. 기약분수 - 최대공약수로 나누기
//2-1. 분자분모중 작은 수를 찾기
//2-2. 작은수를 분자분모로 나눠보기
//2-2-1. 둘다 나누어 떨어지면 그 나눈 수가 최대공약수
//2-2-2. 안나누어떨어지면 작은 수를 1 줄이고 2-2로 돌아가기 
function solution(denum1, num1, denum2, num2){
    var answer = []
    //분수 덧셈
    const denum = denum1 * num2 + denum2 * num1
    const num = num1 * num2

    let minNumber
    if(denum < num){
        minNumber = denum
    }else{
        minNumber = num
    }
    //minNumber에는 작은 수가 들어가 있음

    //나누어 떨어지는것은 나머지가 0인것
    while(true){
        if(denum % minNumber === 0 && num % minNumber === 0){
            return [denum / minNumber, num / minNumber]
        }
        minNumber -= 1
    }
}

//05. 배열 두배 만들기
//1. numbers에서 원소를 꺼내야함
//2. 원소를 꺼내 2배를 한 후 새 배열에 넣어주어야함
//numbers[1, 2, 3, 4, 5]
//numbers[0]
//answer.push(1)
function solution(numbers){
    var answer = []
    //push는 배열의 길이만큼!
    //answer.push(numbers[0]*2)
    //answer.push(numbers[1]*2)
    //answer.push(numbers[2]*2)
    //answer.push(numbers[3]*2)
    //answer.push(numbers[4]*2)
    for(let cnt = 0; cnt < numbers.length; cnt++){
        answer.push(numbers[cnt]*2)
    }
    return answer
}