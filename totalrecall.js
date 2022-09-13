/* A.  ======Q & A=======
How do we assign a value to a variable? 
  A. With the assignment operator
How do we change the value of a variable?
  A. By using the let keyword
How do we assign an existing variable to a new variable?
  A. Use the = operator (let b = 10.....let a = b)
Remind me, what are declare, assign, and define?
  A. These are all ways to intiate things like variables in JS
What is pseudocoding and why should you do it?
  A. Pseudocoding is writing out your coding ideas in plain English to plan your coding project before you get started.
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  A. You should spend about 90 percent of the time thinking about how to solve a problem. The remaining time should be spent coding.
*/

/* B. =========Strings=======
let firstVariable = 'Hello World'                         //Create a variable called firstVariable and assign it the string "Hello World"
firstVariable = 25                                        //Change the value of this variable to some number 
let secondVariable = 25                                   //Store the value of firstVariablein a new variable called secondVariable
secondVariable = 'How are you?'                           //Change the value of secondVariableto any string.
//What is the value of firstVariable? 25
let yourName = 'Kelvin'                                   //Create a variable called yourNameand set it equal to your name as a string
console.log(`Hello, my name is ${yourName}`);             //Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.*/

/*// C. =======Booleans=======
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');*/


  // D. =====The Farm======
 /* let animal = 'cow'            //Declare a variable animal. Set it to be either "cow" or something else
if(animal == 'cow') {             //Write code that will print out "mooooo" if the it is equal to cow
   console.log('mooooo');
}else {
    console.log( "Hey! You're not a cow.");
}

animal = 'dog'            //Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
if(animal == 'cow') {             //Write code that will print out "mooooo" if the it is equal to cow
   console.log('mooooo');
}else {
    console.log( "Hey! You're not a cow.");
}*/


/*=========== E. Driver's Ed ============

const personAge = 17                                      //Make a variable that holds a person's age; be semantic       
if( personAge >= 16) {                                    //Write code that will print out "Here are the keys!", if the age is 16 years or older
    console.log('Here are the keys!');  
}else {                                                  //if the age is younger than 16, a message should print "Sorry, you're too young."
    console.log('Sorry, you\'re too young.');
}
 */

// ========Loops==============
 
// let i = 10                                             //Write a loop that will print out all the numbers from 0 to 10, inclusive
// for(let i = 0; i <= 10; i++)
// console.log(i);

// let yards = 400                                       //Write a loop that will print out all the numbers from 10 up to and including 400
// for(let yards = 10; yards <= 400; yards++)
// console.log(yards);

/* let bricks = 12
for(let bricks = 12; bricks <= 4000; bricks += 3)
console.log(bricks);*/

//=========Get Even=============
/*let numbers = 100
for(let numbers = 0; numbers <= 100; numbers ++ ) {     //Print out the numbers that are within the range of 1 - 100
    console.log(numbers);
}

numbers = 100
for(let numbers = 0; numbers <= 100; numbers += 2) {
    console.log(`${numbers} is an even number`);       //Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

}

//=======Give me Five=================

 for(let numbers = 0; numbers <= 100; numbers += 5) {  //For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
console.log(`I found a ${numbers % 100}. High five!`); 
 }
for(let numbers = 0; numbers <= 100; numbers += 3) {    //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
     console.log(`I found a ${numbers % 100}. Three is a crowd`);
}
 
if( numbers % 3 === 0 && numbers % 5 === 0){
     console.log(`I found a ${numbers % 3}. Three is a crowd`);
     console.log(`I found a ${numbers % 5}. Hi Five!`);

}
*/
//==========Savings Account=================
// let bankAccount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;
// for (let sum = 0; sum  < bankAccount.length; sum++) {
//   sum += bankAccount[sum];
// }
// console.log(sum)
// const array = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum);

//==============Arrays and Control Flow============
// What are the things in an array called? Indexes
// Do Arrays guarantee those things will be in order? Yes
// What real-life thing could you model with an array? A teacher's class with student names.
