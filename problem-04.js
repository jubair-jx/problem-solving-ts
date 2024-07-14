//5.Task: Find And Modify

//Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

function findAndModifyPerson(person, name, age) {
  const findPerson = person.find((person) => person.name === name);
  if (findPerson) {
    findPerson.age = age;
  } else {
    console.log("Person not found.");
  }
  return findPerson;
}

const result = findAndModifyPerson(people, "John", 20);
console.log(result);
