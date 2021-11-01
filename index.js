var read = require('readline-sync');
function checkLeapYear(year){
  if((year % 400 === 0) || (year%100 != 0) && (year%4 === 0)){
    console.log("The year you entered is a Leap Year..!!");
  } else {
    console.log("The year you entered is not a Leap Year..!!");
  }
}

var userInput = read.question('Enter the year : ');

checkLeapYear(userInput);