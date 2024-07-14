//6.Task: Array Reduction

//Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const functionToSumOfArray = (data) => {
  const getEvenNumber = data.filter((num) => num % 2 === 0);
  const sumOfEvenNumber = getEvenNumber.reduce(
    (acc, currentvalue) => acc + currentvalue,
    0
  );
  return sumOfEvenNumber;
};
const result = functionToSumOfArray(numbers);
console.log(result);
