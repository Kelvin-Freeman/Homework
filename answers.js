

////////////////////////////////
// Easy Going
////////////////////////////////
// for (let x = 0; x <= 20; x ++) {
//     console.log(x);
// }


////////////////////////////////
// Get Even
////////////////////////////////
// for (let x = 0; x <= 200; x += 2) {
//     console.log(x);
// }


////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0)
//     console.log("Fizz")
//     if (i % 5 === 0) {
//         console.log("Buzz")
//     }
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("Fizzbuzz");
//     }
//     else {
//         console.log(i);
//     }
// }
 

////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// plantee[2] = 5001
// console.log(plantee);
// wolfy[3] = "Gotham City"
// console.log(wolfy);
// dart[1] = "Hawkins"
// console.log(dart);
// wolfy.shift() 
// console.log(wolfy);
// wolfy.unshift('Gameboy')
// console.log(wolfy);



////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const turtles = ["Donatello", "Leonardo", "Raphael", "michaelangelo"]

// for(let newTurtle of turtles) {
//   let result = newTurtle.toUpperCase()
// console.log(result);
// }






////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8]);
favMovies.sort()
console.log(favMovies);
favMovies.pop()
console.log(favMovies);
favMovies.push("Guardians of the Galaxy")
console.log(favMovies);
favMovies.reverse()
console.log(favMovies);
favMovies.shift()
console.log(favMovies);
favMovies.unshift()
console.log(favMovies);
let spliced = favMovies.splice(3, 1, 'Avatar')
console.log(favMovies);
let sliced = favMovies.slice(0, 10);
let sliceRemain = favMovies.slice(10, 19)
console.log(sliced);
console.log(sliceRemain);
console.log(favMovies[19]);

////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////