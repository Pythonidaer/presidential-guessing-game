// Declare an array of Presidents
// Note 1: Middle names have been added for most or all. Harry Truman's middle name is literally 'S.'
// Note 2: Repeats have been removed (1 or 2 tenures are irrelevant; Grover Cleveland was President twice)
let presidentsArray = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James Knox Polk", "Zachary Taylor", "Millard Fillmore", "Franklin Pierce", "James Buchanan", "Abraham Lincoln", "Andrew Johnson", "Ulysses Simpson Grant", "Rutherford Birchard Hayes", "James Abram Garfield", "Chester Alan Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William Howard Taft", "Woodrow Wilson", "Warren Gamaliel Harding", "Calvin Coolidge", "Herbert Clark Hoover", "Franklin Delano Roosevelt", "Harry S Truman", "Dwight David Eisenhower", "John Fitzgerald Kennedy", "Lyndon Baines Johnson", "Richard Milhous Nixon", "Gerald Rudolph Ford", "Jimmy Earl Carter", "Ronald Wilson Reagan", "George Herbert Walker Bush", "Bill Jefferson Clinton", "George Walker Bush", "Barack Hussein Obama", "Donald John Trump", "Joseph Robinette Biden"];

// Map new array with every President's name to lowercase
let presArrToLowerCase = presidentsArray.map(pres => pres.toLowerCase());

// Declare an array of every letter in the English alphabet
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Get the test Element I want to write the President to
let getPres = document.getElementById("write-president");

// Grab id of 'Begin!' start button
let startBtn = document.getElementById("start-btn");

// Then add functionality to it that generates a randomPresident by letter - when clicked/pushed
startBtn.addEventListener('click', e => {
    e.preventDefault();
    matchPresArr = [];
    randomPres();
    console.log(matchPresArr);
    // getPres.innerHTML = matchPresArr[0].toUpperCase();
    getPres.innerHTML = matchPresArr[Math.floor(Math.random() * matchPresArr.length)].toUpperCase();
})

// Declare a function that grabs a random letter from the letters array
let randomLetter = () => {
    return letters[Math.floor(Math.random() * letters.length)];
}

// Declare a variable that stores a constant letter returned from the randomLetter function
const randLetter = randomLetter();

// Console log the random letter to make sure it lines up with what President indexes are being 
// console.log(randLetter);

let matchPresArr = [];

// Declare a function that loops over the array of lowercased Presidents
// Console log every President that contains the random letter generated
let randomPres = () => {
    console.log(randLetter);
    for (let i = 0; i < presArrToLowerCase.length; i++) {
        if (presArrToLowerCase[i].match(RegExp(randLetter, 'g'))) {
            // console.log(presArrToLowerCase[i]);
            matchPresArr.push(presArrToLowerCase[i]);
        }
    }
}

/*
Todo (later) / PSEUDOCODE:
   1. I want this to be a Presidential guessing game.
   2. I want the User to begin the came by clicking 'Begin!'
   3. When this happens, I want to randomly generate a letter from an array.
   4. I want to write to the screen "Does your President's name contain the letter ${letter}?"
   5. I want two buttons to appear after User begins game: 'Yes' or 'No'
   6. These buttons contain important functionality that decides the contents of future arrays.
   7. Basically, the game starts with an array of every President.
   8. I want the computer to attempt to guess the User's President in 5 turns (or less).
   9. I want to loop and ask the User about their letter 5 times
   10. If the User answers 'yes' to a letter, filter a new array of only the Presidents with that letter.
   11. If the User answers 'no' to a letter, filter a new array of only the Presidents without that letter.
   12. After the fifth time, the array should be relatively smaller - ask the User if it's the first array index.
   13. Ideally, if the filter works well enough, there will only be one index in the array anyway - corret Pres
   14. Note, with each letter guessed, there should be no repeats.
   15. This means I should filter an array each time to elminate the possibility of re-using a letter in 5 turns.
   16. Future Development: Square photos for every president, with alt tags matching their names in the array
   17. Future Dev: When the computer guesses the User's president, let that president photo appear (see Dwight).
   18. Future Dev: This will be a final Yes / No button - if user clicks Yes, a green checkmark over the photo.
   19. Future Dev: If user clicks No, a red X over the photo.
   20. At this point, the game is over, so maybe let a box pop up that asks the user if they want to play again.
   21. If the User chooses to play again, either instruct them to refresh the browser, or button to refresh.

Thought:
   - I bet there is a way to generate an array based off every letter in the Presidents array.
   - Since I want to filter/make new arrays each time anyway, maybe I could have letters based off the array
   .
   - This might make my selection more enhanced, because then it only chooses from letters remaining in the list of possible Presidents

*/