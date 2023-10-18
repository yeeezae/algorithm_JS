//객체

const obj1 = new Object()
const obj2 = {}
const obj3 = {name : '김재이', company: 'Kin Tama' }
/*console.log(obj1)
console.log(obj2)
console.log(obj3)*/
obj3['email'] = 'baegopa@naver.com'
/*객체의 값을 추가하거나 삭제 
//추가

obj3.phone = '010-1111-2222'
console.log(obj3)

//삭제
delete obj3.phone;
console.log(obj3)*/

/*키 값이 있는지 확인 
console.log('email' in obj3)
/*key, value 집합 
//배열형태로 저장
console.log(Object.keys(obj3))
console.log(Object.values(obj3))*/

//객체 순회
//for in 문법
for (const key in obj3){
    console.log(key, obj3[key])
}