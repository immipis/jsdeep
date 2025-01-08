//1) 함수 선언문 : 호이스팅, 중복선언 가능
let result = firstPlus(10,15);

function firstPlus(x,y){
  let sum =  x + y;
  return sum
}

function firstPlus(x,y){
  console.log('오버로딩')
}
