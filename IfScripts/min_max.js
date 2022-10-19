var a = 500;
var b = 2;
var c = 35;


if (a < b && a < c){
  min = a
}

if (a > b && a > c){
  max = a
}
if (b < a && b < c){
  min = b
}

if (b > a && b > c){
  max = b
}
if (c < b && c < a){
  min = a
}

if (c > b && c > a){
  max = c
}
console.log(min)
console.log(max)