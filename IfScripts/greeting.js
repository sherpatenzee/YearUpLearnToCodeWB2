var currentHour = 1;

if (currentHour >= 1 && currentHour < 10){
  greeting = "Good Morning!";
}
else if (currentHour >= 10 && currentHour < 17 ){
  greeting = "Good Day!";
}
else if( currentHour >= 17){
  greeting = "Good Evening!";
}
console.log(greeting)