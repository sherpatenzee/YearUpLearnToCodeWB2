const studentName = "Betty";
let studentMajor = "mkt";


switch (studentMajor){
  case "biol":
    majorName = "Biology";
    office = "Science Bldg, Room 310"
    break;
  case "csci":
    majorName = "Computer Science";
    office = "Sheppard Hall , Room 314"
    break;
  case "eng":
    majorName = "English";
    office = "Kerr Hall , Room 201"
    break;
  case "hist":
    majorName = "History";
    office = "Kerr Hall , Room 114"
    break;
  case "mkt":
    majorName = "Marketing";
    office = "Westly Hall , Room 310"
    break;
 default:
        majorName = "unknown";
        office = "unknown";
        break;
  
}
console.log(majorName)
console.log(office)

