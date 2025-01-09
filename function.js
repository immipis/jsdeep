// //1) 함수 선언문 : 호이스팅, 중복선언 가능
// let result = firstPlus(10,15);

// function firstPlus(x,y){
//   let sum =  x + y;
//   return sum
// }

// function firstPlus(x,y){
//   console.log('오버로딩')
// }

//2) 함수 표현식 : 선언 이후 사용, 중복 선언 불가
// const secondFunc = function(x,y){
//   return x+y
// }

// console.log(secondFunc(11,55))

//일급 객체 및 일급 함수
/*
  일급객체의 조건
  1) 변수에 할당할 수 있다
  2) 함수의 매개 변수로 전달받는다
  3) 함수의 결과로 반환할 수 있다.
  
  + 자바스크립트는 일급 함수 있슴 => 자바스크립트는 함수를 객체로 취급함
  일급함수의 조건
  1) 변수에 할당할 수 있다
  2) 함수의 매개 변수로 다른 함수를 전달받는다
  3) 함수의 결과로 다른 함수를 반환할 수 있다.
*/

// const printMsg = function(msg){
//   if(msg != ''){
//     console.log(msg);
//     return 'completed!';
//   }
//   else{
//     return 'fial : No Message';
//   }
// }
// // let asd = printMsg('')
// // console.log(asd)

// function addMessage(info,funcVar){
//   let newMsg = `New Msg : ${info}`;
//   let result = funcVar(newMsg)
//   console.log(result,funcVar)
// }

// // addMessage('Today is ...',printMsg)

function newFunction() {
  return function () {
    console.log("새로운 함수")
  }
};

const samleFunc = newFunction();
console.log(newFunction, samleFunc)
samleFunc();

//일급함수 => 고차함수, 콜백함수, 클로저
// 1) 고차함수 : 함수를 매개변수로 받거나 결과값으로 반환하는 함수 forEach
[10, 5, 23, 1].forEach(function (value, index, array) {
  console.log(`${index} : ${value}`)
});
// 2) 콜백함수 : 매개변수로 넘어가는 함수, 함수를 실행하는 주체가 고차함수
/* function(value,index,array){
  console.log(`${index} : ${value}`)
} */



function orderSet() {
  let side = "감자튀김";
  let beverage = '콜라';
  return function selectMenu(burger) {
    console.log('setmenu : ', burger, side, beverage)
  }
}
const mcdonald = orderSet();
// 원칙상 side와 beverage는 사라져야함
console.log(mcdonald)
mcdonald('맥스파이시 치킨 버거');

//3) 클로저 특정함수가 선언될떄 포함되는것(정확히는 환경(과 포함된 변수))을 기억하는것 selectMenu 에서 side,beverage 선언되기에 기억되서 아래서 사용햇을때 출력됨
console.clear()

//내부함수(중첨함수)
function outFun() {
  function inFun() {
    console.log("내부함수")
  }
  inFun();
}
outFun();
//inFun();//내부 함수는 외부에서 사용불가, 함수 안에서만 사용하는 함수

//즉시 실행 함수 : 선언하는 순간 바로 실행 이름이 없기때문에 바로 사용하지 않으면 못씀 (함수(매개변수))(매개변수의 값) 형태로 사용 아래는 예시
//익명 함수 : 보통 1회성
(function (x) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${x}X${i} =${x * i}`)
  }
})(2);

//생성자 함수 1.함수이름 대문자로 시작
let obj = {
  id: 'Hog', pwd: 1234, showInfo: function () {
    console.log(this.id, this.pwd)
  }
}
function User(id, pwd) {
  // 필드
  this.id = id;
  this.pwd = pwd;
  //this 는 객체를 가리킨다 ex) Hong,Kang
  //메서드
  this.showInfo = function () {
    console.log(this.id + ':' + this.pwd)
  }
}
let Hong = new User('Hong', 1234)
let Kang = new User('Kang', 1111)

Hong.id = "Kil-Dong";
Hong.showInfo();
Kang.id = "KangHan";
Kang.showInfo();

//메서드

//화살표 함수 : () => {} 이벤트 핸들러로는 사용하지 않는걸 권장

[10, 5, 23, 1]
  .forEach((value, index, array) => {
    console.log(`${index} : ${value}`)
  });
let testFunc = (id, message) => { return `${id}, ${message}` };
let msg = testFunc('first', 'wellcomd!');
console.log(msg)


// 1. 매개변수가 없는 경우  2.하나의 값만 반환하는 경우
testFunc = () => "매개변수가 없는 화살표 함수";
msg = testFunc();
console.log(msg);

// 3. 매개변수가 하나밖에 없는 경우 4. 실행하고자 하는 명령어가 하나인 경우
testFunc = data => console.log(`${data}를 매개 변수로 받았습니다`)
testFunc(100)

// 매개변수
// 메소드 오버로딩 같은이름의 함수지만 다른 매개변수를 줘서 사용

function logger() {
  for (let arg of arguments) { //arguments : 자동생성 , 정해진 매개변수들 값 저장
    console.log(arg)
  }
}

logger('a');
logger('b', 'c', 'd');
console.clear()
// Rest 매개변수: 이미 선언되어있는 매개 변수에 값을 주고 나머지를 일괄적을 받음 ...rest배열형태
// 매개변수 기본값 : 주어진 인자값이 없는 경우 사용할 값
function plus(x = 0, y = 0, ...rest) {
  let sum = x  + y;
  for (let num of rest) {
    sum += num
  }
  return sum;
}

console.log(plus(1,65,55));
console.log(plus(1));

let aAry=[1,2,3]
let bAry=[9,8,7]
let newAry=[...bAry,...aAry]; //스프레드 문법 펼침 연산자 이렇게 쓰면 [[],[]] 이렇게 들어가지 않고 [배열의 값이 들어간다] 배열과 스트링만 가능 rest와 비슷한 형태 사용처가 다름
console.log(...newAry)