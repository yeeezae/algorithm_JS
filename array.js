const arr1 = new Array();
const arr2 = [];
const arr3 = [7,8,9,10];
const arr4 = new Array(5);
const arr5 = new Array(5).fill(5)
const arr6 = Array.from(Array(5), function(v, k) {
    return k+1;
})
/*
사용하지 않는 권장
console.log(arr6.length);
arr6.length = 3
arr6.length = 10
console.log(arr6)*/

/*사용하기 좋은 배열(편의성 함수) */
//join : 하나의 문자열 혹은 ,로 합침
//console.log(arr6.join(", "))

//reverse : 모든 배열을 거꾸로 돌려주는 -> 원래 배열에도 영향이 가서 주의를 해줘야함
//console.log(arr6.reverse())

//concat : 배열 합치기
//console.log(arr6.concat(arr3))

/*배열 요소 삭제, 추가 
//push(추가), pop(삭제) 배열 끝부분
arr6.push(7)
arr6.push(7,8,9)
console.log(arr6)
arr6.pop() //9 제거
arr6.pop() //8 제거
console.log(arr6.pop()) //팝된 숫자 출력 7
console.log(arr6) //삭제완 */

/*인덱스에 요소 추가 및 삭제 
//shift, unshift
arr6.shift() //0번째 삭제
arr6.shift() //1번쨰 삭제
console.log(arr6)
arr6.unshift(10) //0번쨰에 10 추가
console.log(arr6)*/

/*배열 중간을 잘라서 이용
console.log(arr6.slice(2,4)) //3,4를 잘라내기, 2번째(3), 4번째 바로 전(4)
console.log(arr6) //slice는 원본 배열에 변화가 없음*/

/*배열 중간 을 삭제하고 싶음
arr6.splice(2,2) //2번 인덱스부터 2개 삭제한다
console.log(arr6)*/ 

/*배열 순회 (for문) 
//for (let i = 0; i < 5; i++){
//    console.log(arr6[i])
//}
//단순한 for 구조 for of
for(const item of arr6){
   console.log(item)
}*/

/*배열을 객체처럼 사용할 수 있음 */
console.log(typeof arr6)
arr6["key"] = "value"
console.log(arr6)
//이때 주의해야할 점 : key가 추가되었어도 배열의 길이는 변하지 않는다
//배열의 길이는 내부적으로 관리되기 ㄸㅐ문에 들어가는 객체처럼 사용해도 달라지지 않음
//이건 배열을 올바르게 사용하지 않기 때문에 권장하진 않지만 알아는 둬라
console.log(arr6.length)