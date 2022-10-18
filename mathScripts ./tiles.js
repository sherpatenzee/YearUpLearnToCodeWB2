var lengthInFeet = 10;
var widthInFeet = 10;

var sqfoot = lengthInFeet * widthInFeet;
var sqfootrequired = sqfoot + (sqfoot * 0.1);
var box = Math.ceil(sqfootrequired / 12);

console.log(box)



