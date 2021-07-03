let presidentsArray2 = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Knox Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Simpson Grant", "Rutherford Birchard Hayes", "James Abram Garfield", "Chester Alan Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Gamaliel Harding", "Calvin Coolidge", "Herbert Clark Hoover", "Franklin Delano Roosevelt", "Harry S Truman", "Dwight David Eisenhower", "John Fitzgerald Kennedy", "Lyndon Baines Johnson", "Richard Milhous Nixon", "Gerald Rudolph Ford", "Jimmy Earl Carter", "Ronald Wilson Reagan", "George Herbert Walker Bush", "Bill Jefferson Clinton", "George Walker Bush", "Barack Hussein Obama", "Donald John Trump", "Joseph Robinette Biden"];

// Maps the Presidents array to a lowercase array containing the same information.
let presArrToLowerCase2 = presidentsArray2.map(pres => pres.toLowerCase());
// console.log(presArrToLowerCase2);

let randoPreso = [];

let lettersPractice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Random letter within the array
let randoLetter = lettersPractice[Math.floor(Math.random() * lettersPractice.length)];
console.log(randoLetter);

// Filters the letters array into a new array comprising of letters that equaled the random letter.
// let newArr = lettersPractice.filter(letter => letter === randoLetter);
// console.log(newArr);



// Filter the presArrToLowerCase2 array to a new array containing only presidents containing the random letter

// what is the name of the array? -- let's go with randoPreso
// Which array are we filtering from? -- the lowercase pres array
// what are we filtering for? -- each pres that has that letter
// randoPreso = presidentsArray2.filter(pres => pres == randoLetter);
// why does this currently log an empty array? Because no president is equivalent to just "u" for instance.
// This requires extracting the match functionality from our RegExp solution

// When user clicks 'Yes' these do match
randoPreso = presArrToLowerCase2.filter(pres => pres.match(RegExp(randoLetter, 'g')));

// When user clicks 'No' these do not match
randoPreso = presArrToLowerCase2.filter(pres => !pres.match(RegExp(randoLetter, 'g')));
console.log(randoPreso)

// Backup code
// Declare a function that loops over the array of lowercased Presidents
// Console log every President that contains the random letter generated
// UPDATE: moving randLetter into function and assigning it each time the function is called achieves a random array each time

// let randomPres = () => {
//     randLetter = randomLetter();
//     // console.log(randomLetter());
//     console.log(randLetter);
//     for (let i = 0; i < presArrToLowerCase.length; i++) {
//         if (presArrToLowerCase[i].match(RegExp(randLetter, 'g'))) {
//             // console.log(presArrToLowerCase[i]);
//             matchPresArr.push(presArrToLowerCase[i]);
//         }
//     }
// }