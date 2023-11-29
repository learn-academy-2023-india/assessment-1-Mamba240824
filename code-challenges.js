// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code: Im trying to output whichever fruit has more characters. 


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)
// Expected output: 9

// Pseudo code: im trying to combine both arrays to get the total number of data types in both arrays.

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"

const stringToArray = currentCohort.split("")
console.log(stringToArray)

stringToArray.reverse()
console.log(stringToArray)

console.log(stringToArray.join(""))

// Expected output: "3202 NRAEL"

// Pseudo code: I need to reverse the letters in the string and than combine them to get the required and expected output. 

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

for(let i = 0; i < stockExchange.length; i++){
    if(stockExchange[i] % 2 !== 0){
        console.log(stockExchange[i])
    }
  }

// Expected output: 13 5 -5 27

// Pseudo code:I am trying to get my code to see if the number is odd and then to output it if it is. 
