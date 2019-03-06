/**
 * for ... in 문은 객체의 모든 열거 가능한 속성을 반복합니다.
 * for ... of 문은 모든 객체가 아닌 컬랙션만 반복합니다. [Symbol.iterator] 속성이 있는 컬렉션의 프로퍼티를 반복합니다.
*/

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

//  for ... in
for (let i in iterable) {
    console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

//  for ... of
for (let i of iterable) {
    console.log(i); // logs 3, 5, 7
}