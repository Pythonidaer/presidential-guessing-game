let presidentsArray2 = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Knox Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Simpson Grant", "Rutherford Birchard Hayes", "James Abram Garfield", "Chester Alan Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Gamaliel Harding", "Calvin Coolidge", "Herbert Clark Hoover", "Franklin Delano Roosevelt", "Harry S Truman", "Dwight David Eisenhower", "John Fitzgerald Kennedy", "Lyndon Baines Johnson", "Richard Milhous Nixon", "Gerald Rudolph Ford", "Jimmy Earl Carter", "Ronald Wilson Reagan", "George Herbert Walker Bush", "Bill Jefferson Clinton", "George Walker Bush", "Barack Hussein Obama", "Donald John Trump", "Joseph Robinette Biden"];

// Maps the Presidents array to a lowercase array containing the same information.
let presArrToLowerCase2 = presidentsArray2.map(pres => pres.toLowerCase());

// Join every name into one string, remove commas and white space
presArrToLowerCase2 = presArrToLowerCase2.join("").replace(/ /g, '');

// Transform a string into an object of unique letters from the above array, then spread them into an array
const getUniqueValues = (array) =>  [...new Set(array)]

// Invoke the function to return a new array of all 26 unique letters of the alphabet, then sort them alhapbetically
presArrToLowerCase2 = getUniqueValues(presArrToLowerCase2).sort();


// console.log(presArrToLowerCase2);


// console.log(presArrToLowerCase2);



// Sunday goals:
// 1. Begin the letters array with the following code:
/*

const getUniqueValues = (array) => (
    [...new Set(array)]
);

let letters = presArrToLowerCase2.join("").replace(/ /g, '')
letters = getUniqueValues(letters).sort();

*/
// 2. I should make a bigger function that strips the letters from the presidential array lowercase
// 3. The reason why, is because this needs to happen each time the presidential array is shrunk
// 4. Therefore, I need to have not only this new functionality but the getUnique stuff in the loop, or at least iterate




/* Backup Code

// letters = randomEnhancer(letters, presArrToLowerCase);


// // Invoke the function to return a new array of all 26 unique letters of the alphabet, then sort them alhapbetically
// getUniqueLetters(letters);
// console.log(letters);


// Store a random letter within a variable, then use that same letter until the function is invoked again.
// let randLetter;





*/

let letters2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
console.log(letters2)

let tester = ["x", "c", "k", "e", "z", "y"];
console.log(tester);

let testfunc = () => {
    for (let i = 0; i < tester.length; i++) {
        letters2 = letters2.filter(letter =>
            !letter.match(RegExp(tester[i], 'g')));
        
    }
    console.log(letters2);
}
// testfunc();

let test2func = (array, array2) => {
    for (let j = 0; j < array2.length; j++) {
        array = array.filter(arr => 
            !arr.match(RegExp(array2[j], 'g')));
    }
    console.log(array);
}

test2func(letters2, tester);