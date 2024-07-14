//1.Task: Array Filtering And Mapping

//Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 28, gender: "female" },
  { name: "David", age: 22, gender: "male" },
  { name: "Eve", age: 27, gender: "female" },
];

function getInfo(data) {
  const checkFemale = data.filter((item) => item.gender !== "female");
  const result = checkFemale.map((item) => item.name);
  return result;
}
const result = getInfo(people);
console.log(result);
