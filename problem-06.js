//7.  Task: Leap Year Checker

//Write A Function That Determines Whether A Given Year Is A Leap Year.

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
// Example usage:
const yearToCheck = 2023;
if (isLeapYear(yearToCheck)) {
  console.log(`${yearToCheck} is a leap year. Happy Leap Year!`);
} else {
  console.log(`${yearToCheck} is not a leap year. Happy New Year!`);
}
