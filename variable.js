/*  
변수의 데이터 타입 : 기본타입 vs 참조타입

1) 기본 n s b

2) 참조 obj arr 

변수 선언 

var
  -호이스팅 : 실제 선언 위치와 상관없이 자유롭게 사용 가능
  -함수 스코프   변수가 살아있는 범위
  -중복 선언 허용
  */
console.log(1,text)
var text = "hello"
console.log(2,text)


console.clear();

(function funcScope(){
  for(var i = 1; i<=3 ; i++){
    for(var j = 1; j<=3 ; j++){

    }
  }
  console.log(i,j);
})();
/*  
2015년 이후부터----
let    : 변수 블럭히ㅣㅇ
const  : 상수 => Object, Array의 경우 내부 값은 변경 가능
-공통점
중복선언 분가 , 블록 스코프, 변수선언 후 사용

*/
(function blockScope(){

})();

//1 기본타입

let name = "Hong kil dong"
let age = 28;
let isChecked = true;

let newName = name;
let newAge = age;
let isSelected = isChecked;

//2 참조타입
let person ={
  name : 'Hong kill dong',
  age : 25,
  isChecked : true
};

let newPers = person;
newPers.name ='Han Sang-Kil';

//상수
const x = 1;

const y = {
  id:'L',
  pwd : 1234
}

y.id = 'K';
y.pwd = 1024;

console.log(y)

// y = {};// 객체를 통체로 바꾸닌건 안댐 객체 안에 들고 있는 값을 변경 가능

let q = null;
let w;
/* 
undefined : 자바스크립트 -> 자동으로 해당 변수에 값이 존재하지 않는 다고 알려줄때
null      : 개발자가 해당 변수의 값을 삭제
*/
console.log(q,w)

const asdf = function(){
  
}