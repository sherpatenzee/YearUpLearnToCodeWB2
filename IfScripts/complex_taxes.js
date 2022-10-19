var payRate = 17.30;
var hoursWorked = 45;
var overTime = hoursWorked - 40;
var filer = "married"

if(hoursWorked <= 40 ){
  grossPay = payRate * hoursWorked;

}
else if (hoursWorked > 40){
  
  grossPay = payRate * 40 + (payRate * 1.5 * overTime);
}

//annual pay
var annual = grossPay * 52;


// annual tax
if(annual <= 12000 && filer == "single"){
  annualTax = annual * 0.05;
}
else if(annual <= 12000 && filer == "married"){
  annualTax = annual * 0.00;
}
else if (annual <= 24999.99 && filer == "single"){
  annualTax = annual * .10;
}
else if (annual <= 24999.99 && filer == "married"){
  annualTax = annual * .06;
}
else if (annual <= 74999.99 && filer == "single"){
  annualTax = annual * .15;
} 
else if (annual <= 74999.99 && filer == "married"){
  annualTax = annual * .11;
} 
else if (annual > 75000 && filer == "single"){
  annualTax = annual * .20;
}
else if (annual > 75000 && filer == "married"){
  annualTax = annual * .20;
}

var weeklyTax = annualTax / 52;
var netPay = grossPay - weeklyTax;

console.log("You worked " + hoursWorked + " hours this period.")
console.log("Because you earn " + payRate + " per hour , your gross pay is $" + grossPay)
console.log("Your filing status is " + filer)
console.log("Your tax withholdings this period is $" + weeklyTax)
console.log("Your net pay is $" + netPay)