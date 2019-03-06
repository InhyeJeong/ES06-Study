var fruits = ['apple','banana','peach','blue berry'];
var juice = [];

// for(var i = 0 ; i < fruits.length ; i++){
// 	juice.push(fruits[i]+' juice');
// }

var juice = fruits.map(function(fruit) { // .map((fruit) =>
	return fruit + ' juice';
});

var juice = fruits.map(fruit => `${fruit} juice`);