var people = 38;
var vanSeat = 15;

var vanRequired = Math.ceil(people / vanSeat);
var cost = 250;
 var totalCost = vanRequired * cost;
 
 var split = totalCost / people;

 var multiply = split * people;

 var vanCost = cost * vanRequired;




 console.log(split.toFixed(2))
 console.log(multiply)
console.log(vanCost)
 

