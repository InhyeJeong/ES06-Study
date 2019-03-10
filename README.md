# ES06 STUDY
* es06 study를 위한 레파지토리

## forEach()
* 전달받은 **함수**를 배열의 **각각 원소에 대해** 실행
```javascript
var fruits = ['apple','banana','peach','blue berry'];

// for(var i = 0 ; i < fruits.length ; i++) {
//   console.log(fruits[i]);
// }

fruits.forEach(function(fruit) { // .forEach((fruit) =>
    console.log(fruit);
});
```

## map()
* 각 배열 원소에 절달 받은 함수 호출. 그 결과로 **새로운 배열** 생성

```javascript
var fruits = ['apple','banana','peach','blue berry'];
var juice = [];

// for(var i = 0 ; i < fruits.length ; i++){
// 	juice.push(fruits[i]+' juice');
// }

//  map()
var juice = fruits.map(function(fruit) { // .map((fruit) =>
	return fruit + ' juice';
});

var juice = fruits.map(fruit => `${fruit} juice`);
```

## filter()
* 객체 배열에서 어떤 **특정조건**에 맞는 원소들로만 배열 생성

```javascript
var datas = [
    { id: 3, type: 'comment', content: '굿 모닝'},
    { id: 6, type: 'post', content: '좋은 아침이네요' },
    { id: 10, type: 'comment' ,content: '아침에는 시원한 물 한잔' },
    { id: 6, type: 'post', content: '공부하기 싫어요' }];

var filteredData = [];

//  loop
for(var i = 0 ; i < datas.length ; i++){
    if (datas[i].type === 'post'){
        filteredData.push(datas[i]);
    }
}

//  filter()이용
var filteredData = datas.filter( data => {
    return data.type === 'post';
});
```

## reduce()
* 배열의 각 원소에 대해 **첫번째 원소 ~ 마지막 원소** 순으로 연산한 값이 줄도록 함수를 적용시킨다.

```javascript
var scores = [1,2,3,4,5];
var sum = 0;

for(var i = 0 ; i < scores.length ; i++){
  sum += scores[i];
}

//  reduce()
var sum = scores.reduce((sum, number) => sum + number,0);
```

## for...in
* 객체의 **모든** 열거 가능한 속성 반복

```javascript
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};
for(key in grades) {
    document.write("key : "+key+" value : "+grades[key]+"<br />");
}
```
* 결과는 아래와 같다.
```javascript
key :   egoing value : 10
key :   k8805 value : 6
key :   sorialgi value : 80
```
* for 문은 in 뒤에 따라오는 **배열의 key 값**을 in 앞의 **변수 name**에 담아서 반복문을 실행한다. 반복문이 실행될 때 변수 key의 값으로 egoing, k8805, sorialgi가 순차적으로 할당되기 때문에 grades[key]를 통해서 객체의 값을 알아낼 수 있다.

객체에는 객체를 담을수도 있고, 함수도 담을 수 있다. 
## for...of
* 모든 객체가 아닌 **컬렉션만** 반복
```javascript
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
```

**출처**
http://gnujoow.github.io/dev/2016/10/14/Dev6-es6-array-helper/
https://beomy.tistory.com/20
https://opentutorials.org/course/743/6491

