// Print out all the leap years in the last 100 years.
//
// For numbers between 0 and 200:
// a) print out multiples of 7.
// b) print out every second odd number.
// c) print out all prime numbers.

var currentYear = new Date().getFullYear();
var startYear =  currentYear - 100;
var leapYearArray = [];

for (var i = startYear; i <= currentYear; i++) {
  if (i % 4 === 0 || i % 100 === 0 && i % 400 === 1) {
    leapYearArray.push(i);
  }
}

console.log(leapYearArray);
