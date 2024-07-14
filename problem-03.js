//4.Task: Sorting Objects

//Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Honda", model: "Accord", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2010 },
  { make: "Chevrolet", model: "Corvette", year: 2012 },
];
const sortACar = (data) => {
  const sortedArray = data.sort((a, b) => a.year - b.year);
  return sortedArray;
};

const result = sortACar(cars);
console.log(result);
