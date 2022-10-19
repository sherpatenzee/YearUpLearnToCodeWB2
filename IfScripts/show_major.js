var studentName = "Betty";
var studentMajor = "biol";

if (studentMajor == "biol"){
  majorName = "Biology";
  office = " Science Bldg, Room 310"
}
else if (studentMajor == "csci"){
  majorName = "Computer Science";
  office = "Sheppard Hall , Room 314";
}
else if (studentMajor == "eng"){
  majorName = "English";
  office = "Kerr Hall , Room 201";
}
else if (studentMajor == "hist"){
  majorName = "History";
  office = "Kerr Hall , Room 114";
}
else if (studentMajor == "mkt"){
  majorName = "Marketing";
  office = "Westly Hall , Room 310";
}
else if (studentMajor = "unknown"){
  majorName = "Unknown";
  office = "N/A";
}
console.log("Student :" + studentName)
console.log("Major :" + majorName)
console.log("Advising Location :" + office)