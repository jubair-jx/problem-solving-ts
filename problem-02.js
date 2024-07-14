//2.Task: Object Manipulation

//Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
  { title: "Book 1", author: "Author 1", year: 2010 },
  { title: "Book 2", author: "Author 2", year: 2015 },
  { title: "Book 3", author: "Author 3", year: 2020 },
];

const makeNewArray = (data) => {
  const newArray = data.map((item) => item.title);
  return newArray;
};

const result = makeNewArray(books);
console.log(result);
