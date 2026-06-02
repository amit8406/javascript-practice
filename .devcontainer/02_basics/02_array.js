const movies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Pulp Fiction",
];

const movies2 = ["DDLJ", "Durandhar","War","Sholay"]

// movies.push(movies2);
// console.log(movies); 

// const allMovies = movies.concat(movies2);
// console.log(allMovies);

const newV = [...movies, ...movies2];
console.log(newV);

const arr = [3,5,7,[1,5,8,9],113,[3,5,7,[1.35]]];
const d=arr.flat(Infinity);

console.log(d)

console.log(Array.from("Amit"))
//console.log(Array.length)
//console.log(Array.bin)

console.log(Array.from({name :"Amit Tiparadi"})) //interesting will return empty array as object is not iterable
