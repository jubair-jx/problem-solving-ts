// Task: Unique Values

//Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

let numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9, 10];

// function removeDuplicates(array) {
//   return [...new Set(array)];
// }

// const result = removeDuplicates(numbers);
// console.log(result);

function removeDuplicates(array) {
  const result = array.filter((val, i) => array.indexOf(val) === i);
  return result;
}
const result = removeDuplicates(numbers);
console.log(result);
