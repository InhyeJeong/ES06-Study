var scores = [1,2,3,4,5];
var sum = 0;

for(var i = 0 ; i < scores.length ; i++){
  sum += scores[i];
}

//  reduce()
var sum = scores.reduce((sum, number) => sum + number,0);